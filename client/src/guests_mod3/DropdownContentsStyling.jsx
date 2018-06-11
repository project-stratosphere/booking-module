import styled from 'styled-components';
import { abnbGrey, abnbDarkBlue } from '../ModStylings';

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`;

export const Guest = styled.div`
  text-transform: capitalize;
  margin-top: ${props => (props.guest === 'adults' ? '10px' : '0px')};
  font-weight: bold;
`;

export const GuestDetails = styled.div`
  font-size: 12px;
  min-height: 12px;
`;

export const FeatureHolder = styled.div`
  display: flex;
  flex-direction: ${props => ((props.button) ? 'row' : 'column')};
  margin-top: ${props => (props.guest === 'adults' ? '4px' : '0px')}
`;

export const Number = styled.div`
  min-width: 9px;
  font-size: 17px;
  margin-top: 2px;
`;

export const Button = styled.button`
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 1px;
  outline: none;
    &:active{
      background-color: ${abnbDarkBlue};
    }
    &:hover:enabled{
      cursor: pointer;
    }
`;

export const ButtonDown = Button.extend`
  border: ${(props) => {
    if (props.number > 0 && (props.guest === 'infants' || props.guest === 'children')) {
      return `1px solid ${abnbDarkBlue}`;
    } else if (props.guest === 'adults' && props.number > 1) {
      return `1px solid ${abnbDarkBlue}`;
    }
    return `1px solid ${abnbGrey}`;
  }};
`;

export const ButtonUp = Button.extend`
  border: ${(props) => {
    if (props.total < props.max && (props.guest === 'adults' || props.guest === 'children')) {
      return `1px solid ${abnbDarkBlue}`;
    } else if (props.guest === 'infants' && props.number < 5) {
      return `1px solid ${abnbDarkBlue}`;
    }
    return `1px solid ${abnbGrey}`;
  }};
`;
