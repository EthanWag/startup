import DataAccessUser from "../DAO/DataAccessUser.js";
import LoginService from "./LoginService.js";
import bcrypt from 'bcryptjs';


export default class RegisterService {

    async register(username,password,email,phone) {

        try{

            let hashPassword = await bcrypt.hash(password, 10);

            // tries to encrypt the password
            const dataAccess = new DataAccessUser();
            await dataAccess.createUser(username, hashPassword, email, phone);

            // now we need to generate the authorization token
            // I just call their service to do this, is that alright
            return await new LoginService().login(username, password);

        }catch(e){
            throw e;
        }
    }
}


