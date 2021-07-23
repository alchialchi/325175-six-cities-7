import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import { connect } from 'react-redux';

import { changeCity } from '../../../store/action';
import cityProp from '../cities/city.prop';
import LocationItem from './LocationItem';

function LocationList({ cities, city, onClick }) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((item) => (
            <LocationItem key={uuid()} isActive={item.name === city} name={item.name} onClick={onClick} />
          ))}
        </ul>
      </section>
    </div>
  );
}

LocationList.propTypes = {
  cities: PropTypes.arrayOf(cityProp),
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({ PROCESS }) => ({
  city: PROCESS.city,
  cities: PROCESS.cities,
});

const mapDispatchToProps = (dispatch) => ({
  onClick(city) {
    dispatch(changeCity(city));
  },
});

export { LocationList };
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);

