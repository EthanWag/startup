import { v4 as uuid } from 'uuid';
import {DataAccessAuthorization} from "../DAO/DataAccessAuthorization.js";


export default class LoginService {
    async login(username,password) {
        // some sort of conditional here so that if the username and password are correct, then the user will be able to login

        try{

            // check to see if the authentication is even correct

            const dataAccess = new DataAccessAuthorization();
            const authToken = uuid()
            await dataAccess.createAuthorization(username, authToken);

            return authToken;

        }catch(e){
            console.error(e);
        }




    }
}


