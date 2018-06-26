console.time('createdOccupiedDatesAsIndependentRecords');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

const numberOfListings = 10000000;
const batchSize = 10000;
const startDate = '2018-07-06';
const daysInRange = 100;
const offset = 1232; // postgres autoincremented the listings records id starting from 1232
const dataFilePath = path.join(__dirname, 'singleOccupiedDates.csv');

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

const headers = [
  'listing_id',
  'date',
];

fs.writeFileSync(dataFilePath, `${headers.join(',')}`, 'utf-8');

for (let i = 0; i < numberOfListings; i += batchSize) {
  const newRecords = [];
  for (let k = i; k < i + batchSize; k++) {
    const percentOccupied = faker.random.number({ min: 5, max: 90 }) / 100;
    const occupiedDates = genRandDatesInRange(percentOccupied, startDate, daysInRange);
    occupiedDates.forEach((date) => {
      newRecords.push([k + offset, date].join(','));
    });
  }
  const fileExists = fs.existsSync(dataFilePath);
  if (fileExists) {
    fs.appendFileSync(dataFilePath, `\n${newRecords.join('\n')}`, 'utf-8');
  }
}
console.timeEnd('createdOccupiedDatesAsIndependentRecords');
