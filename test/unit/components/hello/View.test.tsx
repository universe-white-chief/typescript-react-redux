import * as React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Props, View as HelloView} from '../../../../src/components/hello/View';

describe('HelloView', () => {
  it('should render the greeting message', () => {
    const props: Props = {
      message: 'test',
      onClick: () => {
      },
      isClicked: false
    };
    render(<HelloView {...props} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, test.');
  });

  it('should call onClick when user clicks the button', () => {
    const handleClick = jest.fn()
    const props: Props = {
      message: 'test',
      onClick: handleClick,
      isClicked: false
    };
    render(<HelloView {...props}/>);

    fireEvent.click(screen.getByText('Hi'))

    expect(handleClick).toHaveBeenCalledTimes(1)
  });

  it('should render again when user clicked', () => {
    const props: Props = {
      message: 'test',
      onClick: () => {
      },
      isClicked: true
    };
    render(<HelloView {...props}/>);
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, test, again.');
  });
});
