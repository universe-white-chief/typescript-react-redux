import * as React from 'react';
import { shallow } from 'enzyme';
import { Props, View as HelloView } from '../../../src/components/hello/View';

describe('HelloView', () => {
  it('should render the greeting message', () => {
    const props: Props = {
      message: 'test',
      onClick: () => {},
      isClicked: false
    };
    const wrapper = shallow(<HelloView { ...props } />);
    expect(wrapper.find('h1').text()).toEqual('Hello, test.');
  });

  it('should call onClick when user clicks the button', () => {
    const props: Props = {
      message: 'test',
      onClick: jest.fn(),
      isClicked: false
    };
    const wrapper = shallow(<HelloView { ...props }/>);
    wrapper.find('button').simulate('click');
    expect(props.onClick).toBeCalled();
  });

  it('should render again when user clicked', () => {
    const props: Props = {
      message: 'test',
      onClick: () => {},
      isClicked: true
    };
    const wrapper = shallow(<HelloView { ...props }/>);
    expect(wrapper.find('h1').text()).toEqual('Hello, test, again.');
  });
});
