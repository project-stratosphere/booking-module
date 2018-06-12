import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'jest-styled-components';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { DropdownHolder } from '../../../client/src/ModStylings';
import Calendar from '../../../client/src/calendar_mod2/Calendar';
import Dropdown from '../../../client/src/calendar_mod2/Dropdown';

configure({ adapter: new Adapter() });

const props = {
  clicked: 'checkIn',
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
    expect(dropdown.find(Calendar)).toHaveLength(1);
    expect(dropdown).toMatchSnapshot();
  });
  it('does not render if not clicked', () => {
    const dropdown = mount(<Dropdown clicked="" />);
    expect(dropdown).toMatchSnapshot();
  });
});
