import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Hello, reducer } from '../../../../src/components/hello';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

describe('HelloView', () => {
  it('show render Hello', () => {
    const store = createStore(combineReducers({ hello: reducer }));
    const wrapper = mount(<Provider store={ store }><Hello message="test"/></Provider>).find(Hello);

    expect(wrapper.find('.title').text()).toBe('Hello, test.');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.title').text()).toBe('Hello, test, again.');
  });
});
