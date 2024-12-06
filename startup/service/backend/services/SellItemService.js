import { v4 as uuid } from 'uuid';
import DataAccessItems from '../DAO/DataAccessItems.js'
import DataAccessAuthorization from "../DAO/DataAccessAuthorization.js";


export default class SellItemService {
    async sellItem(user,authToken,itemName,itemPrice,itemDescription,itemCategory,itemImage){

        try{
            const authCheck = new DataAccessAuthorization();
            if(!await authCheck.checkAuthorization(authToken)){
                let error = new Error("Error: Invalid authorization");
                error.errno = 401
                throw error;
            }

            const id = uuid(); // generate an Item id for the item
            const dataAccess = new DataAccessItems();
            await dataAccess.createItem(user,id,itemName,itemPrice,itemDescription,itemCategory,itemImage);
            return id; //returns the id of the item, idk

        }catch(error){
            throw error;
        }
    }
}
