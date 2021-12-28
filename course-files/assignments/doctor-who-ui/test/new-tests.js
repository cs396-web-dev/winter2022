/**
 * This test file tests the following endpoints:
 *    /doctors                  GET, POST
 *    /doctors/:id              GET, PATCH, DELETE
 *    /companions               GET, POST
 *    /companions/:id           GET, PATCH, DELETE
 */

const data = require("../config/data.json");
const utils = require("./util/testUtil");
const Doctor = require("../src/schema/Doctor");
const Companion = require("../src/schema/Companion");
const { resetDB, fixtures, initFixtures, areArraysEqual } = utils;

    
const mockDoctorExtras = {
    "name": "Wonder Woman",
    "seasons": [3, 4, 5, 6],
    "image_url": "https://upload.wikimedia.org/wikipedia/en/6/6a/Graham_O%27Brien.jpg",
    "ordering": 20
};

const mockCompanionExtras = {
    "name": "Sponge Bob",
    "character": "Square Pants",
    "seasons": [99, 100, 101, 102],
    "doctors": [
        "6075029f746e3f38a5f0e94c",
        "6075029f746e3f38a5f0e94d"
    ],
    "alive": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/en/6/6a/Graham_O%27Brien.jpg",
    "ordering": 50
};

const asserttype = require("chai-asserttype");
const axios = require("axios");
const chai = require("chai");

chai.use(asserttype);
const expect = chai.expect;


describe("[NEW] Updated /doctors", function () {

    this.timeout(10000);

    describe("GET", () => {

        beforeEach(done => {
            resetDB(done);
        });

        it("Doctors should be sorted", done => {
            axios.get(utils.route("/doctors"))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data.length).to.eql(13);
                    response.data.forEach((doc, idx) => {
                        delete doc.__v;
                        expect(doc).to.eql(data.doctors[idx]);
                        expect(doc.ordering).to.equal(data.doctors[idx].ordering).to.equal(idx + 1);
                    })
                    done();
                })
                .catch(err => done(err));
        });
    });

    describe("POST", () => {

        it("create honors ordering and image_url", done => {

            // 1. create new doctor:
            axios.post(utils.route("/doctors"), mockDoctorExtras)
                .then(response => {
                    expect(response.status).to.equal(201);
                    const _id = response.data._id;
                    
                    // check that the correct data are returned:
                    delete response.data.__v;
                    delete response.data._id;
                    expect(response.data).to.eql(mockDoctorExtras);
                    
                    // now delete the doctor you just created from MongoDB:
                    Doctor
                        .findOneAndDelete({ _id: _id })
                        .then(newDoc => {
                            expect("" + newDoc._id).to.eql(_id);
                            done();
                        })
                        .catch(err => done(err));
                })
                .catch(err => done(err));
        });
    });
});


describe("[NEW] Updated /doctors/:id", function () {

    this.timeout(10000);

    beforeEach(done => {
        initFixtures(done);
    });

    afterEach(done => {
        resetDB(done);
    });

    describe("GET", () => {

        it("get honors ordering and image_url", done => {
            const _id = fixtures.doctor._id;
            axios.get(utils.route(`/doctors/${_id}`))
                .then(response => {
                    expect(response.status).to.equal(200);
                    const actualDoc = fixtures.doctor.toJSON();
                    actualDoc._id = "" + actualDoc._id;
                    expect(response.data).to.eql(actualDoc);
                    done();
                })
                .catch(err => done(err));   
        });
    });

    describe("PATCH", () => {
            
        it("patch honors ordering and image_url", done => {
            
            const _id = "" + fixtures.doctor._id;

            // patch it:
            axios.patch(utils.route(`/doctors/${_id}`), mockDoctorExtras)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data._id).to.equal(_id);
                    expect(response.data.name).to.equal(mockDoctorExtras.name);
                    expect(areArraysEqual(response.data.seasons, mockDoctorExtras.seasons)).to.be.true;
                    expect(response.data.image_url).to.equal(mockDoctorExtras.image_url);
                    expect(response.data.ordering).to.equal(mockDoctorExtras.ordering);

                    // verify that change was made to database:
                    Doctor.findById(_id)
                        .then(updatedDoc => {
                            expect(updatedDoc.image_url).to.equal(mockDoctorExtras.image_url);
                            expect(updatedDoc.ordering).to.equal(mockDoctorExtras.ordering);
                            done();
                        })
                        .catch(err => done(err))
                })
                .catch(err => done(err));
        });
    });
});




describe("[NEW] Updated /companions", function () {

    this.timeout(10000);

    describe("GET", () => {

        beforeEach(done => {
            resetDB(done);
        });

        it("get honors ordering and image_url", done => {
            axios.get(utils.route("/companions"))
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data.length).to.eql(35);
                    expect(response.data.length).to.equal(data.companions.length);
                    response.data.forEach((companion, idx) => {
                        delete companion.__v;
                        expect(companion).to.eql(data.companions[idx]);
                        expect(companion.ordering).to.equal(idx + 1);
                    })
                    done();
                })
                .catch(err => done(err));
        });

    });

    describe("POST", () => {

        it("post honors ordering and image_url", done => {

            // 1. create new companion:
            axios.post(utils.route("/companions"), mockCompanionExtras)
                .then(response => {
                    expect(response.status).to.equal(201);
                    const _id = response.data._id;
                    delete response.data.__v;
                    delete response.data._id;

                    // check that the correct data are returned:
                    expect(response.data).to.eql(mockCompanionExtras);
                    
                    // now delete the companion you just created from MongoDB:
                    Companion
                        .findOneAndDelete({ _id: _id })
                        .then(newCompanion => {
                            expect("" + newCompanion._id).to.eql(_id);
                            done();
                        })
                        .catch(err => done(err));  
                })
                .catch(err => done(err));
        });
    });
});



describe("[NEW] Updated /companions/:id", function () {

    this.timeout(10000);

    beforeEach(done => {
        initFixtures(done);
    });

    describe("GET", () => {

        it("get honors ordering and image_url", done => {
            const _id = "" + fixtures.companion._id;
            axios.get(utils.route(`/companions/${_id}`))
                .then(response => {
                    expect(response.status).to.equal(200);
                    const actualCompanion = fixtures.companion.toJSON();
                    expect(response.data._id).to.equal(_id);
                    expect(response.data.name).to.equal(actualCompanion.name);
                    expect(response.data.character).to.equal(actualCompanion.character);
                    expect(response.data.alive).to.equal(actualCompanion.alive);
                    expect(response.data.image_url).to.equal(actualCompanion.image_url);
                    expect(response.data.ordering).to.equal(actualCompanion.ordering);
                    expect(areArraysEqual(response.data.seasons, actualCompanion.seasons)).to.be.true;

                    done();
                })
                .catch(err => done(err));   
        });
    });

    describe("PATCH", () => {

        afterEach(done => {
            resetDB(done);
        });

        it("patch honors ordering and image_url", done => {
            const _id = "" + fixtures.companion._id;

            // patch it:
            axios.patch(utils.route(`/companions/${_id}`), mockCompanionExtras)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.data._id).to.equal(_id);
                    expect(response.data.name).to.equal(mockCompanionExtras.name);
                    expect(response.data.character).to.equal(mockCompanionExtras.character);
                    expect(response.data.alive).to.equal(mockCompanionExtras.alive);
                    expect(response.data.image_url).to.equal(mockCompanionExtras.image_url);
                    expect(response.data.ordering).to.equal(mockCompanionExtras.ordering);
                    expect(areArraysEqual(response.data.seasons, mockCompanionExtras.seasons)).to.be.true;

                    // verify that change was made to database:
                    Companion.findById(_id)
                        .then(updatedCompanion => {
                            expect(updatedCompanion.image_url).to.equal(mockCompanionExtras.image_url);
                            done();
                        })
                        .catch(err => done(err))
                })
                .catch(err => done(err));
        });
    });

});