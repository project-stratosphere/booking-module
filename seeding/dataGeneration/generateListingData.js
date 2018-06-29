const faker = require('faker');
const path = require('path');
const fs = require('fs');

const numNewRecords = 10000000;
const batchSize = 100000;
const dataFilePath = path.join(__dirname, 'listingDataWithIds.csv');

const headers = [
  'id',
  'address',
  'price_per_night',
  'star_rating',
  'min_stay',
  'cleaning_fee',
  'max_guests',
  'state',
  'country',
];

fs.writeFileSync(dataFilePath, `${headers.join(',')}\n`, 'utf-8');

for (let i = 0; i < numNewRecords; i += batchSize) {
  const newRecords = [];
  for (let k = i; k < i + batchSize; k++) {
    const id = k + 1232;
    const address = faker.address.streetAddress();
    const price_per_night = faker.random.number({ min: 17, max: 3000 });
    const star_rating = faker.random.number({ min: 1, max: 5 });
    const min_stay = faker.random.number({ min: 1, max: 7 });
    const cleaning_fee = faker.random.number(250);
    const max_guests = faker.random.number({ min: 1, max: 14 });
    const state = faker.address.state();
    const country = 'United States of America';

    newRecords.push([
      id,
      address,
      price_per_night,
      star_rating,
      min_stay,
      cleaning_fee,
      max_guests,
      state,
      country,
    ].join(','));
  }
  const fileExists = fs.existsSync(dataFilePath);
  if (fileExists) {
    fs.appendFileSync(dataFilePath, `${newRecords.join('\n')}\n`, 'utf-8');
  }
}
