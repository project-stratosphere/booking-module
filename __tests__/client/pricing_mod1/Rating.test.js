import React from 'react';
import styled from 'styled-components';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure( { adapter: new Adapter() } );

const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: inherit;
`;

const NumReviews = styled.div`
  margin-left: 7px;
`;

test( 'it renders the correct', () => {
  const tree = shallow( <Holder /> );
} );
