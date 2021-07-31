import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import Logo from './logo';
import { APP_ROUTES } from '../../../const';

const history = createMemoryHistory();

describe('Logo component', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Logo />
      </Router>,
    );

    expect(screen.getByRole('link', { href: APP_ROUTES.ROOT })).toBeInTheDocument();
  });
});
