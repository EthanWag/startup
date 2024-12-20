import {MongoClient, ServerApiVersion} from 'mongodb';

const url = `mongodb+srv://eswagstaff:Cooper379@StartupCluster.j9up8.mongodb.net/UserData?retryWrites=true&w=majority`;
const dbName = 'UserData';
const colName = 'Users';
// Authorization assumes that a user has already been created

const client = new MongoClient(url,{
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
});


export default class DataAccessAuthorization {

    async createAuthorization(username,authToken) {
        try {
            await client.connect();
            const user = await client.db(dbName).collection(colName).findOne({ username: username });

            if (user) {
                await client.db(dbName).collection(colName).updateOne(
                    { username: username },
                    { $set: { authorization: authToken } }
                );
            }else{
                let error = new Error();
                error.errno = 404;
                throw error;
            }

        } catch (e) {
            let error;
            switch(e.errno){
                case 404:
                    error = new Error("ERROR: User not found")
                    error.errno = 404;
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

    async checkAuthorization(authorization){
        try{
            await client.connect();
            return !!(await client.db(dbName).collection(colName).findOne({authorization: authorization}));
        }catch(e){
            let error = new Error("ERROR: Internal Server Error")
            error.errno = 500;
            throw error;
        }finally{
            await client.close();
        }
    }

    async deleteAuthorization(authorization){
        try{

            await client.connect();
            const user = await client.db(dbName).collection(colName).findOne({authorization:authorization});
            console.log(user)
            if(user !== null){
                await client.db(dbName).collection(colName).updateOne(
                    {authorization:authorization},
                    { $set: { authorization: null } }
                );
            }else{
                let error = new Error();
                error.errno = 404;
                throw error;
            }

        }catch(e){
            let error;
            switch(e.errno){
                case 404:
                    error = new Error("ERROR: User not found")
                    error.errno = 404;
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

    updateAuthorization = async (username,authorization) => {

    }
}


