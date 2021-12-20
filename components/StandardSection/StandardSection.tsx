import React from 'react';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

import { OutWrapper } from '../OutWrapper';

import sharedStyles from '../../styles/shared.module.css';
import { materialTheme } from '../../styles/materialTheme';

interface IStandardSectionProps {
  title: string;

  fullWidth?: boolean;
}

export const StandardSection: React.FC<IStandardSectionProps> = ({
  title,
  children,
  fullWidth = false,
}) => {
  const renderContent = () => {
    return (
      <>
        <Box py={3}>
          <OutWrapper>
            <Typography variant="h2" color="white">
              <span className={sharedStyles.innerTitleLabel}>{title}</span>
            </Typography>
          </OutWrapper>
          <Divider color="white" />
        </Box>
        {children}
      </>
    );
  };

  return (
    <div style={{ background: materialTheme.palette.common.black }}>
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
