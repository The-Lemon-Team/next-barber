import React from 'react';

import textLogoPic from './text-logo.png';
import styles from './Logo.module.css';

export const Logo: React.FC = () => {
  return <img src={textLogoPic.src} className={styles.textLogo} />;
};
