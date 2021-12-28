require("dotenv").config()
const jwt = require("jsonwebtoken");

router.route("/login")
    .post(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        
        if (!username || password) {
            res.status(400).send({
                "message": "Bad Request."
            });
            return;
        }

        const userObject = await User.findOne({"username": username });
        // console.log(userObject);
        if (!userObject || userObject.password !== password) {
            res.status(400).send({
                "message": "Bad username or password."
            });
            return;
        }
        token = jwt.sign(
            { _id: userObject._id, username: userObject.username }, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15s' }
        )
        res.status(200).send({
            accessToken: token
        });
    });