import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import WeekNames from './WeekNames';
import arrow from '../images/arrow.png';

export const Holder = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 230px;
  border: 1px solid rgb(172, 172, 172);
  margin-top: 50px;
  padding: 10px;
  padding-top: 0px;
  background-color: white;
`;
export const Details = styled.div`
  font-size: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const Arrow = styled.button`
  border-radius: 10%;
  content: url(${ arrow })
`;

export const SectionOne = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Dropdrown( props ) {
  if ( props.checkInClicked ) {
    return (
      <Holder />
    );
  } else if ( props.checkOutClicked ) {
    return (
      <Holder>
        <SectionOne>
          <Arrow left />
          <div> Month Year </div>
          <Arrow />
        </SectionOne>
        <WeekNames />
        <Calendar />
        <Details>
          <div> Minimum stay varies </div>
          <div> Updated 2 days ago </div>
        </Details>
      </Holder>
    );
  }
  return null;
}
