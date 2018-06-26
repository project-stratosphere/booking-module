const faker = require('faker');
const path = require('path');
const fs = require('fs');

const numNewRecords = 10000000;
const batchSize = 10000;
const startDate = '2018-07-06';
const daysInRange = 100;
const dataFilePath = path.join(__dirname, 'occupiedDatesJsonArrays.csv');

const formatDate = function (date) {
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  const year = date.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

const genRandDatesInRange = function (dateProbability, startDate, daysInRange) {
  const occupiedDates = [];
  let [startYear, startMonth, startDay] = startDate.split('-');
  startYear = Number(startYear);
  startMonth = Number(startMonth - 1);
  startDay = Number(startDay);
  for (let i = 0; i < daysInRange; i++) {
    if (Math.random() <= dateProbability) {
      const occupiedDate = formatDate(new Date(startYear, startMonth, startDay + i));
      occupiedDates.push(occupiedDate);
    }
  }
  return occupiedDates;
};

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
