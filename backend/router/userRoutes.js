const express = require('express');
const router = express.Router()

router.get('/login',(req,res)=>{
    console.log('Inside UserRouter');
})

module.exports = router;