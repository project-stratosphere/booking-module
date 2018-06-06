import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../images/arrowLogo.png';
import Dropdown from './Dropdown';

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  width: 250px;
  padding-top: 10px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const GuestHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 240px;
  border: 1px solid rgb(172, 172, 172);
  padding: 5px;
`;

const Guests = styled.div`
`;

const Arrow = styled.div`
  content: url(${ arrow });
  height: 17px;
`;

export default class ModThree extends Component {
  constructor( props ) {
    super( props );
    ModThree.propTypes = {
      cleaningFee: PropTypes.number,
      maxGuests: PropTypes.number,
      minStay: PropTypes.number,
      serviceFee: PropTypes.number,
      btnClick: PropTypes.func,
      adults: PropTypes.number,
      childrens: PropTypes.number,
      infants: PropTypes.number,

    };
    ModThree.defaultProps = {
      cleaningFee: 0,
      maxGuests: 0,
      minStay: 0,
      serviceFee: 0,
      btnClick: () => null,
      adults: 0,
      childrens: 0,
      infants: 0,
    };
    this.state = {
      clicked: false,
    };
  }

  onGuestHolderClick = () => {
    const isClicked = this.state.clicked;
    this.setState( {
      clicked: !isClicked,
    } );
  }

  render() {
    if ( this.props.cleaningFee ) {
      return (
        <Holder>
          <Title> Guests </Title>
          <GuestHolder onClick={this.onGuestHolderClick}>
            <Guests>
            1 guest
            </Guests>
            <Arrow />
          </GuestHolder>
          <Dropdown
            clicked={this.state.clicked}
            onBtnClick={this.props.btnClick}
            adults={this.props.adults}
            childrens={this.props.childrens}
            infants={this.props.infants}
          />
        </Holder>
      );
    }
    return null;
  }
}

// cleaningFee={this.props.cleaningFee}
// maxGuests={this.props.maxGuests}
// minStay={this.props.minStay}
// serviceFee={this.props.serviceFee}
