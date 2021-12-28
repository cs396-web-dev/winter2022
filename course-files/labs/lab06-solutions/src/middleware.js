require("dotenv").config()
const jwt = require("jsonwebtoken");


const cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE");
    next();
};

const authenticateToken = (req, res, next) => {
    /* STEPS
    1. get the token sent from the user,
    2. verify that token is valid
    3. pass that user to the route
    */

    // 1. Get the token from the header:
    const authHeader = req.headers['authorization'] // BEARER TOKEN
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) {
        res.status(401).send({
            "message": "Missing Token."
        });
        return;
    }

    // 2. Verify the token:
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, serializedData) => {
        if (err) {
            // invalid token. you don't have access:
            res.status(403).send({
                "message": "Invalid Token"
            });
            // don't forget to return!
            return;
        }

        // 3. Attach the user to the request object so it's accessible in the route:
        req.user = serializedData;
        next();
    });
     
};

module.exports = {
    cors: cors,
    authenticateToken: authenticateToken
};