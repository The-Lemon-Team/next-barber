import { IComment } from '../IComment';

export interface IGetCommentsStrapiResponse {
  id: number;
  attributes: Omit<IComment, 'id' | 'avatar'> & {
    avatar: {
      data: {
        id: string;
        attributes: { url: string };
      };
    };
  };
}
