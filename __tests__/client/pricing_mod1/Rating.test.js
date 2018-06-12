import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Rating from '../../../client/src/pricing_mod1/Rating';
import { Holder } from '../../../client/src/ModStylings';

configure({ adapter: new Adapter() });

const props = {
  rating: 0,
  numReviews: 300,
  ratingNull: undefined,
};

describe('Rating component holder', () => {
  it('is the main flex component', () => {
    const tree = renderer
      .create(<Holder mod1> things inside </Holder>)
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
  });
  it('contains both price per night and number of reviews', () => {
    const tree = renderer
      .create(<Holder> things inside </Holder>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Rating component reviews', () => {
  it('renders number of reviews correctly', () => {
    const tree = shallow(<Holder mod1><div className="number"> {props.numReviews}</div></Holder>);
    expect(tree.find('.number').text()).toEqual(` ${props.numReviews}`);
  });
  it('does not render if rating is undefined', () => {
    const tree = renderer
      .create(<Rating rating={props.ratingNull} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
