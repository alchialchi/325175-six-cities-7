import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../blocks/offers/offer.prop';
import useMap from '../../../hooks/useMap';
// import useMapMarker from '../../../hooks/useMarkerMap';
import cityProp from '../cities/city.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CustomPin = {
  DEFAULT: {
    iconUrl: 'img/pin.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 30],
  },
  ACTIVE: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 30],
  },
};

export default function Map({ offers, city, activeOffer }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  // useMapMarker(map, offers);

  const defaultPin = leaflet.icon(CustomPin.DEFAULT);
  const activePin = leaflet.icon(CustomPin.ACTIVE);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach(({ id, location }) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon: id === activeOffer
              ? activePin
              : defaultPin,
          })
          .addTo(markers);
      });

      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, offers, city, activeOffer, activePin, defaultPin]);

  return (
    <div id="map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}

Map.propTypes = {
  city: cityProp,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeOffer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ]),
};
