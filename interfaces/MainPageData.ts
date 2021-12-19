import { IComment } from './Comment';
import { ICommonData } from './CommonData';
import { IFeature } from './Feature';
import { IGalleryItem } from './Gallery';
import { IPriceListItem } from './PriceList';

export interface IMainPageData extends ICommonData {
  features: IFeature[];
  priceList: IPriceListItem[];
  comments: IComment[];
  gallery: IGalleryItem[];
}
