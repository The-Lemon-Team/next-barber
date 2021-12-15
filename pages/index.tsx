import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import { Header } from '../components/Header';

import { materialTheme } from '../styles/materialTheme';
import { getMainPage } from '../firebase/firebase';
import { Features } from '../components/Features/Features';
import { Main } from '../components/Main';
import { IFeature, IPriceListItem } from '../interfaces/IMainPageData';
import { PriceList } from '../components/PriceList/PriceList';

interface IHomeProps {
  title: string;
  features: IFeature[];
  priceList: IPriceListItem[];
}

const Home = ({ features, title, priceList }: IHomeProps) => {
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
      </ThemeProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const mainPageData = await getMainPage();

  console.log(mainPageData.priceList);

  return {
    props: {
      title: mainPageData.title,
      features: mainPageData.features,
      priceList: mainPageData.priceList,
    },
  };
};
