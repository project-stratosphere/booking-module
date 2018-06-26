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

module.exports = {
  genRandDatesInRange,
};
