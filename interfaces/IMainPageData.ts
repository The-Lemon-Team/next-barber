export interface IFeature {
  title: string;
  description: string;
}

export interface IPriceListItem {
  name: string;
  price: number;
}

export interface IMainPageData {
  title: string;
  features: IFeature[];
  priceList: IPriceListItem[];
}
