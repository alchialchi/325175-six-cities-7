import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import SortItem from './sort-item';

describe('SortItem component', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SortItem
          type={'DEFAULT'}
          isActive
          onClick={() => {}}
        />
      </Router>,
    );
    expect(screen.getByRole('listitem')).toHaveClass('places__option--active');
  });

  it('should call handleClick on click', () => {
    const history = createMemoryHistory();
    const handleClick = jest.fn();
    render(
      <Router history={history}>
        <SortItem
          type={'DEFAULT'}
          isActive
          onClick={handleClick}
        />
      </Router>,
    );

    userEvent.click(screen.getByRole('listitem'));
    expect(handleClick).toBeCalled();
  });
});
