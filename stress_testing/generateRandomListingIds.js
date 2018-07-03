const path = require('path');
const fs = require('fs');

const numNewRecords = 100000;
const batchSize = 1000;
const dataFilePath = path.join(__dirname, 'randomIds.csv');

const generateRandomListingId = () => Math.floor((Math.random() * 10001231) + 1232);

fs.writeFileSync(dataFilePath, generateRandomListingId(), 'utf-8');

for (let i = 0; i < numNewRecords; i += batchSize) {
  const newRecords = [];
  for (let k = i; k < i + batchSize; k++) {
    const id = generateRandomListingId();
    newRecords.push(id);
  }
  const fileExists = fs.existsSync(dataFilePath);
  if (fileExists) {
    fs.appendFileSync(dataFilePath, `\n${newRecords.join('\n')}`, 'utf-8');
  }
}
