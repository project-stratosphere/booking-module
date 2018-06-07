import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const days = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];
export default function Calendar( props ) {
  const week = days.map( day => (
    <th key={day}> {day} </th>
  ) );
  return (
    <table>
      <thead>
        <tr>
          {week}
        </tr>
      </thead>
      <tbody />
    </table>
  );
}
