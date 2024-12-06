import DataAccessItems from '../DAO/DataAccessItems.js'

export default class GetItemService{
    async getItems(itemName,category,count,username){

        try{
            const dataAccess = new DataAccessItems();
            return await dataAccess.getItems(itemName,category,count,username);
        }catch(error) {
            throw error;
        }
    }
}
