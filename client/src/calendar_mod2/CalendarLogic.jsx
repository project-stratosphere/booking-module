import moment from 'moment';

export function createDaysArr(currMonth, currYear) {
  const firstDayOfTheMonth = moment().year(currYear).month(currMonth).date(1)
    .day();
  const daysInMonth = moment(`${currYear}-${currMonth}`, 'YYYY-MMM').daysInMonth();

  const daysInMonthArr = [];
  for (let i = 0; i < firstDayOfTheMonth; i += 1) {
    daysInMonthArr.push('');
  }
  for (let i = 1; i < daysInMonth; i += 1) {
    daysInMonthArr.push(i);
  }
  this.setState({
    daysInMonthArr,
  });
}

export function findOccupiedDatesInMonth(dates, currMonth, currYear, startDay) {
  const targetDates = [];
  dates.forEach((date) => {
    const day = moment.utc(date).format('DD');
    const month = moment.utc(date).format('MMMM');
    const year = moment.utc(date).format('YYYY');
    if (month === currMonth && Number(year) === currYear) {
      targetDates.push(Number(day));
    }
  });
  if (startDay) {
    for (let i = 1; i < startDay; i += 1) {
      targetDates.push(i);
    }
  }
  this.setState({
    occupiedDates: targetDates,
  });
}
