import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import DropdownContents, { Holder } from '../../../client/src/guestsAndCalc_mod3/DropdownContents';

configure( { adapter: new Adapter() } );

const props = {
  btnClick: () => null,
  adult: 1,
  child: 0,
  infant: 0,
  totalGuests: 1,
  maxGuests: 6,
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
    const wrapper = shallow( <DropdownContents {...props}>
      {props.numReviews}
    </DropdownContents> );
    const expected = [ ' ', `${ props.numReviews }` ];
    expect( tree.children )
      .toEqual( expect.arrayContaining( expected ) );
  } );
} );
