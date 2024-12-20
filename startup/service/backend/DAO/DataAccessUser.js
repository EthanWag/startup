import {MongoClient, ServerApiVersion} from 'mongodb';

const url = `mongodb+srv://eswagstaff:Cooper379@StartupCluster.j9up8.mongodb.net/UserData?retryWrites=true&w=majority`;

const dbName = 'UserData';
const colName = 'Users';


const client = new MongoClient(url,{
    tls: true,
    serverSelectionTimeoutMS: 4000,
    autoSelectFamily: false,
});

// Authorization assumes that a user has already been created
export default class DataAccessUser {
    async createUser(username, password, email, phone) {
        try {
            await client.connect();
            const validUser = await client.db(dbName).collection(colName).findOne({username: username}) === null

            if(validUser){
                await client.db(dbName).collection(colName).insertOne({
                    username: username,
                    password: password,
                    email: email,
                    phone: phone
                });
            } else {
                let error = new Error()
                error.errno = 400;
                throw error
            }

        } catch (e) {
            let error
            switch(e.errno){
                case 400 || 11000:
                    error = new Error("ERROR: User already exists")
                    error.errno = 400;
                    throw error;
                case 500:
                    error = new Error("ERROR: Internal Server Error")
                    error.errno = 500;
                    throw error;
            }
        }finally{
            await client.close();
        }
    }

    async getUser(username) {
        try {
            await client.connect();
            return await client.db(dbName).collection(colName).findOne({username: username});
        } catch (e) {
            console.error("An Error has accured in the DataAccessUser.js file");
            console.error(e);
        } finally {
            await client.close();
        }
    }
}