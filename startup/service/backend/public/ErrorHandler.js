

export default class ErrorHandler {

    handleError(e,response) {
        switch(e.errno){
            case 400:
                response.status(400).send("ERROR: User already exists")
                break;
            case 401:
                response.status(401).send("ERROR: Unauthorized")
                break;
            case 403:
                response.status(403).send("ERROR: Forbidden")
                break;
            case 404:
                response.status(404).send("ERROR: Not Found")
                break;
            case 500:
                response.status(500).send("ERROR: Internal Server Error")
                break;

        }
    }
}