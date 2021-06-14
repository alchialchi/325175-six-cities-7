import React from 'react';
import uuid from 'react-uuid';

import LocationItem from './LocationItem';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export default function LocationList() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <LocationItem key={uuid()} city={city} />
        ))}
      </ul>
    </section>
  );
}
