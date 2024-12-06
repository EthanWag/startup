import {MongoClient} from 'mongodb';

const url = `mongodb+srv://eswagstaff:Cooper379@StartupCluster.j9up8.mongodb.net/UserData?retryWrites=true&w=majority`;
const dbName = 'ItemData';
const colName = 'Items';
// Authorization assumes that a user has already been created

const client = new MongoClient(url,{
    tls: true,
    serverSelectionTimeoutMS: 3000,
    autoSelectFamily: false,
});


export default class DataAccessItems {

    async createItem(username,id,itemName,itemPrice,itemDescription,itemCategory,itemImage) {
        try {
            await client.connect();
            await client.db(dbName).collection(colName).insertOne({
                username: username,
                id: id,
                itemName: itemName,
                itemPrice: itemPrice,
                itemDescription: itemDescription,
                itemCategory: itemCategory,
                itemImage: itemImage
            });

        } catch (e) {

            let error = new Error("ERROR: Internal Server Error")
            error.errno = 500;
            throw error;

        }finally{
            await client.close();
        }
    }

    async getItems(itemName,category,count,username) {

        try{
            await client.connect(); // come back to count, may need to do a bit differently
            return await client.db(dbName).collection(colName).find({itemName:itemName,category:category,count:count,username:username}).toArray();
        }catch(err){

            console.log('something went wrong') // put actual error checking here in the future
            return [];

        }finally {
            await client.close();
        }
    }

    async removeItem(id) {
        try{
            await client.connect();
            const item = await client.db(dbName).collection(colName).findOne({ id: id });
            if (item) {
                await client.db(dbName).collection(colName).deleteOne({ id: id });
                return item;
            }else{
                let error = new Error("ERROR: Item Not Found");
                error.errno = 404;
                throw error;
            }

        } catch (err) {
            let error;
            switch(err.errno){
                case 404:
                    error = new Error("ERROR: Item Not Found");
                    error.errno = 404;
                    throw error;
                case 500:
                    error = new Error("ERROR: Internal Server Error");
                    error.errno = 500;
                    throw error;
                default:
                    error = new Error("ERROR: Unknown Error");
                    error.errno = 500;
                    throw error;
            }
        } finally {
            await client.close();
        }
    }
}