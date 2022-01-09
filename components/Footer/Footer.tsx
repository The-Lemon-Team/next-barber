import React from 'react';
import { Grid } from '@mui/material';

import { OutWrapper } from '../OutWrapper';
import { Logo } from '../Logo';

import { materialTheme } from '../../styles/materialTheme';

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div style={{ background: materialTheme.palette.primary.main }}>
      <OutWrapper>
        <Grid container>
          <Grid item md={4}>
            <Logo />
          </Grid>
          <Grid item md={5} />
          <Grid item md={3}>
            list
          </Grid>
        </Grid>
      </OutWrapper>
    </div>
  );
};
