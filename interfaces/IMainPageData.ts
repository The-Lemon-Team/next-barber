export interface IFeature {
  title: string;
  description: string;
}

export interface IPriceListItem {
  name: string;
  price: number;
}

export interface IComment {
  avatar: string;
  authorName: string;
  date: string;
  text: string;
}

export interface IMainPageData {
  title: string;
  features: IFeature[];
  priceList: IPriceListItem[];
  comments: IComment[];
}
