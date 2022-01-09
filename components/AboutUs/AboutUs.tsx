import React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
} from '@mui/material';
import { Coords } from 'google-map-react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Map } from '../Map';
import { OutWrapper } from '../OutWrapper';

import styles from './AboutUs.module.css';
import { StandardSection } from '../StandardSection';

interface IAboutUsProps {
  address: string;
  geocode: Coords;
  title: string;
  phone: string;
}

export const AboutUs: React.FC<IAboutUsProps> = ({
  address,
  title,
  phone,
  geocode,
}) => {
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
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6" color="secondary">
                  {phone}
                </Typography>
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
                <Button
                  variant="contained"
                  color="secondary"
                  className={styles.button}
                >
                  Записаца
                </Button>
              </StandardSection>
            </div>
          </Grid>
        </Grid>
      </OutWrapper>
      <Map
        position={{ lat: geocode.lat, lng: geocode.lng }}
        address={address}
      />
    </div>
  );
};
