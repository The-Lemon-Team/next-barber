import React from 'react';
import classNames from 'classnames';
import { Coords } from 'google-map-react';
import { Box, Tooltip, Typography, useMediaQuery } from '@mui/material';

import styles from './Map.module.css';

interface IMapCardProps {
  address: string;
}

const MapCard = ({ address }: IMapCardProps) => {
  return (
    <Box p={2} style={{ background: '#000' }}>
      <Typography variant="body1" component="h4">
        {address}
      </Typography>
    </Box>
  );
};

interface IMarkerProps extends Coords, IMapCardProps {}

export const Marker = ({ address }: IMarkerProps) => {
  const isMobileLayout = useMediaQuery('(max-width:900px)');
  const placement = isMobileLayout ? 'top' : 'top-start';

  return (
    <Tooltip
      open
      placement={placement}
      classes={{
        tooltip: styles.tooltip,
      }}
      title={<MapCard address={address} />}
    >
      <div className={classNames(styles.pin, 'look-here')} />
    </Tooltip>
  );
};
