import { strapi } from './strapi';

import { IGetFeaturesStrapiResponse } from '../../interfaces';

export const getFeatures = () => {
  return strapi
    .find<IGetFeaturesStrapiResponse>('features')
    .then(({ data }) =>
      data.map((feature) => ({
        description: feature.attributes.description,
        title: feature.attributes.title,
        id: feature.id,
      })),
    );
};
