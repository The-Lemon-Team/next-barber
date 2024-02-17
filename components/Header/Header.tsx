import React from 'react';
import classNames from 'classnames';

import sharedStyles from '../../styles/shared.module.css';
import styles from './Header.module.css';

import { materialTheme } from '../../styles/materialTheme';

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      style={{
        background: materialTheme.palette.common.black,
      }}
      className={classNames(styles.header)}
    >
      <div
        className={sharedStyles.widthWrapper}
        style={{ color: materialTheme.palette.common.white }}
      >
        <span style={{ marginRight: '15px' }}>{title}</span>
      </div>
    </div>
  );
};
