import React from 'react';
import { render } from '@testing-library/react';
import Map from './map';
import { offer } from '../../../mocks/offers';

describe('Map', () => {
  it('should render correctly', () => {
    const activeOffer = {};
    const city = {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 12,
      },
    };

    const { queryByText  } = render(
      <Map
        offers={[offer]}
        city={city}
        activeOffer={activeOffer}
      />,
    );

    expect(queryByText(/text/i)).not.toBeInTheDocument();
  });
});
