import { Coords } from 'google-map-react';
import { GeoPoint } from '@firebase/firestore';

export interface IRawCommonData extends Omit<ICommonData, 'geocode'> {
  geocode: GeoPoint;
}

export interface ICommonData {
  title: string;
  phone: string;
  address: string;
  geocode: Coords;
}
