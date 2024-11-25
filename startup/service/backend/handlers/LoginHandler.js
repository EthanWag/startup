import LoginService from '../services/LoginService.js';
import ErrorResponse from '../public/ErrorHandler.js';




export default class LoginHandler {
     handleLoginRequest(request,response){

        const username = request.body.username;
        const password = request.body.password;

        try{

            // if we get an error in the database, then we will catch it and report the error in the catch statement
            const serviceResponse = LoginService.login(username,password);
            response.send(serviceResponse);

        }catch{
            // Temporary error handling
            console.log("there was an error")

        }
     }
}
