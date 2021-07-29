import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingList from './RatingList';

describe('Rating List', () => {
  it('should render correctly', () => {
    const handleClick = jest.fn();
    render(
      <RatingList
        rating={'5'}
        onChange={handleClick}
      />,
    );

    expect(screen.getByRole('radio', { name: 'perfect' })).toBeInTheDocument();
  });
});
