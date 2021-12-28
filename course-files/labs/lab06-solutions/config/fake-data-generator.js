// https://zetcode.com/javascript/fakerjs/
const faker = require('faker');

// min: inclusive, max: exclusive
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 
const users = []
const tasks = [];

// generate 3 users:
for (let i = 0; i < 3; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = `${firstName}_${lastName}`.toLowerCase()
    const emailSuffix = faker.internet.email().split('@')[1];
    const email = `${username}@${emailSuffix}`;
    
    // passwords should be 6 letters or less:
    password = faker.random.word();
    while (password.length > 6) {
        password = faker.random.word();
    }

    // add user to "database"
    users.push({
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password.toLowerCase()
    })
};

// generate 4 comments per user
users.forEach(user => {
    for (let i = 0; i < 4; i++) {
        // add task to "database"
        tasks.push({
            order: (i + 1),
            username: user.username,
            task: faker.lorem.paragraphs(1),
            done: [true, false][randomNumber(0, 2)]
        })
    }
});

console.log(JSON.stringify({
    users: users,
    tasks: tasks
}, "", 3));
