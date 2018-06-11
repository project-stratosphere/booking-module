import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ModOne from '../../../client/src/pricing_mod1/ModOne';
import PricePerNight from '../../../client/src/pricing_mod1/PricePerNight';
import Rating from '../../../client/src/pricing_mod1/Rating';
import { HolderMod1 } from '../../../client/src/ModStylings';

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
      .create(<HolderMod1> things inside </HolderMod1>)
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
    expect(wrapper.find('HolderMod1'));
    expect(wrapper.find('HolderMod1').find(PricePerNight));
    expect(wrapper.find('HolderMod1').find(Rating));
  });
  it('does not render if price is undefined', () => {
    const tree = renderer
      .create(<ModOne price={props.priceNull} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
