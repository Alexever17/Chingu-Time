const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Timeslot Schema
const TimeslotSchema = new Schema({
    event: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "events"
        },
    user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
        },
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

module.exports = Timeslot = mongoose.model('timeslots', TimeslotSchema);