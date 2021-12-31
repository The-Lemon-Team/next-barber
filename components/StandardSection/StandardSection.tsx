import React from 'react';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import classNames from 'classnames';

import { OutWrapper } from '../OutWrapper';

import sharedStyles from '../../styles/shared.module.css';
import { materialTheme } from '../../styles/materialTheme';

interface IStandardSectionProps {
  title?: string;
  background?: string;
  className?: string;
  fullWidth?: boolean;
  paddingCondition?: 1 | 2 | 3 | 4;
  simplifyTitle?: boolean;
  titleVariant?: Variant;
}

export const StandardSection: React.FC<IStandardSectionProps> = ({
  background,
  className,
  title,
  children,
  fullWidth = false,
  titleVariant = 'h2',
  paddingCondition = 3,
  simplifyTitle = false,
}) => {
  const renderContent = () => {
    return (
      <>
        {title && (
          <Box py={paddingCondition}>
            <OutWrapper>
              <Typography variant={titleVariant} color="white" component="h2">
                <span
                  className={classNames(
                    sharedStyles.innerTitleLabel,
                    simplifyTitle && sharedStyles.simplifyTitle,
                  )}
                >
                  {title}
                </span>
              </Typography>
            </OutWrapper>
            <Divider color="white" />
          </Box>
        )}
        {children}
      </>
    );
  };

  return (
    <div
      className={className}
      style={{ background: background || materialTheme.palette.common.black }}
    >
      {fullWidth ? (
        renderContent()
      ) : (
        <OutWrapper>
          <Box p={4}>{renderContent()}</Box>
        </OutWrapper>
      )}
    </div>
  );
};
