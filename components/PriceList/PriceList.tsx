import React from 'react';
import {
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
        <div className={styles.title}>
          <Typography variant="h2" color="white">
            <span className={styles.innerTitleLabel}>Прайс лист</span>
          </Typography>
        </div>
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
      </OutWrapper>
    </div>
  );
};
