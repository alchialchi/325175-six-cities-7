import { renderHook } from '@testing-library/react-hooks';
import useMap from './use-map';

describe('useMap hook', () => {
  it('should return object', () => {
    const mapRef = null;
    const city = {
      location: {
        latitude: 53.4353,
        longitude: 4.5533,
        zoom: 12,
      },
      name: 'Amsterdam',
    };

    const { result } = renderHook(() => useMap(mapRef, city));

    expect(result).toBeInstanceOf(Object);
  });
});
