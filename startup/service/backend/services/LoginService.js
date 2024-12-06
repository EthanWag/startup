import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';
import DataAccessAuthorization from "../DAO/DataAccessAuthorization.js";
import DataAccessUser from "../DAO/DataAccessUser.js";

export default class LoginService {
    async login(username,password) {
        // some sort of conditional here so that if the username and password are correct, then the user will be able to login
        try{

            let dataAccessUser = new DataAccessUser();
            const user = await dataAccessUser.getUser(username);

            const isCorrect = await bcrypt.compare(password, user.password);
            if(!isCorrect) {
                let error = new Error('ERROR: Incorrect username or password')
                error.errno = 401
                throw error
            }

            // check to see if the authentication is even correct
            let dataAccessAuth = new DataAccessAuthorization();
            const authToken = uuid()
            await dataAccessAuth.createAuthorization(username,authToken)
            return authToken;

        }catch(e){
            throw e;
        }
    }
}


