import React from 'react';
import classNames from 'classnames';
import { Typography, Button } from '@mui/material';

import sharedStyles from '../../styles/shared.module.css';
import styles from './Features.module.css';
import textLogoPic from './text-logo.png';
import barbePic from './barbe.png';

import { IFeature } from '../../interfaces/IMainPageData';

interface IFeaturesProps {
  features: IFeature[];
}

export const Features: React.FC<IFeaturesProps> = ({ features }) => {
  return (
    <div className={sharedStyles.widthWrapper}>
      <div className={classNames(styles.container)}>
        <div className={styles.actionContent}>
          <img src={textLogoPic.src} width="380" />
          <Button variant="contained" className={styles.button}>
            Записаца
          </Button>
        </div>

        <div className={styles.logo}>
          <img src={barbePic.src} width="420" alt="Барбершоп «Borodinski»" />
        </div>
      </div>

      <section className={styles.features}>
        <ul className={styles.content}>
          {features.map(({ title, description }, index) => (
            <li className={styles.feature} key={index}>
              <b className={styles.featureTitle}>{title}</b>
              <Typography
                variant="subtitle1"
                component="span"
                className={styles.description}
              >
                <b> {description}</b>
              </Typography>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
