import express from 'express';
import cors from 'cors';
import RegisterHandler from './backend/handlers/RegisterHandler.js';
import LoginHandler from './backend/handlers/LoginHandler.js';
import LogoutHandler from './backend/handlers/LogoutHandler.js';
import GetItemHandler from './backend/handlers/GetItemHandler.js';
import SellItemHandler from './backend/handlers/SellItemHandler.js';
import BuyItemHandler from './backend/handlers/BuyItemHandler.js';

import { WebSocketServer } from 'ws';


const app = express();
// handlers for the database

// =================================================================


const port =  process > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// CORS middleware
app.use(cors());
app.options('*', cors());

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// this causes the server to listen on the given port number
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Register a new user
apiRouter.post('/auth/create', async (req, res) => {
    const handler = new RegisterHandler()
    await handler.handleRegisterRequest(req,res);
});

// Logins in a user
apiRouter.post('/auth/login', async (req, res) => {
    const handler = new LoginHandler()
    await handler.handleLoginRequest(req,res);
});

// Logs out a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const handler = new LogoutHandler()
    await handler.handleLogoutRequest(req,res);
});

// returns a list of items currently for sale, if no parameters are given, returns everything
apiRouter.get('/items', async (req, res) => {
    const handler = new GetItemHandler()
    await handler.handleGetItem(req,res);
});

// adds a item to the market, effectively selling it
apiRouter.post('/items/sell', async (req, res) => {
    const handler = new SellItemHandler()
    await handler.handleSellItemRequest(req,res);
});
// buys a item from the market, makes it out of the database
apiRouter.delete('/items/buy', async (req, res) => {
    const handler = new BuyItemHandler()
    await handler.handleBuyItemRequest(req,res);
});


// =================================================================
// endpoints for websockets

const wss = new WebSocketServer({ server });
let connections = [];
let clickerCount = 0;
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        clickerCount++;
        connections.forEach((conn) => {
            conn.send(clickerCount);
        });
    });
    ws.on('close', () => {
        connections = connections.filter((conn) => {
            return conn !== ws;
        });
    });
    connections.push(ws);
    ws.send(clickerCount);
})