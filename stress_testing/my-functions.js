function generateRandomListingId(userContext, events, done) {
  userContext.vars.listingId = Math.floor((Math.random() * 10001231) + 1232);
  return done();
}

module.exports = {
  generateRandomListingId,
};
