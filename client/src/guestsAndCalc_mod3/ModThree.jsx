import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from '../images/arrowLogo.png';
import Dropdown from './Dropdown';

const Holder = styled.div`
  display: flex;
  flex-direction: column;
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

const Arrow = styled.div`
  content: url(${ arrow });
  height: 17px;
  transform: rotate(${ props => ( props.clicked ? '0turn' : '0.5turn' ) });
`;

export default class ModThree extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      clicked: false,
    };
  }

  onGuestHolderClick = () => {
    this.setState( {
      clicked: !this.state.clicked,
    } );
  }

  render() {
    let infantStatement;
    if ( this.props.infant > 1 ) {
      infantStatement = `, ${ this.props.infant } infants`;
    } else if ( this.props.infant === 1 ) {
      infantStatement = ', 1 infant';
    }
    if ( this.props.adult ) {
      return (
        <Holder>
          <Title> Guests </Title>
          <GuestHolder onClick={this.onGuestHolderClick}>
            <div>
              {this.props.totalGuests} {this.props.totalGuests > 1 ? 'guests' : 'guest'}
              {infantStatement}
            </div>
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
          />
        </Holder>
      );
    }
    return null;
  }
}

ModThree.propTypes = {
  btnClick: PropTypes.func,
  adult: PropTypes.number,
  child: PropTypes.number,
  infant: PropTypes.number,
  totalGuests: PropTypes.number,
  maxGuests: PropTypes.number,

};
ModThree.defaultProps = {
  btnClick: () => null,
  adult: 0,
  child: 0,
  infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};

// cleaningFee={this.props.cleaningFee}
// minStay={this.props.minStay}
// serviceFee={this.props.serviceFee}
