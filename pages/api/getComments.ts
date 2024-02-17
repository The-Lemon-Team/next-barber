import { strapi } from './strapi';

import { IComment } from '../../interfaces';
import { IGetCommentsStrapiResponse } from '../../interfaces/api/IGetCommentsStrapiResponse';

export const getComments = async (): Promise<IComment[]> => {
  return strapi
    .find<IGetCommentsStrapiResponse[]>(
      'comments?fields[0]=author&fields[1]=date&fields[2]=text&populate[avatar][fields][1]=url',
    )
    .then((response) => {
      return response.data.map((comment) => {
        return {
          ...comment.attributes,
          id: comment.id,
          avatar: comment.attributes.avatar.data.attributes.url,
        };
      });
    });
};
