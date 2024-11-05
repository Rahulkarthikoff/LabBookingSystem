const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true ,"Please add a name"]
    },
    email :{

        type:String,
        required:[true, 'Please add a email']
    },
    password:{
        type:String,
        required :[true , "Please enter a password"]
    },
    loginas:{
        type:String,
        enum : ['Faculty Incharge','Assossiation Member','Coding Club Member',
            'Placement Coordinator','IEF Member'
        ]
    },

},
{
    timestamps:true
})


module.exports = mongoose.model('User', userSchema)