import React from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';

import { changeCity } from '../../../store/action';
import LocationItem from './location-item';
import { getCities, getCity } from '../../../store/work-process/selectors';

function LocationsList() {
  const dispatch = useDispatch();
  const activeCity = useSelector(getCity);
  const cities = useSelector(getCities);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => (
            <LocationItem
              key={uuid()}
              isActive={item.name === activeCity}
              name={item.name}
              onClick={(payload) => dispatch(changeCity(payload))}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default React.memo(LocationsList);
