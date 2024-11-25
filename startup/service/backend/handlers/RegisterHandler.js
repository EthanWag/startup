import RegisterService from "../services/RegisterService.js";
import ErrorHandler from "../public/ErrorHandler.js";

export default class RegisterHandler {

    async handleRegisterRequest(request,response){
        try{
            const username = request.body.username;
            const password = request.body.password;
            const email = request.body.email;
            const phoneNumber = request.body.phone;

            // Registers a new user
            const service = new RegisterService();
            const serviceResponse = await service.register(username,password,email,phoneNumber);

            const ResponsePackage = {token:serviceResponse};
            response.status(200).send(ResponsePackage);

        }catch (e) {
            const handler = new ErrorHandler();
            handler.handleError(e,response)
        }
    }
}
