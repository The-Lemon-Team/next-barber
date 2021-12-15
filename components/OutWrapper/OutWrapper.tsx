import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import styles from '../../styles/shared.module.css';

interface IOutWrapperProps {
  className?: string;
  style?: CSSProperties;
}

export const OutWrapper: React.FC<IOutWrapperProps> = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div className={classNames(styles.widthWrapper, className)} {...rest}>
      {children}
    </div>
  );
};
