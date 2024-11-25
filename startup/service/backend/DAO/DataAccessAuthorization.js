import {MongoClient, ServerApiVersion} from 'mongodb';

const url = `mongodb+srv://eswagstaff:Cooper379@StartupCluster.j9up8.mongodb.net/UserData?retryWrites=true&w=majority`;
const dbName = 'UserData';
const colName = 'Users';
// Authorization assumes that a user has already been created
export default class DataAccessAuthorization {

    async createAuthorization(username,authToken) {
        const client = new MongoClient(url,{
        serverApi: {
            version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        try {

            await client.connect();
            const user = await client.db(dbName).collection(colName).findOne({ username: username });

            if (user) {
                await client.db(dbName).collection(colName).updateOne(
                    { username: username },
                    { $set: { authorization: authToken } }
                );
            }

        } catch (e) {
            console.error("An Error has accured in the DataAccessAuthorization.js file");
            console.error(e);
        }finally{
            await client.close();
        }
    }

    getAuthorization = async (authorization) => {

    }

    async deleteAuthorization(authorization){
        const client = new MongoClient(url,{
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        try{

            await client.connect();
            const user = await client.db(dbName).collection(colName).findOne({authorization:authorization});
            if(user){
                await client.db(dbName).collection(colName).updateOne(
                    {authorization:authorization},
                    { $set: { authorization: null } }
                );
            }

        }catch(e){
            console.error(e);
        }finally{
            await client.close();
        }
    }

    updateAuthorization = async (username,authorization) => {

    }
}


