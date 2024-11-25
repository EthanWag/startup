import LoginService from '../services/LoginService.js';
import ErrorHandler from '../public/ErrorHandler.js';




export default class LoginHandler {
     async handleLoginRequest(request,response){

        const username = request.body.username;
        const password = request.body.password;

        try{

            // if we get an error in the database, then we will catch it and report the error in the catch statement
            const service = new LoginService();
            const serviceResponse = await service.login(username,password);

            const ResponsePackage = {token:serviceResponse};
            response.status(200).send(ResponsePackage);

        }catch(e){
            const handler = new ErrorHandler();
            handler.handleError(e,response)
        }
     }
}
