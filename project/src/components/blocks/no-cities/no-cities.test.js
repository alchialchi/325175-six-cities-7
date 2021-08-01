import React from 'react';
import { render } from '@testing-library/react';
import NoCities from './no-cities';

const city = 'Paris';

describe('NoCities component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<NoCities city={city} />);

    expect(getByText('No places to stay available')).toBeInTheDocument();
    expect(getByText(`We could not find any property available at the moment in ${city}`)).toBeInTheDocument();
  });
});
