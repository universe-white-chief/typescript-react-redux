import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from "../../../src/components/hello/index";

describe('<Hello/>', () => {
  it('should render Hello, test', () => {
    const wrapper = shallow(<Hello message="test" />);
    expect(wrapper.find('h1').text()).toEqual('Hello, test.');
  });
});
