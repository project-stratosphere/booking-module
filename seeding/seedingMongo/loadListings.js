const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stratosphere');

const listingsSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  address: String,
  price_per_night: Number,
  star_rating: Number,
  min_stay: Number,
  cleaning_fee: Number,
  max_guests: Number,
  state: String,
  country: String,
});

const Listing = mongoose.model('Listing', listingsSchema);

const loadListings = function (listings) {
  Listing.insertMany(listings, { ordered: false });
};

// const getListings = function(listings){
//   return Listing.find()
// }

module.exports = {
  loadListings,
  // getListings
};
