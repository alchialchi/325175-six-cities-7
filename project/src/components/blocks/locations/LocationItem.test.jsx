import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LocationItem from './LocationItem';

const history = createMemoryHistory();
const handleClick = jest.fn();
const name = 'Paris';

describe('Location Item', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <LocationItem
          isActive={false}
          name={name}
          onClick={handleClick}
        />
      </Router>,
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('locations__item-link tabs__item');
  });

  it('should render correctly with active city', () => {
    render(
      <Router history={history}>
        <LocationItem
          isActive
          name={name}
          onClick={handleClick}
        />
      </Router>,
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveClass('tabs__item--active');
  });

  it('should switch on click to link', () => {
    history.push('/offer/1');
    render(
      <Router history={history}>
        <LocationItem
          isActive={false}
          name={name}
          onClick={handleClick}
        />
      </Router>,
    );

    userEvent.click(screen.getByRole('link'));
    expect(handleClick).toHaveBeenCalledWith(name);
  });
});
