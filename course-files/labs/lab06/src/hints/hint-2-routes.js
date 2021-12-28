const authenticateToken = (req, res, next) => {
    
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
}