import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../blocks/offers/offer.prop';
import useMap from '../../../hooks/useMap';
import useMapMarker from '../../../hooks/useMarkerMap';
import cityProp from '../cities/city.prop';

export default function Map({ offers, city, activeOffer }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useMapMarker(map, offers, activeOffer, city);

  return (
    <div id="map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}

Map.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeOffer: PropTypes.number,
};
