import LogoutService from '../services/LogoutService.js'
import ErrorHandler from '../public/ErrorHandler.js'

export default class LogoutHandler{

    async handleLogoutRequest(request, response){

        try{
            const authToken = request.headers.authorization;

            const service = new LogoutService();
            await service.logout(authToken);
            response.status(200).end();

        }catch(e){
            const handler = new ErrorHandler();
            handler.handleError(e, response);
        }
    }
}