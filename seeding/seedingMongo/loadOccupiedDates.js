const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost/stratosphere');

const occupiedDatesSchema = mongoose.Schema({
  listing_id: {
    type: Number,
    unique: true,
  },
  occupiedDates: Array,
});

const OccupiedDates = mongoose.model('OccupiedDates', occupiedDatesSchema);

const loadOccupiedDates = function (occupiedDates) {
  OccupiedDates.insertMany(occupiedDates, { ordered: false });
};

module.exports = {
  loadOccupiedDates,
};
