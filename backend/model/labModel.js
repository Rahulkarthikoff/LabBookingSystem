const mongoose  = require('mongoose');

const LabSchema = new mongoose.Schema({
    labname:{
        type: String,
        required: [true, 'Please add a lab name'],
        unique: true
    },
    noofsystem:{
        type: String,
        required: [true, 'Please add No.Of Systems in the lab']
    },
    labincharge{
        type: String,
        requires: [true, 'Please enter the lab incharge name']
    },
    availability{
        type:String,
        required:[true, 'Please enter availability']
    },
    email{
        type:String,
        required:[true , 'Please enter the emailId']
    },
    labid{
        type:String,
        required:[true ,'Please enter the labid']
    },
},
{
    timestamps : true
});

module.exports = mongoose.model('Lab',labSchema);