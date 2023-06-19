import * as React from 'react';
import {createStore, combineReducers} from 'redux';
import {Hello, reducer} from '../../../../src/components/hello';
import {Provider} from 'react-redux';
import {fireEvent, render, screen} from '@testing-library/react'

describe('HelloView', () => {
  it('show render Hello', () => {
    const store = createStore(combineReducers({hello: reducer}));
    render(<Provider store={store}><Hello message="test"/></Provider>);


    expect(screen.getByRole('heading')).toHaveTextContent('Hello, test.');
    fireEvent.click(screen.getByText('Hi'))
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, test, again');
  });
});
