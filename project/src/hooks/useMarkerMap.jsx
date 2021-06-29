import { useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function useMapMarker(map, offers) {

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [30, 40],
      iconAnchor: [15, 30],
    });

    if (map) {
      offers.forEach(({location}) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          }, {
            icon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);
}
