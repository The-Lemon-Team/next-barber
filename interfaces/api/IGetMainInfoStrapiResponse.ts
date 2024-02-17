export interface IGetMainInfoStrapiResponse {
  id: string;
  attributes: {
    title: string;
    phone: string;
    address: string;
    geocode: {
      lat: number;
      lng: number;
    };
  };
}
