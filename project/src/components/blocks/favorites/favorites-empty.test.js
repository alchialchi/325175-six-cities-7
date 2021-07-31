import React from 'react';
import { render } from '@testing-library/react';
import FavoritesEmpty from './favorites-empty';

describe('No Favorites items', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FavoritesEmpty />);

    expect(getByText('Favorites (empty)')).toBeInTheDocument();
    expect(getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });
});
