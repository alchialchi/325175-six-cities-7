import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';
import reviews from '../../../mocks/reviews';

describe('Reviwes List', () => {
  it('should render correctly', () => {
    render(<ReviewsList reviews={reviews} />);

    expect(screen.getByRole('list')).toHaveClass('reviews__list');
    expect(screen.getByText(reviews[0].comment)).toBeInTheDocument();
  });
});
