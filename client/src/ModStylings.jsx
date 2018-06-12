import styled from 'styled-components';
import logo from './images/arrowLogo.png';
import arrow from './images/arrow.png';

export const abnbLightGrey = '#F0F0F0';
export const abnbGrey = 'rgb(172, 172, 172)';
export const abnbRed = '#F16664';
export const abnbLightBlue = '#79CCCD';
export const abnbBlue = '#33DACD';
export const abnbCalendarBlue = '#00a699';
export const abnbDarkBlue = '#007D8C';

export const HolderMod1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  width: inherit;
  border-bottom: 1px solid ${abnbGrey};
  font-weight: bold;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: ${props => (props.mod1 ? 'row' : 'column')};
  width: inherit;
  padding-top: ${props => (props.mod1 ? '' : '10px')};
  justify-content: ${props => (props.mod1 ? 'flex-start' : '')};
`;

export const HolderMod4 = styled.div`
  display: flex;
  width: inherit;
  font-size: 13px;
  font-weight: ${props => (props.total ? 'bold' : '')};
  border-bottom: ${props => ((!props.main && !props.total) ? '1px solid rgb(172,172,172)' : '')};
  padding: 3px;
  padding-top: ${props => (props.main ? '17px' : '5px')};
  flex-direction: ${props => (props.main ? 'column' : 'row')};
  justify-content: ${props => (props.main ? '' : 'space-between')};
`;

export const InputHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${abnbGrey};
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  &:hover{
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const Details = styled.div`
  font-size: 12px;
  margin-top: 12px;
`;

export const Logo = styled.div`
  content: url(${logo});
  height: 17px;
  width: 25px;
  transform: rotate(${props => (props.clicked ? '0turn' : '0.5turn')});
`;

export const Arrow = styled.div`
  content: url(${arrow});
  height: 17px;
`;

export const DropdownHolder = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  margin-top: ${props => (props.guest ? '50px' : '')};
  flex-direction: column;
  width: 286px;
  border: 1px solid ${abnbGrey};
  border-radius: 1%;
  padding: 20px;
  background-color: white;
  user-select: none;
`;

export const Close = styled.button`
  margin-top: 8px;
  border: none;
  align-self: flex-end;
  font-size: 14px;
  color: ${abnbDarkBlue};
  outline: none;
  &:hover{
    text-decoration: underline;
  }
  &:active{
    color: ${abnbRed};
  }
`;
