import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import { Header } from '../components/Header';

import { materialTheme } from '../styles/materialTheme';
import { getMainPage } from '../firebase/firebase';
import { Features } from '../components/Features/Features';
import { Main } from '../components/Main';
import { IFeature } from '../interfaces/IMainPageData';

interface IHomeProps {
  title: string;
  features: IFeature[];
}

const Home = ({ features, title }: IHomeProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={materialTheme}>
        <Main>
          <Header title={title} />
          <Features features={features} />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const mainPageData = await getMainPage();

  return {
    props: {
      title: mainPageData.title,
      features: mainPageData.features,
    },
  };
};
