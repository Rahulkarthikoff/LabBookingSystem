const express = require('express')
const router = express.Router()

const { GetBooking , bookLab , EditBook , DeleteBooking , PendingBooking , Decision , GetBookings_of_User} = require('../controller/bookingController')

const {protect} = require('../middleware/authMidlleware')

const { checkForConflicts } = require('../middleware/conflictMiddleware')

const { adminProtect } = require('../middleware/adminMiddleware')


router.route('/').get(protect,GetBooking).post(protect , checkForConflicts ,bookLab)

router.route('/:id').put(protect , checkForConflicts, EditBooking).delete(protect ,DeleteBooking)


router.route('/approved').get(protect,GetBookings_Approved)
router.route('/mybookings').get(protect,GetBookings_of_User)


router.route('/pending').get(protect,adminProtect, PendingBookings)

router.route('/pending/:id').get(protect, adminProtect,Decision)

module.exports = router