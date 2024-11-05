const asyncHandler = require('express-asyn-handler')
const Lab = require('../model/labModel')
const User  = require('../model/userModel')


// @desc Get Lab
//@route GET /api/lab
//@access to all users


const getLab = asyncHandler( async(req, res)=>{
    const labs = await Lab.find();
    res.status(200).json(labs);
})

//@desc Create Lab
//@route POST /api/hall
//@access Admin


const createLab = asyncHandler( async(req,res)=>{
     const { labname, noofsystem, labincharge , availability , email ,labid } = req.body

     if(!labname || !noofsystem || !labincharge || !availability || !email || !labid){
        res.status(400)
        throw new Error('Input all values')
     }

     const labExists = await Lab.findOne({labname})

     if(labExists){
        res.status(400)
        throw new Error('Lab already exists')
     }

     const newLab = await Lab.create({

        labname, 
        noofsystem,
        labincharge,
        availabity,
        email,
        labid
     })

     res.status(200).josn(newLab)

})



//desc update Lab
//@route PUT /api/lab/:id
//@access Admin

const updateLab = asyncHandler( async(req,res)=>{

    const lab = await Lab.findById(req.params.id)

    if(!hall){
        res.status(400)
        throw new Error('Lab not Found')
    }


    const updateLab = await Lab.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json(updateLab)
})


//@desc DeleteLab
//@route DELETE /api/lsb/:id
//@access Admin

const deleteLab = asyncHandler( async (req,res)=>{
    const lab = await lab.findById(req.params.id)


    if(!lab){
        res.status(400)
        throw new Error('Lab not Found')
    }

    //Deleting
    await lab.deleteOne()

    res.status(200)

    res.json({
        id:req.params.id
    })
})


module.exports = {
    getLab,
    createLab,
    updateLab,
    deleteLab
}