import React from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';

import { env } from '../../constants/env';
import { Marker } from './Marker';
import { getCenter } from './utils';

import st from './Map.module.css';

interface IMapProps {
  address: string;
  position: Coords;
}

export function Map({ address, position = {} as any }: IMapProps) {
  const isMobileLayout = useMediaQuery('(max-width:900px)');
  const center = getCenter(position, isMobileLayout);

  console.log('position', position);

  return (
    <div
      className={classNames(st.wrapper, isMobileLayout && st.wrapper_mobile)}
    >
      123
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: env.googleMapApiKey || '' }}
        draggable={true}
        yesIWantToUseGoogleMapApiInternals
        options={{
          zoomControl: false,
          fullscreenControl: false,
        }}
        center={center}
        defaultZoom={16}
      >
        <Marker lat={position.lat} lng={position.lng} address={address} />
      </GoogleMapReact> */}
    </div>
  );
}
