import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Loading from './loading';

describe('Loading', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Loading />
      </Router>,
    );

    expect(getByTestId('loading-id')).toBeInTheDocument();
  });
});
