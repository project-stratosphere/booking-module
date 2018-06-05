import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ReactStars from 'react-stars';
import Rating, { Holder, NumReviews } from '../../../client/src/pricing_mod1/Rating';

configure( { adapter: new Adapter() } );

const props = {
  rating: 0,
  numReviews: Math.floor( Math.random() * 2000 ),
  ratingNull: undefined,
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
describe( 'Rating Component', () => {
  it( 'renders number of reviews correctly', () => {
    const tree = renderer
      .create( <NumReviews> {props.numReviews}</NumReviews> )
      .toJSON();
    const expected = [ ' ', `${ props.numReviews }` ];
    expect( tree.children )
      .toEqual( expect.arrayContaining( expected ) );
  } );
  it( 'does not render if rating is undefined', () => {
    const tree = renderer
      .create( <Rating rating={props.ratingNull} /> )
      .toJSON();
    expect( tree ).toMatchSnapshot();
  } );
} );
