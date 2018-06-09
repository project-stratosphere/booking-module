import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { Holder, InputHolder, Title, Logo } from '../ModStylings';

export default class ModThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  onGuestHolderClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    let infantStatement;
    if (this.props.infant > 1) {
      infantStatement = `, ${this.props.infant} infants`;
    } else if (this.props.infant === 1) {
      infantStatement = ', 1 infant';
    }
    if (this.props.adult) {
      return (
        <Holder>
          <Title> Guests </Title>
          <InputHolder onClick={this.onGuestHolderClick}>
            <div>
              {this.props.totalGuests} {this.props.totalGuests > 1 ? 'guests' : 'guest'}
              {infantStatement}
            </div>
            <Logo
              clicked={this.state.clicked}
            />
          </InputHolder>
          <Dropdown
            clicked={this.state.clicked}
            close={this.onGuestHolderClick}
            {...this.props}
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
