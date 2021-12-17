import React from 'react';

import { IComment } from '../../interfaces/IMainPageData';
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
import { Box } from '@mui/system';

import { OutWrapper } from '../OutWrapper';

import { materialTheme } from '../../styles/materialTheme';
import styles from './Comments.module.css';
import sharedStyles from '../../styles/shared.module.css';

interface ICommentsProps {
  comments: IComment[];
}

export const Comments: React.FC<ICommentsProps> = ({ comments }) => {
  return (
    <div
      style={{ background: materialTheme.palette.common.black }}
      className={styles.container}
    >
      <OutWrapper>
        <Box p={4}>
          <Box py={3}>
            <Typography variant="h2" color="white">
              <span className={sharedStyles.innerTitleLabel}>Отзывы</span>
            </Typography>
            <Divider color="white" />
          </Box>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={3}
            columns={8}
            alignItems="stretch"
          >
            {comments.map((comment, index) => (
              <Grid xs={8} md={4} key={index} item>
                <Card
                  sx={{
                    background: lighten(
                      materialTheme.palette.primary.main,
                      0.34,
                    ),
                    height: '100%',
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" src={comment.avatar}>
                        R
                      </Avatar>
                    }
                    title={<b>{comment.authorName}</b>}
                    subheader={<b>{comment.date}</b>}
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="body1" color="text.primary">
                      {comment.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </OutWrapper>
    </div>
  );
};
