import RegisterService from "../services/RegisterService.js";
import ErrorResponse from '../public/ErrorHandler.js';

export default class RegisterHandler {

    async handleRegisterRequest(request,response){

        const username = request.body.username;
        const password = request.body.password;
        const email = request.body.email;
        const phoneNumber = request.body.phone;

        try{

            // Registers a new user
            const service = new RegisterService();
            const serviceResponse = await service.register(username,password,email,phoneNumber);
            response.status(200).send(serviceResponse);

        }catch (e) {

        }
    }
}
