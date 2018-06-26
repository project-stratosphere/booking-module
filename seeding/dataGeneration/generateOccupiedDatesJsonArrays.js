const faker = require('faker');
const path = require('path');
const fs = require('fs');

const { genRandDatesInRange } = require('./dataGenHelpers.js');

const numNewRecords = 10000000;
const batchSize = 10000;
const startDate = '2018-07-06';
const daysInRange = 100;
const dataFilePath = path.join(__dirname, 'occupiedDatesJsonArrays.csv');

// WRITE TO FILE --------------------------------------------------------------
fs.writeFileSync(dataFilePath, '[\n', 'utf-8');
for (let i = 0; i < numNewRecords; i += batchSize) {
  let newRecords = '';
  for (let k = i; k < i + batchSize; k++) {
    const percentOccupied = faker.random.number({ min: 5, max: 90 }) / 100;

    const listingId = k + 1232;
    const occupiedDates = genRandDatesInRange(percentOccupied, startDate, daysInRange);

    newRecords += JSON.stringify({
      listing_id: listingId,
      occupied_dates: occupiedDates,
    });
    if (k < numNewRecords - 1) {
      newRecords += ',\n';
    } else {
      newRecords += '\n';
    }
  }
  const fileExists = fs.existsSync(dataFilePath);
  if (fileExists) {
    fs.appendFileSync(dataFilePath, newRecords, 'utf-8');
  }
}
fs.appendFileSync(dataFilePath, ']', 'utf-8');
// ----------------------------------------------------------------------------
