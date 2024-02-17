import { strapi } from './strapi';

import { IPriceList, IGetPriceListStrapiResponse } from '../../interfaces';

export const getPriceList = (): Promise<IPriceList> => {
  return strapi
    .find<IGetPriceListStrapiResponse>(
      'prices?fields=[0]=name&fields=[1]=price',
    )
    .then(({ data }) =>
      data.map((item) => ({
        name: item.attributes.name,
        price: item.attributes.price,
        id: item.id,
      })),
    );
};
