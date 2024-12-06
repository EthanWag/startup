import DataAccessItems from '../DAO/DataAccessItems.js'
import DataAccessAuthorization from "../DAO/DataAccessAuthorization.js";


export default class BuyItemService{

    async buyItem(authToken,id){
        try{
            const checkAuth = new DataAccessAuthorization()

            if(!await checkAuth.checkAuthorization(authToken)){
                let error = new Error('Unauthorized')
                error.errno = 401
                throw error
            }

            const dataAccess = new DataAccessItems()
            return await dataAccess.removeItem(id)
        }catch(e){
            throw e
        }
    }
}