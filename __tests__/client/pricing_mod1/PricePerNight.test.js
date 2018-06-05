import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import PricePerNight, { Price } from '../../../client/src/pricing_mod1/PricePerNight';

configure( { adapter: new Adapter() } );

const props = {
  price: Math.floor( Math.random() * 1000 ),
  priceNull: undefined,
};

describe( 'Price Per Nights Component', () => {
  it( 'renders price correctly', () => {
    const tree = renderer
      .create( <Price> {props.price}</Price> )
      .toJSON();
    const expected = [ ' ', `${ props.price }` ];
    expect( tree.children )
      .toEqual( expect.arrayContaining( expected ) );
  } );
  it( 'does not render if props.price is undefined', () => {
    const tree = renderer
      .create( <PricePerNight price={props.priceNull} /> )
      .toJSON();
    expect( tree ).toMatchSnapshot();
  } );
} );
