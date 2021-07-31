import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import SortList from './sort-list';

describe('SortList', () => {
  it('should render correctly', () => {
    const mockStore = configureStore();
    const history = createMemoryHistory();
    const sortType = { name: 'default', text: 'Popular' };
    const storeMockedData = {
      PROCESS: {
        sortType,
      },
    };

    render(
      <Provider store={mockStore(storeMockedData)}>
        <Router history={history}>
          <SortList />
        </Router>
      </Provider>,
    );

    expect(screen.getByRole('list')).toHaveClass('places__options places__options--custom', { exact: true });
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
