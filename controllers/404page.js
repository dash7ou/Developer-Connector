const get404 = (req , res , next)=>{
    res.status(404).send({
        error: "Page not found"
    })
}


module.exports = get404;