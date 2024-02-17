import { IPriceListItem } from '../IPriceList';

interface IPriceListResponseItem {
  id: number;
  attributes: IPriceListItem;
}

export type IGetPriceListStrapiResponse = IPriceListResponseItem[];
