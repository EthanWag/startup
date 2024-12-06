import express from 'express';
import cors from 'cors';
import RegisterHandler from './backend/handlers/RegisterHandler.js';
import LoginHandler from './backend/handlers/LoginHandler.js';
import LogoutHandler from './backend/handlers/LogoutHandler.js';


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
app.listen(port, () => {
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

// WIP ENDPOINTS, will become filled in as I create a database

// returns a list of items currently for sale, if no parameters are given, returns everything
apiRouter.get('/items', async (req, res) => {
    console.log('items!');
});

// adds a item to the market, effectively selling it
apiRouter.post('/items/sell', async (req, res) => {
    console.log('items you have for sale!');
});

// buys a item from the market, makes it out of the database
apiRouter.delete('/items/buy', async (req, res) => {
    console.log('bought an item!');
});