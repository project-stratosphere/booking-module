import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Dropdown, { Holder } from '../../../client/src/guestsAndCalc_mod3/Dropdown';
import DropdownContents from '../../../client/src/guestsAndCalc_mod3/DropdownContents';

configure( { adapter: new Adapter() } );

const props = {
  clicked: false,
  btnClick: () => null,
  close: () => null,
  adult: 0,
  child: 0,
  infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};

describe( 'Holder Component', () => {
  it( 'is the main flex component', () => {
    const tree = renderer
      .create( <Holder> things inside </Holder> )
      .toJSON();
    expect( tree ).toHaveStyleRule( 'display', 'flex' );
    expect( tree ).toMatchSnapshot();
  } );
} );
describe( 'Dropdown Component', () => {
  it( 'renders the right amount of children', () => {
    const wrapper = shallow( <Dropdown {...props} /> );
    expect( wrapper.find( renderer.create( <DropdownContents /> ) ).children() ).toHaveLength( 3 );
  } );
} );
