// models/Lab.js
const mongoose = require('mongoose');

const LabSchema = new mongoose.Schema({
    labid: { type: String, required: true, unique: true },
    labname: { type: String, required: true },
    staffincharge: { type: String, required: true },
    capacity: { type: Number, required: true },
    floor: { type: String, required: true }
});

module.exports = mongoose.model('Lab', LabSchema, 'labdetails');