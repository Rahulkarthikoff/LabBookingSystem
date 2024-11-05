const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//@desc Login user
//@route post /api/users/login
//@access Public

const LoginUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body

    const user = await User.findOne({email})

    if(user && (await password == user.password)){
        res.status(200)
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid login credentials')
    }

})


//@desc Getme
//routes /api/users/me
//@access Private


const Getme = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(404);
        throw new Error ('UserNot Found')
    }

    const { _id, name , email } = user

    res.status(200)
    res.json({
        id:_id,
        name,
        email

    })
})

const generateToken = (id) =>{
    return jwt.sig({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
})
}

module.exports = { LoginUser , Getme}