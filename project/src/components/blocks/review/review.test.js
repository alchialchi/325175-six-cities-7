import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from './review';
import reviews from '../../../mocks/reviews';

describe('Review', () => {
  it('should render correctly', () => {
    render(<Review review={reviews[0]} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', reviews[0].user.avatarUrl);
    expect(screen.getByText(reviews[0].user.name)).toBeInTheDocument();
  });
});
