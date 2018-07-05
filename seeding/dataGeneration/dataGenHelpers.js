const formatDate = function (date) {
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  const year = date.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

const addDaysToDate = function (date, days) {
  const newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
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

const genRandBookings = function
(numBookings, initialStartDate, minDuration = 1, maxDuration = 14, minGap = 1, maxGap = 15) {
  const bookings = [];
  let [startYear, startMonth, startDay] = initialStartDate.split('-');
  startYear = Number(startYear);
  startMonth = Number(startMonth - 1);
  startDay = Number(startDay);
  let startDate = new Date(startYear, startMonth, startDay);
  let endDate = new Date(startYear, startMonth, startDay);

  for (let i = 0; i < numBookings; i++) {
    const duration = Math.floor((Math.random() * maxGap) + minGap);
    const gap = Math.floor((Math.random() * maxDuration) + minDuration);

    endDate = addDaysToDate(startDate, duration);
    startDate = formatDate(startDate);
    endDate = formatDate(endDate);
    bookings.push([startDate, endDate]);
    startDate = addDaysToDate(endDate, gap);
  }
  return bookings;
};

module.exports = {
  genRandDatesInRange,
  genRandBookings,
};
