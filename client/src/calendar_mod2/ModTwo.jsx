import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.png';
import Dropdown from './Dropdown';

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
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
  width: 240px;
  height: 17px;
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
      checkInClicked: false,
      checkOutClicked: false,
    };
  }

  dateClick = ( holderName ) => {
    const otherHolder = ( holderName === 'checkInClicked' ) ? 'checkOutClicked' : 'checkInClicked';
    if ( this.state[ otherHolder ] ) {
      this.setState( {
        [ otherHolder ]: !this.state[ otherHolder ],
      } );
    }
    this.setState( {
      [ holderName ]: !this.state[ holderName ],
    } );
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
          checkInClicked={this.state.checkInClicked}
          checkOutClicked={this.state.checkOutClicked}
        />
      </Holder>
    );
  }
}
