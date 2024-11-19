const express = require('express');
const cors = require('cors');
const uuid = require('uuid');
const app = express();


const port =  process > 2 ? process.argv[2] : 5050;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('services'));

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
    createUser(req,res);
});

// Logins in a user
apiRouter.post('/auth/login', async (req, res) => {
    loginUser(req,res);
});

// Logs out a user
apiRouter.delete('/auth/logout', async (req, res) => {
    logOutUser(req,res);
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

// TEMPORARY METHODS FOR GETTING ENDPOINTS, WILL BE REMOVED LATER
// =================================================================

users = {};
items ={};


function genAuth() {
    return (uuid.v4());
}

function loginUser(req,res) {
    const userData = req.body;

    let user = Object.values(users).find((u) => u.username === userData.username);
    if (user) {
        if (userData.password === user.password) {
            user.token = genAuth();
            res.status(200).send({ token: user.token });
            console.log('logged in!');
        } else {
            res.status(401).send({ msg: 'Unauthorized' });
        }
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
}

function createUser(req,res) {
    const userData = req.body;

    const myUsername = userData.username;
    const myEmail = userData.email;
    const myPassword = userData.password;
    const myPhone = userData.phone;


    // does a bit of error checking
    if(!myUsername || !myEmail || !myPassword || !myPhone) {
        res.status(400).send({ msg: 'Missing required fields' });
        console.log('missing required fields');
        return;
    }
    if (users[myUsername]) {
        res.status(409).send({ msg: 'Existing user' });
        console.log('existing user');
        return;
    }

    let newUser = {
        username: myUsername,
        email: myEmail,
        password: myPassword,
        phone: myPhone,
        token: genAuth() // just logs the user in right off the bat
    }

    users[newUser.username] = newUser;

    res.status(200).send({ token: newUser.token });
    console.log('created user!');

    // Add logic to use userData
}

function logOutUser(req,res) {
    const userData = req.body;

    let user = Object.values(users).find((u) => u.token === userData.token);
    console.log(userData.token);
    console.log(user.token)
    console.log(user);
    if (user) {
        user.token = '';
        res.status(204).end();
    }else{
        res.status(401).send({ msg: 'Unauthorized' });
    }
}

// =================================================================


// more endpoints in the future, for now these will do just fine

// websocket router will be stored below