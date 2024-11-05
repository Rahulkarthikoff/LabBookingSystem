const asyncHandler = require('express-async-handler')
const Hall = require('../model/labModel')
const Booking = require('../model/bookingModel')
const nodemailer = require('nodemailer');
const User = require('../model/userModel')


// @desc GET  all lab Booked
// @route /api/book   -  GET
// @access all user

const GetBookings = asyncHandler(async(req, res)=>{
    const Bookings_list = await Booking.find()
    res.status(200).json(Bookings_list)
})

// @desc GET  all approved Bookings
// @route /api/booking/approved   -  GET
// @access all users

const GetBookings_Approved = asyncHandler(async(req, res)=>{
    const Bookings_list = await Booking.find({status:'approved'})

    // Check if any pending bookings were found
    if (Bookings_list.length === 0) {
        res.status(200);
        res.json(Bookings_list)
    }

    res.status(200).json(Bookings_list)
})

// @desc GET  all my Bookings
// @route /api/booking/mybookings   -  GET
// @access all users

const GetBookings_of_User = asyncHandler(async(req, res)=>{
    const Bookings_list = await Booking.find({userId:req.user._id})

    // Check if any pending bookings were found
    if (Bookings_list.length === 0) {
        res.status(400);
        throw new Error('No bookings found');
      }

    res.status(200).json(Bookings_list)
})


// @desc book a hall
// @route /api/booking   -  POST
// @access user specific


const bookLab = asyncHandler (async (req, res) =>{
    const { labId ,eventDecription , eventCoordinator, department,  startTime , endTime } = req.body

    if(!hallId || !startTime || !endTime ||!event || !coordinator || !department){
        res.status(400)
        console.log("Missing required fields");
        throw new Error('Please input all data')
    }

    if(!hallId || !startTime || !endTime ||!event || !coordinator || !department){
        res.status(400)
        throw new Error('Please input all data')
    }

    hall = await Hall.findById(hallId)

    if(!hall){
        res.status(400)
        throw new Error('Hall does not exists')
    }

    const venue = hall.name
    
    const New_Booking = await Booking.create({
        userId:req.user.id,
        hallId:hallId,
        venue:venue,
        event:event,
        coordinator : coordinator,
        department:department,
        startTime : startTime,
        endTime: endTime,
    })

    res.status(201)
    res.json(New_Booking)
})
