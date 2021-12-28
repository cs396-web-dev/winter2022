require("dotenv").config()
const jwt = require("jsonwebtoken");

router.route("/login")
    .post(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        
        // 1. check that the required data was passed in:
        if (!username || password) {
            res.status(400).send({
                "message": "Bad Request."
            });
            return;
        }

        // 2. get the user from the database:
        const userObject = await User.findOne({"username": username });
        
        // console.log(userObject);

        // 3. make sure that a valid user was found and that the passwords match:
        if (!userObject || userObject.password !== password) {
            res.status(400).send({
                "message": "Bad username or password."
            });
            return;
        }

        // 4. create the signed token:
        token = jwt.sign(
            { _id: userObject._id, username: userObject.username }, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15s' }
        )

        // 5. Give the token to the requestor:
        res.status(200).send({
            accessToken: token
        });
    });