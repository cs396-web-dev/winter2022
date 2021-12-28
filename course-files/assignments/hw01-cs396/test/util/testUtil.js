const process = require("process");

const axios = require("axios");
const chai = require("chai");
const expect = chai.expect;

const helpers = {
    fixtures: {
        doctorD4: {
            "_id": "d4",
            "name": "Tom Baker",
            "seasons": [12, 13, 14, 15, 16, 17, 18]
        },
        doctorD9: {
            "_id": "d9",
            "name": "Christopher Eccelson",
            "seasons": [27]
        },
        doctorD11: {
            "_id": "d11",
            "name": "Matt Smith",
            "seasons": [31, 32, 33]
        },
        companion1: {
            "_id": "c3_3__4_1",
            "name": "Elisabeth Sladen",
            "character": "Sarah Jane Smith",
            "doctors": ["d3", "d4"],
            "seasons": [11, 12, 13, 14],
            "alive": true
        },
        companion2: {
            "_id": "c7_2",
            "name": "Sophie Aldred",
            "character": "Ace",
            "doctors": ["d7"],
            "seasons": [24, 25, 26],
            "alive": true
        },
        companion3: {
            "_id": "c5_4",
            "name": "Mark Strickson",
            "character": "Vislor Turlough",
            "doctors": ["d5"],
            "seasons": [20, 21],
            "alive": true
        }
    },
    mockDoctor: {
        "name": "Sarah Van Wart",
        "seasons": [1, 2, 3, 4, 5, 6]
    },
    mockCompanion: {
        "name": "Cooper Barth",
        "character": "Crash Override",
        "doctors": ["d4"],
        "seasons": [12, 13, 14],
        "alive": true
    },
    mockId: "this_is_a_fake_id",
    mockPatchData: {
        name: "new_name",
        seasons: [0]
    },
    mockPatchCompanion: {
        name: "new_name",
        "seasons": [12, 13],
        "character": "Zer0",
    },
    route: route => {
        const endpoint = (process.env.CURRENT_ENDPOINT || "http://localhost:8081") + route;
        // console.log('ENDPOINT:', endpoint);
        return endpoint;
    },
    testImplemented: (response, done) => {
        if (response.status === 501) {
            done("Status code 501 received: Not Implemented.");
        }
    },
    simplify: (item) => {
        const newItem = JSON.parse(JSON.stringify(item));
        delete newItem._id;
        delete newItem.__v;
        // delete newItem.doctors;
        delete newItem.doc_id;
        delete newItem.old_doctor_ids;
        return newItem;
    },
    areSameDoctorsInBothArrays: (actual, expected) => {
        const matched = actual.filter(a => {
            const matches = expected.filter(b => {
                return a._id == b._id &&
                    a.name == b.name && 
                    JSON.stringify(a.seasons) === JSON.stringify(b.seasons);
            });
            return matches.length === 1;
        });
        return matched.length === expected.length;
    }, 
    areSameCompanionsInBothArrays: (actual, expected) => {
        const matched = actual.filter(a => {
            const matches = expected.filter(b => {
                return a._id == b._id &&
                    a.name == b.name && 
                    JSON.stringify(a.seasons) === JSON.stringify(b.seasons) &&
                    a.alive == b.alive && 
                    a.character == b.character && 
                    JSON.stringify(a.doctors) === JSON.stringify(b.doctors)
            });
            return matches.length === 1;
        });
        return matched.length === expected.length;
    },
    expect404: (url, done) => {

        // console.log(url);
        axios.get(helpers.route(url))
            .then(response => {
                expect(response.status).to.equal(404);
                done();
            })
            .catch(err => {
                if (err.response && err.response.status == 404) {
                    done();
                } else {
                    throw err;
                }
            })
            .catch(err => done(err));
    },

    expect404Delete: (url, done) => {
        // console.log(url);
        axios.delete(helpers.route(url))
            .then(response => {
                expect(response.status).to.equal(404);
                done();
            })
            .catch(err => {
                if (err.response && err.response.status == 404) {
                    done();
                } else {
                    throw err;
                }
            })
            .catch(err => done(err));
    },

    expect404Patch: (url, done) => {
        // console.log(url);
        axios.patch(helpers.route(url))
            .then(response => {
                expect(response.status).to.equal(404);
                done();
            })
            .catch(err => {
                if (err.response && err.response.status == 404) {
                    done();
                } else {
                    throw err;
                }
            })
            .catch(err => done(err));
    },
    resetDB: done => {
        axios.get(helpers.route("/test/reset"))
            .then(response => {
                expect(response.status).to.equal(200);
                done();
            })
            .catch(err => done(err));
    },
    getDoctorFromDB: _id => {
        return new Promise((resolve, reject) => {
            axios
            .get(helpers.route(`/test/doctors`))
            .then(response => {
                const docs = response.data.filter(doc => doc._id === _id);
                // expect(docs.length, `Posted doctor with _id="${_id}" not found in data.doctors.`).to.eql(1);  
                const doc = docs[0];
                // console.log('helpers:', doc);
                resolve(doc);
            })
            .catch(ex => {
                reject(ex)
            });
        });
    },
    getCompanionFromDB: _id => {
        return new Promise((resolve, reject) => {
            axios
            .get(helpers.route(`/test/companions`))
            .then(response => {
                const companions = response.data.filter(companion => companion._id === _id);
                const companion = companions[0];
                resolve(companion);
            })
            .catch(ex => {
                reject(ex)
            });
        });
    }
}

module.exports = helpers;