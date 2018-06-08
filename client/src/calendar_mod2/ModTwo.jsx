import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrow from '../images/arrow.png';
import Dropdown from './Dropdown';

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  padding-top: 10px;
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const DateHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 22px;
  border: 1px solid rgb(172, 172, 172);
  padding: 5px;
`;

export const Date = styled.div`
`;

export const Arrow = styled.div`
  content: url(${ arrow });
  height: 17px;
`;

export default class ModTwo extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      clicked: 0,
      month: 'June',
      year: '2018',
    };
  }

  dateClick = ( holderName ) => {
    if ( holderName === 'checkInClicked' ) {
      this.setState( {
        clicked: 1,
      } );
    } else if ( holderName === 'checkOutClicked' ) {
      this.setState( {
        clicked: -1,
      } );
    }
  }

  render() {
    return (
      <Holder>
        <Title> Dates </Title>
        <DateHolder>
          <Date onClick={() => this.dateClick( 'checkInClicked' )}> Check In </Date>
          <Arrow />
          <Date onClick={() => this.dateClick( 'checkOutClicked' )}> Check Out </Date>
        </DateHolder>
        <Dropdown
          dates={this.props.dates}
          {...this.state}
        />
      </Holder>
    );
  }
}

ModTwo.propTypes = {
  dates: PropTypes.array,

};
ModTwo.defaultProps = {
  dates: [],
};
