const errorHandler = (err, req, res, next)=>{
    if(!err.errorObj){
        res.status(err.statusCode || 500).send({
            success: false,
            error: err.message || 'Server Error'
        });

        console.error(err)
    }
    else if(err.errorObj.type === 'validationError'){
        const {errorObj: { errors, statusCode}} = err;
        return res.status(statusCode).send({error: `${errors[0].msg}`})
    }
    else if(err.errorObj.type === 'onlyMessage'){
        const {errorObj: {message, statusCode}} = err;
        return res.status(statusCode).send({error: message})
    }
}


module.exports = errorHandler;