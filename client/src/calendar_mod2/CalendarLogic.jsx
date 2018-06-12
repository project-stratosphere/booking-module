import moment from 'moment';
//* = uses a binding

// *export into index, used inside calendar
export function setStartOrEndDate(type, day) {
  this.setState({
    [type]: day,
  });
}

// *export into mod2, used inside dropdown
export function onArrowClick(date, increment) {
  const next = date.add(increment, 'month');
  const month = next.format('MMMM-YYYY').split('-')[0];
  const year = Number(next.format('MMMM-YYYY').split('-')[1]);
  this.setState({
    currDate: next,
    month,
    year,
  });
  this.props.clearDates();
}

// *export into index, used inside onArrowClick
export function clearDates() {
  this.setState({
    startDate: null,
    endDate: null,
  });
}

// export & used in mod2
export function dateConverter(date, day) {
  if (day !== null) {
    const currDate = date.format('MM-YYYY').split('-');
    const currMonth = currDate[0];
    const currYear = Number(currDate[1]);
    return `${currMonth}/${day}/${currYear}`;
  }
  return null;
}

// *export & used in mod2
export function calendarChange(holderName) {
  if (holderName === 'checkInClicked' && this.state.mod2Clicked !== 'checkIn') {
    this.setState({
      mod2Clicked: 'checkIn',
    });
  } else if (holderName === 'checkOutClicked' && this.state.mod2Clicked !== 'checkOut') {
    this.setState({
      mod2Clicked: 'checkOut',
    });
  } else {
    this.setState({
      mod2Clicked: 'closed',
    });
  }
}

// export & used in calendar
export const onDateClick = ({
  day, props,
}) => {
  if (props.clicked === 'checkIn') {
    if (props.endDate) {
      if (day > props.endDate || day + props.minStay > props.endDate) {
        props.clearDates();
      }
    }
    props.setDate('startDate', day);
    props.calendarChange('checkOutClicked');
  } else if (props.clicked === 'checkOut') {
    props.setDate('endDate', day);
    props.calendarChange();
  }
};

// export & used in calendar
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

// export & used in calendar
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
    // for blocking off the days after an occupied date
    const daysInMonth = moment(`${year}-${month}`, 'YYYY-MMM').daysInMonth();
    let toBlockOut = targetDates
      .sort((a, b) => a - b)
      .findIndex(num => num > startDate);
    for (let i = targetDates[toBlockOut]; i <= daysInMonth; i += 1) {
      targetDates.push(i);
    }
    // for getting the days for the minimum stay
    toBlockOut = startDate + (minStay - 1);
    for (let i = startDate + 1; i < toBlockOut; i += 1) {
      targetDates.push(i);
    }
  }
  return targetDates;
}
