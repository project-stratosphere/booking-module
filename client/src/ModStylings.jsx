import styled from 'styled-components';
import logo from './images/arrowLogo.png';
import arrow from './images/arrow.png';

export const Holder = styled.div`
display: flex;
flex-direction: column;
width: inherit;
padding-top: 10px;
`;

export const InputHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid rgb(172, 172, 172);
  padding: 5px;
  padding-left: 15px;
  padding-right: 10px;
  &:hover{
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 3px;
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
  flex-direction: column;
  width: 286px;
  border: 1px solid rgb(172, 172, 172);
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
  color: #007D8C;
  outline: none;
  &:hover{
    text-decoration: underline;
  }
  &:active{
    color: #FD5C63;
  }
`;
