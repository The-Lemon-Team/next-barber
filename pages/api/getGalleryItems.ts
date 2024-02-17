import { strapi } from './strapi';

import { IGalleryItem } from '../../interfaces';
import { IGetGalleryItemsStrapiResponse } from '../../interfaces';

export const getGalleryItems = async (): Promise<IGalleryItem[]> => {
  return strapi
    .find<IGetGalleryItemsStrapiResponse[]>(
      'galleries?fields[0]=title&populate[image][fields][0]=name&populate[image][fields][1]=url',
    )
    .then((res) =>
      res.data.map((galleryItem) => ({
        id: galleryItem.id,
        imageSrc: galleryItem.attributes.image.data.attributes.url,
      })),
    );
};
