import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as redux from 'react-redux';
import createMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import ReviewForm from './review-form';

const history = createMemoryHistory();
const mockStore = createMockStore();

describe('ReviewForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore()}>
        <Router history={history}>
          <ReviewForm id={1} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Your review')).toBeInTheDocument();
    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(5);
  });

  it('should send review correctly', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={mockStore()}>
        <Router history={history}>
          <ReviewForm id={1} />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getAllByRole('radio')[4]);
  });
});
