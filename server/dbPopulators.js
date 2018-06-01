const faker = require('faker');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//INSERT INTO user (name) VALUES ('');
const populateUsers = () => {
  const arr = [];
  for (let i = 0; i <= 100; i++) {
    var randomName = faker.name.findName() + '");';
    var string = 'INSERT INTO user (name) VALUES ("';
    arr.push(string + randomName);
  }
  const result = arr.join('\n');
  // console.log(result);
};
populateUsers();

//INSERT INTO userListing (name,user_id,price_per_night,star_rating,cust_rev_num,min_stay,cleaning_fee,service_fee, max_guests) VALUES ('','','','','','','','','');
const populateUserListingTable = () => {
  const arr = [];
  for (let i = 0; i <= 100; i++) {
    var randomAddress = faker.address.streetAddress() + "',";
    const user_id = getRandomIntInclusive(1, 100) + ',';
    const price_per_night = getRandomIntInclusive(30, 600) + ',';
    const star_rating = getRandomIntInclusive(1, 5) + ',';
    const cust_rev_num = getRandomIntInclusive(20, 2000) + ',';
    const min_stay = getRandomIntInclusive(1, 4) + ',';
    const cleaning_fee = getRandomIntInclusive(20, 80) + ',';
    const service_fee = getRandomIntInclusive(20, 50) + ',';
    const max_guests = getRandomIntInclusive(1, 8) + ');';
    var string = "INSERT INTO userListing (name,user_id,price_per_night,star_rating,cust_rev_num,min_stay,cleaning_fee,service_fee, max_guests) VALUES ('";
    arr.push(string + randomAddress + user_id + price_per_night + star_rating + cust_rev_num + min_stay + cleaning_fee + service_fee + max_guests);
  }
  const result = arr.join('\n');
  // console.log(result);
};
populateUserListingTable();

