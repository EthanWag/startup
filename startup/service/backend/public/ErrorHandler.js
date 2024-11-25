

export default class ErrorHandler {

    handleError(e,response) {
        let error
        switch(e.errno){
            case 400:
                response.status(400).send("ERROR: User already exists")
                break;
            case 500:

        }
    }


}