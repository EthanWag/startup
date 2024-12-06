import BuyItemService from '../services/BuyItemService.js'
import ErrorHandler from "../public/ErrorHandler.js";

export default class BuyItemHandler{
    async handleBuyItemRequest(request,response){

        const authToken = request.headers.authorization;
        const id = request.body.id;
        try{
            const service = new BuyItemService()
            const serviceResponse = await service.buyItem(authToken,id)
            const ResponsePackage = {item:serviceResponse}
            response.status(200).send(ResponsePackage)
        }catch(e){
            const handler = new ErrorHandler();
            handler.handleError(e,response)
        }
    }
}