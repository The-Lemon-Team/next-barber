import { IFeature } from '../IFeature';

interface IFeatureStrapiItem {
  id: number;
  attributes: Omit<IFeature, 'id'>;
}

export type IGetFeaturesStrapiResponse = IFeatureStrapiItem[];
