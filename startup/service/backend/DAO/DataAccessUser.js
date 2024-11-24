import {MongoClient, ServerApiVersion} from 'mongodb';

const url = `mongodb+srv://eswagstaff:Cooper379@StartupCluster.j9up8.mongodb.net/UserData?retryWrites=true&w=majority`;

const dbName = 'UserData';
const colName = 'Users';
// Authorization assumes that a user has already been created
export class DataAccessUser {

    async createUser(username, password, email, phone) {
        const client = new MongoClient(url, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        try {

            await client.connect();

            const result = await client.db(dbName).collection(colName).insertOne({
                username: username,
                password: password,
                email: email,
                phone: phone
            });

        } catch (e) {
            console.error("An Error has accured in the DataAccessUser.js file");
            console.error(e);
        }
    }

    getAuthorization = async (username,authorizationId) => {

    }

    deleteAuthorization = async (username,authorizationId) => {

    }

    updateAuthorization = async (username,authorization) => {

    }
}