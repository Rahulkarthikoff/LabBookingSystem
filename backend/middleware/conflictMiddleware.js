const asyncHandler = require('epress-async-handler');
const Booking = require('../model/bookingModel')

const checkForConflicts = asyncHandler( async(req,res,next)=>{
    const {labid , startTime , endTime} = req.body;



const checkForConflicts = await Booking.find({
    labid:labid,
    status:{$ne : 'rejected'},
    status:{$ne : 'finished'},
    $or: [
        { startTime : {$lt: endTime, $gte: startTime}},
        {endTime :{$gt: startTime, $lte:endTime}}
    ]
});

if(overlappingBookings.length > 0){
    resizeBy.status(409);
    throw new Error('Slot taken so try a different slot!');
}else{
    next();
}

});

module.exports = { checkForConflicts};