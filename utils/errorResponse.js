class ErrorResponse extends Error{
    constructor(message,errorObj){
        super(message)
        this.errorObj = errorObj;
    }
} 
module.exports = ErrorResponse;