const errorMiddleware = (err, req, res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message : err.message;
        stack:ProcessingInstruction.env.NODE_ENV ==='development' ? null : err.stack
    })
    next()
}

modeul.exports = {errorMiddleware}