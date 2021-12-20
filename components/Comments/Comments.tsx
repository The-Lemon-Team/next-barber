import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { lighten } from '@mui/material';

import { materialTheme } from '../../styles/materialTheme';

import { IComment } from '../../interfaces';
import { StandardSection } from '../StandardSection';

interface ICommentsProps {
  comments: IComment[];
}

export const Comments: React.FC<ICommentsProps> = ({ comments }) => {
  return (
    <StandardSection title={'Отзывы'}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        columns={8}
        alignItems="stretch"
      >
        {comments.map(({ avatar, authorName, id, date, text }) => (
          <Grid xs={8} md={4} key={id} item>
            <Card
              sx={{
                background: lighten(materialTheme.palette.primary.main, 0.34),
                height: '100%',
              }}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" src={avatar}>
                    R
                  </Avatar>
                }
                title={<b>{authorName}</b>}
                subheader={<b>{date}</b>}
              />
              <Divider />
              <CardContent>
                <Typography variant="body1" color="text.primary">
                  {text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StandardSection>
  );
};
