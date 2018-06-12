import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ModFour from '../../../client/src/calculator_mod4/ModFour';
import { HolderMod4 } from '../../../client/src/ModStylings';

configure({ adapter: new Adapter() });

const props = {
  startDate: 1,
  endDate: 4,
  price: 51,
  cleaningFee: 20,
  serviceFee: 20,
};

describe('mod4 component holder', () => {
  it('is the main flex component', () => {
    const tree = renderer
      .create(<HolderMod4 mod1> things inside </HolderMod4>)
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
  });
});

describe('mod4 component', () => {
  it('renders the calculator', () => {
    const tree = shallow(<ModFour {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('does not render if rating is undefined', () => {
    const tree = renderer
      .create(<ModFour checkIn={null} checkOut={null} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
