import {DataAccessUser} from "../DAO/DataAccessUser.js";
import LoginService from "./LoginService.js";


export default class RegisterService {

    async register(username,password,email,phone) {

        try{


            // tries to encrypt the password
            let dataAccess = new DataAccessUser();
            await dataAccess.createUser(username, password, email, phone);

            // now we need to generate the authorization token
            // I just call their service to do this, is that alright
            return await new LoginService().login(username, password);

        }catch(e){
            console.error(e);
        }

    }
}


