import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { DropdownHolder } from '../../../client/src/ModStylings';
import DropdownContents from '../../../client/src/guests_mod3/DropdownContents';
import Dropdown from '../../../client/src/guests_mod3/Dropdown';

configure({ adapter: new Adapter() });

const props = {
  clicked: true,
  btnClick: () => null,
  close: () => null,
  adult: 0,
  child: 0,
  infant: 0,
  totalGuests: 0,
  maxGuests: 0,
};

describe('Holder Component', () => {
  it('is the main flex component', () => {
    const tree = renderer
      .create(<DropdownHolder> things inside </DropdownHolder>)
      .toJSON();
    expect(tree).toHaveStyleRule('display', 'flex');
    expect(tree).toMatchSnapshot();
  });
});
describe('Dropdown Component', () => {
  it('renders the right amount of children', () => {
    const dropdown = mount(<Dropdown {...props} />);
    expect(dropdown.find(DropdownContents)).toHaveLength(1);
    expect(dropdown).toMatchSnapshot();
  });
  it('does not render if clicked is false', () => {
    const dropdown = mount(<Dropdown clicked={false} />);
    expect(dropdown).toMatchSnapshot();
  });
});
