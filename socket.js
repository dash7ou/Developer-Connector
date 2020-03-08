const ErrorResponse = require("./utils/errorResponse") 
let io;

exports.init = httpServer =>{
    io = require("socket.io")(httpServer);
    return io;
}

exports.getIo = _ =>{
    if(!io){
        const error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: 'Socket.io not initialized!'
        }

        throw new ErrorResponse("", error);
    }

    return io;
}