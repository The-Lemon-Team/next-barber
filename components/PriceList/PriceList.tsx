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

import { IPriceListItem } from '../../interfaces';
import { StandardSection } from '../StandardSection';

interface IPriceListProps {
  priceList: IPriceListItem[];
}

export const PriceList: React.FC<IPriceListProps> = ({ priceList }) => {
  return (
    <StandardSection title={'ПРАЙС ЛИСТ'}>
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
          {priceList.map(({ name, price, id }) => (
            <TableRow key={id}>
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
    </StandardSection>
  );
};
