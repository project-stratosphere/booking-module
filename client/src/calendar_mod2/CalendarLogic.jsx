import moment from 'moment';

export function onCalendarDateClick(type, day) {
  this.setState({
    [type]: day,
  });
}

export function onArrowClick(date, increment) {
  const next = date.add(increment, 'month');
  const month = next.format('MMMM-YYYY').split('-')[0];
  const year = Number(next.format('MMMM-YYYY').split('-')[1]);
  this.setState({
    currDate: next,
    month,
    year,
  });
}

export function dateConverter(date, day) {
  if (day !== null) {
    const currDate = date.format('MM-YYYY').split('-');
    const currMonth = currDate[0];
    const currYear = Number(currDate[1]);
    return `${currMonth}/${day}/${currYear}`;
  }
  return null;
}

export function calendarChange(holderName) {
  if (holderName === 'checkInClicked' && this.state.clicked !== 1) {
    this.setState({
      clicked: 1,
    });
  } else if (holderName === 'checkOutClicked' && this.state.clicked !== -1) {
    this.setState({
      clicked: -1,
    });
  } else {
    this.setState({
      clicked: 0,
    });
  }
}

export function createDaysArr({ month, year }) {
  const firstDayOfTheMonth = moment(`${year}-${month}`, 'YYYY-MMM').date(1).day();
  const daysInMonth = moment(`${year}-${month}`, 'YYYY-MMM').daysInMonth();

  const daysInMonthArr = [];
  for (let i = 0; i < firstDayOfTheMonth; i += 1) {
    daysInMonthArr.push('');
  }
  for (let i = 1; i <= daysInMonth; i += 1) {
    daysInMonthArr.push(i);
  }
  return daysInMonthArr;
}

export function findOccupiedDatesInMonth({
  startDate, month, year, minStay, dates,
}) {
  const targetDates = [];
  dates.forEach((date) => {
    const dateDay = Number(moment.utc(date).format('DD'));
    const dateMonth = moment.utc(date).format('MMMM');
    const dateYear = Number(moment.utc(date).format('YYYY'));
    if (dateMonth === month && dateYear === year) {
      targetDates.push(dateDay);
    }
  });
  if (startDate) {
    // for getting the days before the start date
    for (let i = 1; i < startDate; i += 1) {
      targetDates.push(i);
    }
    // for getting the days for the minimum stay
    let toBlockOut = startDate + minStay;
    for (let i = startDate + 1; i < toBlockOut; i += 1) {
      targetDates.push(i);
    }
    // for blocking off the days after an occupied date
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MMM').daysInMonth();
    toBlockOut = targetDates
      .sort((a, b) => a - b)
      .findIndex(num => num > startDate + minStay);
    for (let i = targetDates[toBlockOut]; i <= daysInMonth; i += 1) {
      targetDates.push(i);
    }
  }
  return targetDates;
}
