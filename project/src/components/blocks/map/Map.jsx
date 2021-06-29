import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../blocks/offers/offer.prop';
import useMap from '../../../hooks/useMap';
import useMapMarker from '../../../hooks/useMarkerMap';

export default function Map({ city, offers }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useMapMarker(map, offers);

  return (
    <div id="map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}

Map.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

