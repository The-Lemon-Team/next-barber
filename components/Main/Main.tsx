import React from 'react';

import backgroundImg from './index-bg.jpg';

import styles from './Main.module.css';
import { materialTheme } from '../../styles/materialTheme';

export const Main: React.FC = ({ children }) => {
  return (
    <div
      className={styles.main}
      style={{
        background: `${materialTheme.palette.common.black} url(${backgroundImg.src});`,
        backgroundSize: 'cover',
      }}
    >
      {children}
    </div>
  );
};
