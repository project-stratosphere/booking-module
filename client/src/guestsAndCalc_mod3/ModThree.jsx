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
  transform: rotate(${ props => ( props.clicked ? '0turn' : '0.5turn' ) });
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
      adult: PropTypes.number,
      child: PropTypes.number,
      infant: PropTypes.number,
      totalGuests: PropTypes.number,

    };
    ModThree.defaultProps = {
      cleaningFee: 0,
      maxGuests: 0,
      minStay: 0,
      serviceFee: 0,
      btnClick: () => null,
      adult: 0,
      child: 0,
      infant: 0,
      totalGuests: 0,
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
    console.log();
    if ( this.props.cleaningFee ) {
      return (
        <Holder>
          <Title> Guests </Title>
          <GuestHolder onClick={this.onGuestHolderClick}>
            <Guests>
            1 guest
            </Guests>
            <Arrow
              clicked={this.state.clicked}
            />
          </GuestHolder>
          <Dropdown
            clicked={this.state.clicked}
            btnClick={this.props.btnClick}
            adult={this.props.adult}
            child={this.props.child}
            infant={this.props.infant}
            maxGuests={this.props.maxGuests}
            totalGuests={this.props.totalGuests}
          />
        </Holder>
      );
    }
    return null;
  }
}

// cleaningFee={this.props.cleaningFee}
// minStay={this.props.minStay}
// serviceFee={this.props.serviceFee}
