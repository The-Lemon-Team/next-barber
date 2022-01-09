import React, { useEffect, useRef } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { useMediaQuery } from '@mui/material';

import { env } from '../../constants/env';
import { Marker } from './Marker';
import { getCenter } from './utils';

interface IMapProps {
  address: string;
  position: Coords;
}

export function Map({ address, position }: IMapProps) {
  const isMobileLayout = useMediaQuery('(max-width:900px)');
  const center = getCenter(position, isMobileLayout);

  console.log('center', center);

  return (
    <div
      style={{
        height: isMobileLayout ? '580px' : '620px',
        width: '100%',
        zIndex: 10000,
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: env.googleMapApiKey || '' }}
        // ref={mapRef}
        // draggable={false}
        draggable={true}
        yesIWantToUseGoogleMapApiInternals
        onDrag={console.log}
        onDragEnd={console.log}
        onChange={console.log}
        onGoogleApiLoaded={console.log}
        options={{
          zoomControl: false,
          fullscreenControl: false,
        }}
        center={center}
        defaultZoom={16}
      >
        <Marker lat={position.lat} lng={position.lng} address={address} />
      </GoogleMapReact>
    </div>
  );
}
