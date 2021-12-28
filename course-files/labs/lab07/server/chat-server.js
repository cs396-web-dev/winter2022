const ws = require("ws");

const port = process.env.PORT || 8081;
const wss = new ws.Server({ port });
console.log("Application listening on PORT: " + port);

// Holds the usernames of all connected users
// You can convert a set to a list to send using Array.from(loggedInUsers)
const loggedInUsers = new Set();

const sendJSON = (json, client) => {
    console.log('sending the following JSON:', json);
    client.send(JSON.stringify(json));
};

wss.on("connection", socket => {
    console.log("Client connected on PORT: " + port);
    
    socket.on("message", message => {
        const data = JSON.parse(message);
        /*******************************************************************
         * Server-Side Logic: Your Job 
         *******************************************************************
         * The wss.clients.forEach loop (line 55, below) naively sends any 
         * message received by the server to all of the connected clients.
         * Your job is to do a little processing and validation of the 
         * messages before you send stuff to the client. Specifically:
         * 
         *   1. If the data.type is "login", add the logged in user to
         *      the loggedInUsers set. Then, send the following message
         *      back to the clients:
         *          {
         *              "type": "login",
         *              "users": Array.from(loggedInUsers)
         *          }
         * 
         *   2. If the data.type is "disconnect", removed the user from
         *      the loggedInUsers set. Then, send the following message
         *      back to the clients:
         *          {
         *              "type": "disconnect",
         *              "users": Array.from(loggedInUsers)
         *          }
         * 
         *   3. If the data.type is "chat", just pass on the entire
         *      data object to the clients (no processing needed).
         * 
         *   4. Otherwise, ignore the message (don't pass it on), and
         *      log it to the console:
         * 
         *           console.log('Unrecognized message type:', data);
         ********************************************************************/



        // this loop sends the message that was just received to all the connected clients:
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                
                // replace this line of code in order to implement 
                // the logic outlined above.
                sendJSON(data, client);
            }
        });
    });
});
