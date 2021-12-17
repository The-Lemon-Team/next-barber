import React from 'react';
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { OutWrapper } from '../OutWrapper';

import { materialTheme } from '../../styles/materialTheme';
import styles from './PriceList.module.css';
import sharedStyles from '../../styles/shared.module.css';

import { IPriceListItem } from '../../interfaces/IMainPageData';

interface IPriceListProps {
  priceList: IPriceListItem[];
}

export const PriceList: React.FC<IPriceListProps> = ({ priceList }) => {
  return (
    <div
      style={{ background: materialTheme.palette.common.black }}
      className={styles.container}
    >
      <OutWrapper>
        <Box p={4}>
          <Box py={3}>
            <Typography variant="h2" color="white">
              <span className={sharedStyles.innerTitleLabel}>Прайс лист</span>
            </Typography>
            <Divider color="white" />
          </Box>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">Название</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">Цена</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {priceList.map(({ name, price }, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="body1">{name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{price}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </OutWrapper>
    </div>
  );
};
