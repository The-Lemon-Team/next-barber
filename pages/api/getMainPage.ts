import { getCommonData } from './getCommonData';
import { getGalleryItems } from './getGalleryItems';
import { getComments } from './getComments';
import { getPriceList } from './getPriceList';
import { getFeatures } from './getFeatures';

export const getMainPage = async () => {
  const galleryItems = await getGalleryItems();
  const commonData = await getCommonData();
  const comments = await getComments();
  const priceList = await getPriceList();
  const features = await getFeatures();

  return {
    comments,
    gallery: galleryItems,
    priceList,
    features,
    ...commonData,
  };
};
