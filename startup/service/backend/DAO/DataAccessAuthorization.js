import { MongoClient } from 'mongodb';

const url = `mongodb+srv://eswagstaff:Cooper379@StartupCluster.j9up8.mongodb.net/UserData?retryWrites=true&w=majority`;
const dbName = 'UserData';
const colName = 'Users';
// Authorization assumes that a user has already been created
export class DataAccessAuthorization {

    async createAuthorization(username,authToken) {
        const client = new MongoClient(url);
        try {

            await client.connect();

            const user = await client.db(dbName).collection(colName).findOne({ username: username });

            if (user) {
                const result = await client.db(dbName).collection(colName).updateOne(
                    { username: username },
                    { $set: { authorization: authToken } }
                );
            }

        } catch (e) {
            console.error("An Error has accured in the DataAccessAuthorization.js file");
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


