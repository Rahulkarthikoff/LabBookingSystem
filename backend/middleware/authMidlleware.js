const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(asyn (req, res, next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        }

        catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Unauthorized access')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Unauthorized access')
    }
})


module.exports = { protect }
