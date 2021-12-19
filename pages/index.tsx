import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import { Header } from '../components/Header';

import { getMainPage } from '../firebase/firebase';
import { Features } from '../components/Features/Features';
import { Main } from '../components/Main';
import { PriceList } from '../components/PriceList/PriceList';
import { Comments } from '../components/Comments';
import { Portfolio } from '../components/Portfolio';

import { materialTheme } from '../styles/materialTheme';

import { IMainPageData } from '../interfaces';

const Home = ({
  features,
  title,
  priceList,
  comments,
  gallery,
}: IMainPageData) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={materialTheme}>
        <Main>
          <Header title={title} />
          <Features features={features} />
        </Main>
        <PriceList priceList={priceList} />
        <Comments comments={comments} />
        <Portfolio items={gallery} />
      </ThemeProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { title, features, priceList, comments, gallery } = await getMainPage();

  return {
    props: {
      title,
      features,
      priceList,
      comments,
      gallery,
    },
  };
};
