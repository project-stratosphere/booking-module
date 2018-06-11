import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PricePerNight, { Holder } from '../../../client/src/pricing_mod1/PricePerNight';

configure({ adapter: new Adapter() });

const props = {
  price: Math.floor(Math.random() * 1000),
  priceNull: undefined,
};

describe('Rating component holder', () => {
  it('is not the main flex component', () => {
    const tree = renderer
      .create(<Holder mod1> things inside </Holder>)
      .toJSON();
    expect(tree).not.toHaveStyleRule('display', 'flex');
  });
  it('contains price per night', () => {
    const tree = renderer
      .create(<Holder> things inside </Holder>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Price Per Nights Component', () => {
  it('renders price correctly', () => {
    const tree = shallow(<PricePerNight price={props.price} />);
    expect(tree.find('span').length)
      .toEqual(2);
  });
  it('does not render if props.price is undefined', () => {
    const tree = renderer
      .create(<PricePerNight price={props.priceNull} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
