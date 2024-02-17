import { IComment } from './IComment';
import { ICommonData } from './ICommonData';
import { IFeature } from './IFeature';
import { IGalleryItem } from './IGallery';
import { IPriceListItem } from './IPriceList';

export interface IMainPageData extends ICommonData {
  features: IFeature[];
  priceList: IPriceListItem[];
  comments: IComment[];
  gallery: IGalleryItem[];
}

// export type IMainPageData = {};
