import { v4 as uuid } from 'uuid';
import DataAccessAuthorization from "../DAO/DataAccessAuthorization.js";
import DataAccessUser from "../DAO/DataAccessUser.js";
import bcrypt from 'bcryptjs';


export default class LoginService {
    async login(username,password) {
        // some sort of conditional here so that if the username and password are correct, then the user will be able to login

        try{

            let dataAccess = new DataAccessUser();
            const user = await dataAccess.getUser(username);

            const isCorrect = await bcrypt.compare(password, user.password);
            if(!isCorrect) {
                let error = new Error()
                error.errno = 401
                throw error
            }

            // check to see if the authentication is even correct
            dataAccess = new DataAccessAuthorization();
            const authToken = uuid()
            await dataAccess.createAuthorization(username, authToken);

            return authToken;

        }catch(e){
            console.error(e);
        }
    }
}


