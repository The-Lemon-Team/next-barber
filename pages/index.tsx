import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import { Header } from '../components/Header';

import { materialTheme } from '../styles/materialTheme';
import { getMainPage } from '../firebase/firebase';
import { Features } from '../components/Features/Features';
import { Main } from '../components/Main';
import {
  IComment,
  IFeature,
  IPriceListItem,
} from '../interfaces/IMainPageData';
import { PriceList } from '../components/PriceList/PriceList';
import { Comments } from '../components/Comments';

interface IHomeProps {
  title: string;
  features: IFeature[];
  priceList: IPriceListItem[];
  comments: IComment[];
}

const Home = ({ features, title, priceList, comments }: IHomeProps) => {
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
      </ThemeProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { title, features, priceList, comments } = await getMainPage();

  return {
    props: {
      title,
      features,
      priceList,
      comments,
    },
  };
};
