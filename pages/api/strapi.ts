import Strapi from 'strapi-sdk-js';

import { env } from '../../constants/env';

export const strapi = new Strapi({
  url: 'http://localhost:1337/',
  axiosOptions: {
    headers: {
      Authorization: 'Bearer ' + env.strapiApiKey,
    },
  },
});
