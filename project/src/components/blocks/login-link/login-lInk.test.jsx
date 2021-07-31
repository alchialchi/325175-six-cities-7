import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LoginLink from './login-link';

describe('LoginLink component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <LoginLink />
      </Router>,
    );

    expect(getByText('Sign in')).toBeInTheDocument();
  });
});
