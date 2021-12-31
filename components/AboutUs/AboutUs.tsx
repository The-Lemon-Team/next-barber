import React from 'react';
import {Box, Grid, IconButton, SvgIcon, Typography, useMediaQuery} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Map } from '../Map';
import { OutWrapper } from '../OutWrapper';

import styles from './AboutUs.module.css';
import { StandardSection } from '../StandardSection';

interface IAboutUsProps {}

export const AboutUs: React.FC<IAboutUsProps> = () => {

  return (
    <div className={styles.container}>
      <OutWrapper className={styles.wrapper}>
        <Grid container className={styles.gridWrapper}>
          <Grid item xs={12} md={6}>
            <div className={styles.card}>
              <StandardSection
                background="transparent"
                className={styles.section}
                paddingCondition={3}
                simplifyTitle
              >
                <Typography variant="h4">Barber Andrey</Typography>
                <Typography variant="h6" color='secondary'>+6(123)333-13-43</Typography>
                <div className={styles.socials}>
                  <Box display="inline-block">
                    <IconButton size="large">
                      <SvgIcon>
                        <InstagramIcon />
                      </SvgIcon>
                    </IconButton>
                  </Box>
                  <Box display="inline-block">
                    <IconButton size="large">
                      <FacebookIcon />
                    </IconButton>
                  </Box>
                </div>
              </StandardSection>
            </div>
          </Grid>
        </Grid>
      </OutWrapper>
      <Map />
    </div>
  );
};
