// /**
//  * This test file tests the following endpoints:
//  * Uncomment to run these tests!
//  *    /doctors/favorites            GET, POST
//  *    /doctors/favorites/:id        GET, DELETE
//  *    /companions/favorites         GET, POST
//  *    /companions/favorites/:id     GET, DELETE
//  */

// const utils = require("./util/testUtil");
// const FavoriteDoctor = require("../src/schema/FavoriteDoctor");
// const FavoriteCompanion = require("../src/schema/FavoriteCompanion");

// const {
//     simplify, fixtures, areSameCompanionsInBothArrays, areSameDoctorsInBothArrays,
//     expect404, initExtraCreditFixtures
// } = utils;

// const asserttype = require("chai-asserttype");
// const axios = require("axios");
// const chai = require("chai");

// chai.use(asserttype);
// const expect = chai.expect;


// /***********************
//  * Favoriting Doctors
//  ***********************/

// describe("/doctors/favorites", function () {

//     this.timeout(10000);

//     beforeEach(done => {
//         // create some favorites:
//         initExtraCreditFixtures(done);
//     });

//     describe("GET", () => {

//         it("should return a list of the 2 favorite Doctors", done => {
//             // doctor 4 & 9 are pre-populated in the FavoriteDoctor collection
//             const expected = [
//                 fixtures.doctorD4,
//                 fixtures.doctorD9
//             ];
//             axios.get(utils.route("/doctors/favorites"))
//                 .then(response => {
//                     expect(response.status).to.equal(200);
//                     expect(response.data.length).to.eql(expected.length);
//                     expect(areSameDoctorsInBothArrays(response.data, expected)).to.be.true;
//                     done();
//                 })
//                 .catch(err => done(err));
//         });

//         describe("POST", () => {

//             it("should create a new Favorite object", done => {
    
//                 // 1. create new doctor:
//                 axios.post(utils.route("/doctors/favorites"), { doctor_id: fixtures.doctorD11._id })
//                     .then(response => {
//                         expect(response.status).to.equal(201);
//                         const doctor_id = response.data._id;
    
//                         // check that the correct data are returned:
//                         expect(simplify(response.data)).to.eql(simplify(fixtures.doctorD11));
                        
//                         // now delete the doctor you just created from MongoDB:
//                         FavoriteDoctor
//                             .findOneAndDelete({ doctor: doctor_id })
//                             .then(FavoriteDoctor.getDoctor)
//                             .then(newDoc => {
//                                 expect(simplify(newDoc)).to.eql(simplify(fixtures.doctorD11));
//                                 done();
//                             })
//                             .catch(err => done(err));
                        
//                     })
//                     .catch(err => done(err));
//             });

//             it("should throw an error if favorite alread exists", done => {
//                 axios.post(utils.route("/doctors/favorites"), { doctor_id: fixtures.doctorD4 })
//                     .then(response => {
//                         expect(response.status).to.equal(500);
//                         done();
//                     })
//                     .catch(err => {
//                         if (err.response && err.response.status == 500) {
//                             done();
//                         } else {
//                             throw err;
//                         }
//                     })
//                     .catch(err => done(err));
//             });
    
//             it("should throw an error if missing data", done => {
//                 axios.post(utils.route("/doctors/favorites"), { doc: fixtures.doctorD11 })
//                     .then(response => {
//                         expect(response.status).to.equal(500);
//                         done();
//                     })
//                     .catch(err => {
//                         if (err.response && err.response.status == 500) {
//                             done();
//                         } else {
//                             throw err;
//                         }
//                     })
//                     .catch(err => done(err));
//             });

//             it("should throw an error if doctor doesn't exist", done => {
//                 axios.post(utils.route("/doctors/favorites"), { doctor_id: "8675309" })
//                     .then(response => {
//                         expect(response.status).to.equal(500);
//                         done();
//                     })
//                     .catch(err => {
//                         if (err.response && err.response.status == 500) {
//                             done();
//                         } else {
//                             throw err;
//                         }
//                     })
//                     .catch(err => done(err));
//             });
//         });

//     });

// });

// describe("/doctors/favorites/:doctor_id", function () {

//     this.timeout(10000);

//     beforeEach(done => {
//         initExtraCreditFixtures(done);
//     });

//     /*describe("GET", () => {

//         it("should find the favorited Doctor object with the specified id", done => {
//             const doctor_id = fixtures.doctorD4._id;
//             axios.get(utils.route(`/doctors/favorites/${doctor_id}`))
//                 .then(response => {
//                     expect(response.status).to.equal(200);
//                     expect(simplify(response.data)).to.eql(simplify(fixtures.doctorD4));
//                     done();
//                 })
//                 .catch(err => done(err));   
//         });
        
//         it("should return a 404 error for a non-existent id", done => {
//             expect404('/doctors/favorites/nonsense', done);
//         });
        
//         it("should return a 404 error for a doctor who has not been favorited.", done => {
//             expect404(`/doctors/favorites/${fixtures.doctorD11._id}`, done);
//         });
//     });*/

//     describe("DELETE", () => {
//         it("should delete the specified companion from the database", done => {
            
//             // 1. delete the favorited doctor:
//             const doctor_id = fixtures.doctorD4._id;
//             const deleteURL = `/doctors/favorites/${doctor_id}`;
//             axios.delete(utils.route(deleteURL))
//                 .then(response => {
//                     expect(response.data).to.equal('');
//                     expect(response.status).to.equal(200);

//                     // 2. then make sure that the doctor is no longer saved 
//                     // as a favorite in the database:
//                     FavoriteDoctor.getDoctor(doctor_id)
//                         .then(data => {
//                             expect(data).to.equal(null);
//                             done();
//                         })
//                         .catch(err => done(err));
                    
//                 })
//                 .catch(err => done(err));
//         });

//     });

// });

// /***********************
//  * Favoriting Companions
//  ***********************/


// describe("/companions/favorites", function () {

//     this.timeout(10000);

//     beforeEach(done => {
//         // create some favorites:
//         initExtraCreditFixtures(done);
//     });

//     describe("GET", () => {

//         it("should return a list of the 2 favorite companions", done => {
//             const expected = [
//                 fixtures.companion1,
//                 fixtures.companion2
//             ];
//             axios.get(utils.route("/companions/favorites"))
//                 .then(response => {
//                     expect(response.status).to.equal(200);
//                     expect(response.data.length).to.eql(expected.length);
//                     expect(areSameCompanionsInBothArrays(response.data, expected)).to.be.true;
//                     done();
//                 })
//                 .catch(err => done(err));
//         });
//     });

//     describe("POST", () => {

//         it("should create a new Favorite object", done => {

//             // 1. create new doctor:
//             axios.post(utils.route("/companions/favorites"), { companion_id: fixtures.companion3._id })
//                 .then(response => {
//                     expect(response.status).to.equal(201);
//                     const companion_id = response.data._id;

//                     // check that the correct data are returned:
//                     expect(simplify(response.data)).to.eql(simplify(fixtures.companion3));
                    
//                     // now delete the doctor you just created from MongoDB:
//                     FavoriteCompanion
//                         .findOneAndDelete({ companion: companion_id })
//                         .then(FavoriteCompanion.getCompanion)
//                         .then(newCompanion => {
//                             expect(simplify(newCompanion)).to.eql(simplify(fixtures.companion3));
//                             done();
//                         })
//                         .catch(err => done(err));
                    
//                 })
//                 .catch(err => done(err));
//         });
    
//         it("should throw an error if companion has already been favorited", done => {
//             axios.post(utils.route("/companions/favorites"), { companion_id: fixtures.companion1 })
//                 .then(response => {
//                     expect(response.status).to.equal(500);
//                     done();
//                 })
//                 .catch(err => {
//                     if (err.response && err.response.status == 500) {
//                         done();
//                     } else {
//                         throw err;
//                     }
//                 })
//                 .catch(err => done(err));
//         });
    
//         it("should throw an error if missing data", done => {
//             axios.post(utils.route("/companions/favorites"), { comp: fixtures.companion3 })
//                 .then(response => {
//                     expect(response.status).to.equal(500);
//                     done();
//                 })
//                 .catch(err => {
//                     if (err.response && err.response.status == 500) {
//                         done();
//                     } else {
//                         throw err;
//                     }
//                 })
//                 .catch(err => done(err));
//         });

//         it("should throw an error if doctor doesn't exist", done => {
//             axios.post(utils.route("/companions/favorites"), { companion_id: "8675309" })
//                 .then(response => {
//                     expect(response.status).to.equal(500);
//                     done();
//                 })
//                 .catch(err => {
//                     if (err.response && err.response.status == 500) {
//                         done();
//                     } else {
//                         throw err;
//                     }
//                 })
//                 .catch(err => done(err));
//         });

//     });

// });

// describe("/companions/favorites/:companion_id", function () {

//     this.timeout(10000);
    
//     beforeEach(done => {
//         initExtraCreditFixtures(done);
//     });

//     /*describe("GET", () => {

//         it("should find the favorited Companion object with the specified id", done => {
//             const companion_id = fixtures.companion1._id;
//             axios.get(utils.route(`/companions/favorites/${companion_id}`))
//                 .then(response => {
//                     expect(response.status).to.equal(200);
//                     expect(simplify(response.data)).to.eql(simplify(fixtures.companion1));
//                     done();
//                 })
//                 .catch(err => done(err));   
//         });
        
//         it("should return a 404 error for a non-existent id", done => {
//             expect404('/companions/favorites/nonsense', done);
//         });
        
//         it("should return a 404 error for a doctor who has not been favorited.", done => {
//             expect404(`/companions/favorites/${fixtures.companion3._id}`, done);
//         });
//     });*/

//     describe("DELETE", () => {
//         it("should delete the specified companion from the database", done => {
            
//             // 1. delete the favorited companion:
//             const companion_id = fixtures.companion1._id;
//             const deleteURL = `/companions/favorites/${companion_id}`;
//             axios.delete(utils.route(deleteURL))
//                 .then(response => {
//                     expect(response.data).to.equal('');
//                     expect(response.status).to.equal(200);

//                     // 2. then make sure that the companion is no longer saved 
//                     // as a favorite in the database:
//                     FavoriteCompanion.getCompanion(companion_id)
//                         .then(data => {
//                             expect(data).to.equal(null);
//                             done();
//                         })
//                         .catch(err => done(err));
                    
//                 })
//                 .catch(err => done(err));
//         });

//     });

// });