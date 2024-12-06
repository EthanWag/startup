import GetItemService from "../services/GetItemService.js";
import ErrorHandler from '../public/ErrorHandler.js';


export default class GetItemHandler {
    async handleGetItem(request,response){

        const itemName = request.body.itemName;
        const itemCategory = request.body.itemCatagory;
        const itemCount = request.body.itemCount;
        const username = request.body.username;
        try{
            const service = new GetItemService()
            const serviceResponse = await service.getItems(itemName,itemCategory,itemCount,username)
            const ResponsePackage = {items:serviceResponse}
            response.status(200).send(ResponsePackage)
        }catch(e){
            const handler = new ErrorHandler();
            handler.handleError(e,response)
        }
    }
}