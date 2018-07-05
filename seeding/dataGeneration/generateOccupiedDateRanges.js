console.time('createdOccupiedDatesAsIndependentRecords');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

const { genRandBookings } = require('./dataGenHelpers.js');

const numberOfListings = 10000000;
const batchSize = 10000;
const startDate = '2018-07-06';
// const daysInRange = 100;
const offset = 1232; // postgres autoincremented the listings records id starting from 1232
const dataFilePath = path.join(__dirname, '../../data/occupiedDateRanges.csv');

const headers = [
  'listing_id',
  'start_date',
  'end_date',
];

// WRITE TO FILE --------------------------------------------------------------
fs.writeFileSync(dataFilePath, `${headers.join(',')}`, 'utf-8');
for (let i = 0; i < numberOfListings; i += batchSize) {
  const newRecords = [];
  for (let k = i; k < i + batchSize; k++) {
    // const percentOccupied = faker.random.number({ min: 5, max: 90 }) / 100;
    const numBookings = faker.random.number({ min: 1, max: 11 });
    // const occupiedDates = genRandDatesInRange(percentOccupied, startDate, daysInRange);
    const bookings = genRandBookings(numBookings, startDate);
    bookings.forEach((booking) => {
      newRecords.push([k + offset, booking[0], booking[1]].join(','));
    });
  }

  const fileExists = fs.existsSync(dataFilePath);
  if (fileExists) {
    fs.appendFileSync(dataFilePath, `\n${newRecords.join('\n')}`, 'utf-8');
  }
}
// ----------------------------------------------------------------------------
console.timeEnd('createdOccupiedDatesAsIndependentRecords');
