const asserttype = require("chai-asserttype");
const axios = require("axios");
const chai = require("chai");

const data = require("../config/data.json");
const utils = require("./util/testUtil");

chai.use(asserttype);
const expect = chai.expect;

const doctor = data.doctors[3]; //'d4'
const testCompanion = data.companions[3];

describe("/doctors", () => {

    afterEach(done => {
        utils.resetDB(done);
    });

    describe("GET", () => {
        it("should return a list of all Doctors", done => {
            axios.get(utils.route("/doctors"))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(data.doctors);
                    expect(response.data.length).to.eql(13);
                    expect(response.data[0]).to.eql(data.doctors[0]);
                    done();
                })
                .catch(err => done(err));
        });
    });

    describe("POST", () => {

        it("should create a new Doctor object", done => {

            // 1. create new doctor:
            axios.post(utils.route("/doctors"), utils.mockDoctor)
                .then(response => {
                    expect(response.status).to.equal(201);
                    const _id = response.data._id;
                    expect(_id).to.be.string();
                    delete response.data._id;
                    expect(response.data).to.eql(utils.mockDoctor);
                    return _id;
                })
                .then(utils.getDoctorFromDB) // make sure it exists in the db                                     
                .then(doc => {
                    expect(doctor).to.exist;
                    expect(
                        utils.simplify(doc)
                    ).to.eql(
                        utils.simplify(utils.mockDoctor)
                    ); 
                    done();
                })
                .catch(err => done(err));
        });

        it("should create throw an error if missing data", done => {
            axios.post(utils.route("/doctors"), {name: 'Blah'})
                .then(response => {
                    expect(response.status).to.equal(500);
                    done();
                })
                .catch(err => {
                    if (err.response && err.response.status == 500) {
                        done();
                    } else {
                        throw err;
                    }
                })
                .catch(err => done(err));
        });
    });
});

describe("/doctors/:id", () => {

    afterEach(done => {
        utils.resetDB(done);
    });

    describe("GET", () => {

        it("should find the Doctor object with the specified id", done => {
            axios.get(utils.route(`/doctors/${doctor._id}`))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(doctor);
                    done();
                })
                .catch(err => done(err));
        });
        it("should return a 404 error for a non-existent id", done => {
            utils.expect404(`/doctors/${utils.mockId}`, done);
        });
    });

    describe("PATCH", () => {

        it("should update only the specified fields of the given doctor", done => {
            const _id = doctor._id;

            // patch it:
            axios.patch(utils.route(`/doctors/${_id}`), { name: "new_name" })
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data._id).to.equal(_id);
                    return _id;
                })
                .then(utils.getDoctorFromDB) // make sure it exists in the db   
                .then(doctor => {
                    expect(doctor).to.exist;
                    expect(doctor.name).to.eql('new_name'); 
                    expect(doctor._id).to.eql(_id);
                    done(); 
                })
                .catch(err => done(err));
        });

        it("should update the given doctor with the specified information", done => {
            const _id = doctor._id;

            // patch it:
            axios.patch(utils.route(`/doctors/${_id}`), utils.mockPatchData)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data._id).to.equal(_id);
                    return _id;
                })
                .then(utils.getDoctorFromDB) // make sure it exists in the db   
                .then(doctor => {
                    expect(doctor).to.exist;
                    expect(utils.simplify(doctor)).to.eql(utils.simplify(utils.mockPatchData));
                    done(); 
                })
                .catch(err => done(err));
        });
    });

    describe("DELETE", () => {
        const _id = utils.fixtures.doctorD4._id;
        const url = `/doctors/${_id}`
        it("should delete the specified doctor from the data object", done => {

            // then delete it:
            axios.delete(utils.route(url))
                .then(response => {
                    expect(response.status).to.equal(200);
                    return _id;
                })
                .then(utils.getDoctorFromDB) // verification step  
                .then(doctor => {
                    // make sure it does not exist in the db  
                    expect(doctor).not.to.exist;
                    done(); 
                })
                .catch(err => done(err));
        });
    });
});

describe("/doctors/:id/companions", () => {

    describe("GET", () => {

        it("should retrieve all companions of the given doctor", done => {
            axios.get(utils.route(`/doctors/${doctor._id}/companions`))
                .then(response => {
                    const companions = [{"_id":"c3_3__4_1","name":"Elisabeth Sladen","character":"Sarah Jane Smith","doctors":["d3","d4"],"seasons":[11,12,13,14],"alive":true},{"_id":"c4_2","name":"Ian Merter","character":"Harry Sullivan","doctors":["d4"],"seasons":[12,13],"alive":true},{"_id":"c4_3","name":"Louise Jameson","character":"Leela","doctors":["d4"],"seasons":[14,15],"alive":true},{"_id":"c4_4","name":"John Leeson","character":"K-9","doctors":["d4"],"seasons":[15,16,17,18],"alive":false},{"_id":"c4_5__5_1","name":"Matthew Waterhouse","character":"Adric","doctors":["d4","d5"],"seasons":[18,19],"alive":false},{"_id":"c4_6__5_2","name":"Sarah Sutton","character":"Nyssa","doctors":["d4","d5"],"seasons":[18,19,20],"alive":true},{"_id":"c4_7__5_3","name":"Janet Fielding","character":"Tegan Jovanka","doctors":["d4","d5"],"seasons":[18,19,20,21],"alive":true}];
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(companions);
                    done();
                })
                .catch(err => done(err));
        });
    });
});

describe("/doctors/:id/goodparent", () => {

    describe("GET", () => {

        it("D4 Bad Parent", done => {
            axios.get(utils.route(`/doctors/d4/goodparent`))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(false);
                    done();
                })
                .catch(err => done(err));
        });

        it("D13 Bad Parent", done => {
            axios.get(utils.route(`/doctors/d13/goodparent`))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(true);
                    done();
                })
                .catch(err => done(err));
        });

        it("D1221 Bad Parent", done => {
            utils.expect404(`/doctors/dsadsad/goodparent`, done);
        });

    });
});

describe("/companions", () => {

    afterEach(done => {
        utils.resetDB(done);
    });

    describe("GET", () => {

        it("should return a list of all companions", done => {
            axios.get(utils.route("/companions"))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(data.companions);
                    done();
                })
                .catch(err => done(err));
        });
    });

    describe("POST", () => {
        it("should create a new Companion object", done => {
            
            // create new companion:
            axios.post(utils.route("/companions"), utils.mockCompanion)
                .then(response => {
                    expect(response.status).to.equal(201);
                    const _id = response.data._id;
                    expect(_id).to.be.string();

                    // make sure everything saved:
                    expect(utils.simplify(response.data)).to.eql(
                        utils.simplify(utils.mockCompanion));
                    return _id;
                })
                .then(utils.getCompanionFromDB) // verification                                 
                .then(companion => {
                    // make sure it exists in the db    
                    expect(companion).to.exist;
                    expect(utils.simplify(companion)).to.eql(
                        utils.simplify(utils.mockCompanion));
                    done();
                })
                .catch(err => done(err));
        });

        it("should create throw an error if missing data", done => {

            axios.post(utils.route("/companions"), {name: 'Blah'})
                .then(response => {
                    expect(response.status).to.equal(500);
                    done();
                })
                .catch(err => {
                    if (err.response && err.response.status == 500) {
                        done();
                    } else {
                        throw err;
                    }
                })
                .catch(err => done(err));
        });
    });
});

describe("/companions/:id", () => {

    afterEach(done => {
        utils.resetDB(done);
    });

    describe("GET", () => {

        it("should find the companion object with the specified id", done => {
            axios.get(utils.route(`/companions/${testCompanion._id}`))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data).to.eql(testCompanion);
                    done();
                })
                .catch(err => done(err));
        });

        it("should return a 404 error for a non-existent id", done => {
            utils.expect404(`/companions/${utils.mockId}`, done);
        });
    });

    describe("PATCH", () => {

        it("should update only the specified fields of the given companion", done => {
            const _id = testCompanion._id;

            // patch it:
            axios.patch(utils.route(`/companions/${_id}`), { name: "new_name" })
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data._id).to.equal(_id);
                    return _id;
                })
                .then(utils.getCompanionFromDB) // verification                                 
                .then(companion => {
                    // make sure it exists in the db    
                    expect(companion).to.exist;
                    expect(companion._id).to.equal(_id);
                    expect(companion.name).to.eql('new_name');
                    expect(companion.seasons).to.eql(testCompanion.seasons);
                    done();
                })
                .catch(err => done(err));
        });

        it("should update the given doctor with the specified information", done => {
            const _id = testCompanion._id;

            // patch it:
            axios.patch(utils.route(`/companions/${_id}`), utils.mockCompanion)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data._id).to.equal(_id);
                    return _id;
                })
                .then(utils.getCompanionFromDB) // verification                                 
                .then(companion => {
                    // make sure it exists in the db    
                    expect(companion).to.exist;
                    expect(utils.simplify(companion)).to.eql(
                        utils.simplify(utils.mockCompanion));
                    done();
                })
                .catch(err => done(err));
        });
    });

    describe("DELETE", () => {

        it("should delete the specified companion from the data object", done => {
            const _id = utils.fixtures.companion1._id;
            const url = `/companions/${_id}`;
            axios.delete(utils.route(url))
                .then(response => {
                    expect(response.status).to.equal(200);
                    return _id;
                })
                .then(utils.getCompanionFromDB) // verification step  
                .then(companion => {
                    // make sure it does not exist in the db  
                    expect(companion).not.to.exist;
                    done(); 
                })
                .catch(err => done(err));
        });
    });
});

describe("/companions/:id/doctors", () => {

    describe("GET", () => {

        it("should return all of the doctors of a particular companion", done => {
            axios.get(utils.route(`/companions/${testCompanion._id}/doctors`))
                .then(response => {
                    const doctors = [{"_id":"d2","name":"Patrick Troughton","seasons":[4,5,6]}];
                    expect(response.data).to.have.deep.members(doctors);
                    done();
                })
                .catch(err => done(err));
        });

        it("should return a 404 error for a non-existent id", done => {
            utils.expect404(`/companions/${utils.mockId}/doctors`, done);
        });
    });

});

describe("/companions/:id/friends", () => {

    describe("GET", () => {

        it("should return all of the friends of the main companion", done => {
            axios.get(utils.route(`/companions/${testCompanion._id}/friends`))
                .then(response => {
                    const friends = [{"_id":"c2_2","name":"Michael Craze","character":"Ben Jackson","doctors":["d2"],"seasons":[4],"alive":true},{"_id":"c2_3","name":"Frazer Hines","character":"Jamie McCrimmon","doctors":["d2"],"seasons":[4,5,6,22],"alive":true}];
                    expect(response.data).to.have.deep.members(friends);
                    const ids = friends.map(item => item._id);
                    expect(testCompanion._id.includes(ids)).to.be.false;
                    done();
                })
                .catch(err => done(err));
        });

        it("should return all of the friends of companion 'c4_6__5_2'", done => {
            // and one more...
            axios.get(utils.route(`/companions/c4_6__5_2/friends`))
                .then(response => {
                    const friends = [{"_id":"c4_4","name":"John Leeson","character":"K-9","doctors":["d4"],"seasons":[15,16,17,18],"alive":false},{"_id":"c4_5__5_1","name":"Matthew Waterhouse","character":"Adric","doctors":["d4","d5"],"seasons":[18,19],"alive":false},{"_id":"c4_7__5_3","name":"Janet Fielding","character":"Tegan Jovanka","doctors":["d4","d5"],"seasons":[18,19,20,21],"alive":true},{"_id":"c5_4","name":"Mark Strickson","character":"Vislor Turlough","doctors":["d5"],"seasons":[20,21],"alive":true}];
                    expect(response.data).to.have.deep.members(friends);
                    const ids = friends.map(item => item._id);
                    expect(testCompanion._id.includes(ids)).to.be.false;
                    done();
                })
                .catch(err => done(err));
        });

        it("should return a 404 error for a non-existent id", done => {
            utils.expect404(`/companions/${utils.mockId}/friends`, done);
        });

    });

});

describe("/companions/crossover", () => {
    
    describe("GET", () => {

        it("should show all companions that travelled with two or more doctors.", done => {
            axios.get(utils.route(`/companions/crossover`))
                .then(response => {
                    const crossovers = [{"_id":"c3_3__4_1","name":"Elisabeth Sladen","character":"Sarah Jane Smith","doctors":["d3","d4"],"seasons":[11,12,13,14],"alive":true},{"_id":"c4_5__5_1","name":"Matthew Waterhouse","character":"Adric","doctors":["d4","d5"],"seasons":[18,19],"alive":false},{"_id":"c4_6__5_2","name":"Sarah Sutton","character":"Nyssa","doctors":["d4","d5"],"seasons":[18,19,20],"alive":true},{"_id":"c4_7__5_3","name":"Janet Fielding","character":"Tegan Jovanka","doctors":["d4","d5"],"seasons":[18,19,20,21],"alive":true},{"_id":"c5_5__6_1","name":"Nicola Bryant","character":"Peri Brown","doctors":["d5","d6"],"seasons":[21,22,23],"alive":true},{"_id":"c6_2__7_1","name":"Bonnie Langford","character":"Mel Bush","doctors":["d6","d7"],"seasons":[23,24],"alive":true},{"_id":"c9_1__10_1","name":"Billie Piper","character":"Rose Tyler","doctors":["d9","d10"],"seasons":[27,28,30],"alive":true},{"_id":"c9_3__10_5__13_4","name":"John Barrowman","character":"Captain Jack Harkness","doctors":["d9","d10","d13"],"seasons":[27,29,30,38],"alive":true},{"_id":"c11_3__12_1","name":"Alex Kingston","character":"River Song","doctors":["d11","d12"],"seasons":[32,35],"alive":true},{"_id":"c11_4__12_2","name":"Jenna Coleman","character":"Clara Oswald","doctors":["d11","d12"],"seasons":[33,34,35],"alive":false}];
                    expect(response.data).to.have.deep.members(crossovers);
                    done();
                })
                .catch(err => done(err));
        });

    });

});
