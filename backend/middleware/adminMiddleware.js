const adminProtect = (req, res, next) =>{
    if(req.user.role === 'admin'){
        next();
    }else{
        res.status(401)
        throw new Error('only admin can access')
    }
};

module.exports = {adminProtect};