import SellItemService from '../services/SellItemService.js'
import ErrorHandler from '../public/ErrorHandler.js';

export default class SellItemHandler {

    async handleSellItemRequest(request,response){

        const user = request.body.username;
        const authToken = request.body.authorization;

        const itemName = request.body.itemName;
        const itemPrice = request.body.itemPrice;
        const itemDescription = request.body.itemDescription;
        const itemCategory = request.body.itemCategory;
        const itemImage = request.body.itemImage;

        try{
            let sellItemService = new SellItemService();
            let sellItemResponse = await sellItemService.sellItem(user,authToken,itemName,itemPrice,itemDescription,itemCategory,itemImage);
            // do some work here
            response.status(200).send(sellItemResponse);
        }catch(error){
            const errorHandler = new ErrorHandler();
            errorHandler.handleError(error,response);
        }
    }
}