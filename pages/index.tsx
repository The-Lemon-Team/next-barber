import type { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  createMuiTheme,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from '@mui/material';

import { getMainPage } from '../firebase/firebase';

import styles from '../styles/Home.module.css';

const mainTheme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: ['Montserrat', '"Helvetica Neue"', 'Arial', 'Roboto'].join(','),
  },
  palette: {
    common: {
      black: '#0D0E13',
      white: '#FDFFFC',
    },
    primary: {
      main: '#E71D36',
    },
    secondary: {
      main: '#0057FF',
    },
    warning: {
      main: '#FF9F1C',
    },
    text: {
      primary: '#FDFFFC',
      disabled: '#8D8D8D',
    },
    action: {
      active: '#FDFFFC',
    },
  },
});

const Home = ({
  services,
  title,
}: {
  services: IStakeholderServiceFields[];
  title: string;
}) => {
  return (
    <>
      <Head>
        <title>Барбершоп</title>
      </Head>
      <ThemeProvider theme={mainTheme}>
        <div className={styles.main}>
          <div className={styles.container}>
            <h1>
              <Typography variant="h2" color="white">
                {title}
              </Typography>
            </h1>
            <Typography variant="h5" color="white">
              Прайс лист:
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Название</TableCell>
                  <TableCell>Цена</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.slug}>
                    <TableCell component="th" scope="row">
                      {service.slug}
                    </TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>{service.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const mainPageData = await getMainPage();

  return {
    props: {
      title: '',
      services: [],
    },
  };
};
