import React from 'react';
import { Grid } from '@mui/material';

import { OutWrapper } from '../OutWrapper';
import { Logo } from '../Logo';

import { materialTheme } from '../../styles/materialTheme';

interface IFooterProps {
  phone: string;
  address: string;
  title: string;
}

export const Footer: React.FC<IFooterProps> = ({ phone, address, title }) => {
  return (
    <div style={{ background: materialTheme.palette.primary.main }}>
      <OutWrapper>
        <Grid container>
          <Grid item md={4}>
            <Logo />
          </Grid>
          <Grid item md={5} />
        </Grid>
      </OutWrapper>
    </div>
  );
};
