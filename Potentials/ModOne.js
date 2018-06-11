import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ModOne, { Holder } from '../../../client/src/pricing_mod1/ModOne';
import PricePerNight from '../../../client/src/pricing_mod1/PricePerNight';
import Rating from '../../../client/src/pricing_mod1/Rating';

configure({ adapter: new Adapter() });

const props = {
  price: Math.floor(Math.random() * 500),
  priceNull: undefined,
  rating: 4,
  numReviews: 100,

};

describe('Holder Component', () => {
  it('is the main flex component', () => {
    const tree = renderer
      .create(<Holder> things inside </Holder>)
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toMatchSnapshot();
  });
});
describe('Mod One Component', () => {
  it('renders price per night and ratings correctly', () => {
    const wrapper = shallow(<ModOne
      price={props.price}
      rating={props.rating}
      numReviews={props.numReviews}
    />);
    expect(wrapper.find('Holder')).toHaveLength(1);
    expect(wrapper.find('Holder').dive().find(PricePerNight)).toHaveLength(1);
    expect(wrapper.find('Holder').dive().find(Rating)).toHaveLength(1);
  });
  it('does not render if price is undefined', () => {
    const tree = renderer
      .create(<ModOne price={props.priceNull} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
