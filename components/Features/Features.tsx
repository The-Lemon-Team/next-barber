import React from 'react';
import { Typography, Button, Grid } from '@mui/material';

import { OutWrapper } from '../OutWrapper';
import { Logo } from '../Logo';

import styles from './Features.module.css';
import barbePic from './barbe.png';

import { IFeature } from '../../interfaces';

interface IFeaturesProps {
  features: IFeature[];
}

export const Features: React.FC<IFeaturesProps> = ({ features }) => {
  return (
    <OutWrapper className={styles.container}>
      <Grid container className={styles.grid} alignItems="center">
        <Grid item xs={12} md={6} lg={6} style={{ textAlign: 'left' }}>
          <div className={styles.actionContent}>
            <div className={styles.textLogo}>
              <Logo />
            </div>
            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
            >
              Записаца
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <div className={styles.logo}>
            <img src={barbePic.src} alt="Барбершоп «Borodinski»" />
          </div>
        </Grid>
      </Grid>

      <section className={styles.features}>
        <Grid container className={styles.content}>
          {features.map(({ title, description, id }) => (
            <Grid item xs={12} md={4} key={id} className={styles.feature}>
              <b className={styles.featureTitle}>{title}</b>
              <Typography
                variant="subtitle1"
                component="span"
                className={styles.description}
              >
                <b> {description}</b>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </section>
    </OutWrapper>
  );
};
