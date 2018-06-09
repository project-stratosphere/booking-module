import moment from 'moment';

export function onCalendarDateClick(type, day) {
  this.setState({
    [type]: day,
  });
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

export function createDaysArr() {
  const firstDayOfTheMonth = moment().year(this.props.year).month(this.props.month).date(1)
    .day();
  const daysInMonth = moment(`${this.props.year}-${this.props.month}`, 'YYYY-MMM').daysInMonth();

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

export function findOccupiedDatesInMonth(startDay) {
  const targetDates = [];
  this.props.dates.forEach((date) => {
    const day = moment.utc(date).format('DD');
    const month = moment.utc(date).format('MMMM');
    const year = moment.utc(date).format('YYYY');
    if (month === this.props.month && Number(year) === this.props.year) {
      targetDates.push(Number(day));
    }
  });
  if (startDay) {
    // for getting the days before the start date
    for (let i = 1; i < startDay; i += 1) {
      targetDates.push(i);
    }
    // for getting the days for the minimum stay
    let toBlockOut = startDay + this.props.minStay;
    for (let i = startDay + 1; i < toBlockOut; i += 1) {
      targetDates.push(i);
    }
    // for blocking off the days after an occupied date
    const daysInMonth = moment(`${this.props.year}-${this.props.month}`, 'YYYY-MMM').daysInMonth();
    toBlockOut = targetDates.sort((a, b) => a - b).findIndex(num => num > startDay + this.props.minStay);
    for (let i = targetDates[toBlockOut]; i <= daysInMonth; i += 1) {
      targetDates.push(i);
    }
  }
  this.setState({
    occupiedDates: targetDates,
  });
}
