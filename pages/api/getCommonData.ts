import { strapi } from './strapi';

import { ICommonData } from '../../interfaces';
import { IGetMainInfoStrapiResponse } from '../../interfaces';

export const getCommonData = async (): Promise<ICommonData> => {
  const result = await strapi.find<IGetMainInfoStrapiResponse>(
    'common?fields[0]=title&fields[1]=phone&fields[2]=address&fields[3]=geocode',
  );

  return { ...result.data.attributes, geocode: { lat: 10, lng: 10 } };
};
