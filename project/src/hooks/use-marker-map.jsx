import { useEffect } from 'react';
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

export default function useMapMarker(map, offers, activeOffer, city) {
  const defaultPin = leaflet.icon(CustomPin.DEFAULT);
  const activePin = leaflet.icon(CustomPin.ACTIVE);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      offers.forEach(({id, location}) => {
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
}
