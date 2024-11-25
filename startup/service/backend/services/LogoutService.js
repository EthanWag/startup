import DataAccessAuthorization from '../DAO/DataAccessAuthorization.js';


export default class LogoutService {
        async logout(authToken) {
                try {
                        const dataAccess = new DataAccessAuthorization();
                        await dataAccess.deleteAuthorization(authToken);
                }catch(e){
                        console.error(e);
                }
        }
}