import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';
import ModOne from './pricing_mod1/ModOne';
import ModTwo from './calendar_mod2/ModTwo';
import ModThree from './guests_mod3/ModThree';
import { setStartOrEndDate, clearDates, calendarChange } from './calendar_mod2/CalendarLogic';

injectGlobal([`
  html, body{
    height: 100%;
    width: 100%
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`]);

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 328px;  
  height: 300px;
  border: 1px solid rgb(172, 172, 172);
  font-family: Quicksand;
  padding: 24px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      totalGuests: 1,
      listingData: null,
      startDate: null,
      endDate: null,
      mod2Clicked: 'closed',
      mod3Clicked: false,
    };
    this.setStartOrEndDate = setStartOrEndDate.bind(this);
    this.clearDates = clearDates.bind(this);
    this.calendarChange = calendarChange.bind(this);
  }

  componentDidMount() {
    this.getListingData();
  }

  onGuestButtonClick = (guest, increment) => {
    const val = this.state[guest] + increment;
    const { totalGuests } = this.state;
    const total = totalGuests + increment;
    const { maxGuests } = this.state.listingData;
    // infants don't count towards the number of guests, but have a cap of 5
    if (guest === 'infants' && (val > 5 || val < 0)) {
      return;
    // there is a minimum of 1 adult guest
    } else if (guest === 'adults' && (val > maxGuests || val < 1 || total > maxGuests)) {
      return;
    } else if (guest === 'children' && (val > maxGuests || val < 0 || total > maxGuests)) {
      return;
    }
    this.setState({
      [guest]: val,
      totalGuests: guest === 'infants' ? totalGuests : total,
    });
  }

  onMod3InputHolderClick = () => {
    this.setState({
      mod3Clicked: !this.state.mod3Clicked,
    });
  }

  getListingData = () => {
    let id = window.location.pathname;
    if (id === '/') {
      id = 1;
    } else {
      id = id.replace(/\//g, '');
    }
    axios.get(`http://127.0.0.1:3002/rooms/${id}/bookingInfo/`)
      .then((response) => {
        this.setState({
          listingData: response.data,
        });
      })
      .catch(() => {
        console.log('there was an error!');
      });
  }

  render() {
    if (this.state.listingData) {
      return (
        <Holder>
          <ModOne
            price={this.state.listingData.pricePerNight}
            rating={this.state.listingData.starRating}
            numReviews={this.state.listingData.custRevNum}
          />
          <ModTwo
            dates={this.state.listingData.datesTaken}
            minStay={this.state.listingData.minStay}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            setDate={this.setStartOrEndDate}
            calendarChange={this.calendarChange}
            clicked={this.state.mod2Clicked}
            clearDates={this.clearDates}
          />
          <ModThree
            adult={this.state.adults}
            child={this.state.children}
            infant={this.state.infants}
            totalGuests={this.state.totalGuests}
            btnClick={this.onGuestButtonClick}
            maxGuests={this.state.listingData.maxGuests}
            clicked={this.state.mod3Clicked}
            close={this.onMod3InputHolderClick}
          />
          {/* <ModFour /> */}
        </Holder>
      );
    }
    return null;
  }
}

render(<App />, document.getElementById('root'));

// cleaningFee={this.state.listingData.cleaningFee}
// maxGuests={this.state.listingData.maxGuests}
// serviceFee={this.state.listingData.serviceFee}
