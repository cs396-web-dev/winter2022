import { createBoard, playMove } from "./connect4.js";

const initGame = websocket => {
    websocket.addEventListener("open", () => {
        // Send an "init" event according to who is connecting.
        const params = new URLSearchParams(window.location.search);
        let event = { type: "init" };
        if (params.has("join")) {
            // Second player joins an existing game.
            event.join = params.get("join");
        } else if (params.has("watch")) {
            // Spectator watches an existing game.
            event.watch = params.get("watch");
        } else {
            // First player starts a new game.
        }
        websocket.send(JSON.stringify(event));
    });
};

const showMessage = message => {
    window.setTimeout(() => window.alert(message), 50);
};

const receiveMoves = (board, websocket) => {
    websocket.addEventListener("message", ({ data }) => {
        const event = JSON.parse(data);
        switch (event.type) {
        case "init":
            // Create links for inviting the second player and spectators.
            document.querySelector(".join").href = "?join=" + event.join;
            document.querySelector(".watch").href = "?watch=" + event.watch;
            break;
        case "play":
            // Update the UI with the move.
            console.log(event);
            playMove(board, event.player, event.column, event.row);
            break;
        case "win":
            showMessage(`Player ${event.player} wins!`);
            // No further messages are expected; close the WebSocket connection.
            websocket.close(1000);
            break;
        case "error":
            showMessage(event.message);
            break;
        default:
            throw new Error(`Unsupported event type: ${event.type}.`);
        }
    });
}

const sendMoves = (board, websocket) => {
  // Don't send moves for a spectator watching a game.
    const params = new URLSearchParams(window.location.search);
    if (params.has("watch")) {
            return;
    }

    // When clicking a column, send a "play" event for a move in that column.
    board.addEventListener("click", ({ target }) => {
        const column = target.dataset.column;
        // Ignore clicks outside a column.
        if (column === undefined) {
            return;
        }
        const event = {
            type: "play",
            column: parseInt(column, 10),
        };
        console.log('sending...', event);
        websocket.send(JSON.stringify(event));
    });
};

const getWebSocketServer = () => {
    if (window.location.href.indexOf('github.io') != -1) {
        return "wss://chat-server-flask.herokuapp.com/";
    } else {
        return "ws://localhost:8081/";
    }
};


const init = () => {
    // Initialize the UI.
    const board = document.querySelector(".board");
    createBoard(board);
    // Open the WebSocket connection and register event handlers.
    const websocket = new WebSocket(getWebSocketServer());
    initGame(websocket);
    receiveMoves(board, websocket);
    sendMoves(board, websocket);
};

init();