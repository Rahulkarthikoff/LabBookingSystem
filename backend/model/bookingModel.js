const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema(
    {
        userId : {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'Please provide a user ID'],
            ref: 'User' 
        },
        labId: {
            type: mongoose.Schema.Types.ObjectId || String,
            required: [true, 'Please provide a hall ID'],
            ref: 'Hall'     
        },
        eventName: {
            type: String,
            required: [true, 'Please provide the event name']
        },
        eventDate: {
            type: Date,
            required: [true, 'Please select a event date']
        },
        eventDescription : {
            type : String,
            required: [true, 'Please provide Description']
        },
        proofOfEvent:{
            data: Buffer,
            contentType: String
        }
        faculty: [
            facultyName:{
                type: String
            },
            facultyEmail:{
                type:String
            },
            facultyRole:{
                type:String
            }
        ],
        status: {
            type: String,
            enum: ['pending','approved','rejected','finished'],
            default: 'pending',
        },
    },
    {
        timestamps: true
    }

)



module.exports = mongoose.model('Booking', bookingSchema);