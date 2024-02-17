export interface IGetGalleryItemsStrapiResponse {
  id: string;
  attributes: {
    title: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
}
