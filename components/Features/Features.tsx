import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Typography } from '@mui/material';

import sharedStyles from '../../styles/shared.module.css';
import styles from './Features.module.css';
import profilePic from './barber-logo.png';

import { IFeature } from '../../interfaces/IMainPageData';

interface IFeaturesProps {
  features: IFeature[];
}

export const Features: React.FC<IFeaturesProps> = ({ features }) => {
  return (
    <div className={classNames(sharedStyles.widthWrapper, styles.container)}>
      <div className={styles.logo}>
        <Image
          src={profilePic}
          width="520"
          height="212"
          alt="Барбершоп «Borodinski»"
        />
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
