import React from 'react';
import uuid from 'react-uuid';

const options = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

// TODO: return places__option--active later

export default function PlaceOptionsList() {

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {options.map((option) => (
        <li key={uuid()} className="places__option" tabIndex="0">
          {option}
        </li>
      ))}
    </ul>
  );
}
