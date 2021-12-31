import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Typography, Tooltip, useMediaQuery } from '@mui/material';
import classNames from 'classnames';

import { env } from '../../constants/env';
import styles from './Map.module.css';

const MapCard = () => {
  return (
    <Box p={2} style={{ background: '#000' }}>
      <Typography variant="body1" component="h4">
        Фонтанки 501, абвгд
      </Typography>
    </Box>
  );
};

const Marker = ({ lat, lng }: { lat: number; lng: number }) => (
  <Tooltip
    open
    placement="top-start"
    classes={{
      tooltip: styles.tooltip,
    }}
    title={<MapCard />}
  >
    <div className={classNames(styles.pin, 'look-here')} />
  </Tooltip>
);

export function Map() {
  const isMobileLayout = useMediaQuery('(max-width:900px)');

  return (
    <div style={{ height: isMobileLayout ? '512px' : '620px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: env.googleMapApiKey || '' }}
        draggable={false}
        options={{
          zoomControl: false,
          fullscreenControl: false,
        }}
        defaultCenter={{
          lat: 59.929389,
          lng: 30.335261,
        }}
        defaultZoom={16}
      >
        <Marker lat={59.928989} lng={30.338261} />
      </GoogleMapReact>
    </div>
  );
}
