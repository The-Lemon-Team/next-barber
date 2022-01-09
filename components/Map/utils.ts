import { Coords } from 'google-map-react';

const CENTER_DIFFERENCE = {
  lat: 0.00043099999999896,
  lng: 0.004506111144998215,
};

export const getCenter = ({ lat, lng }: Coords): Coords => {
  return {
    lat: lat - CENTER_DIFFERENCE.lat,
    lng: lng - CENTER_DIFFERENCE.lng,
  };
};
