import React from 'react';
import Carousel from 'react-multi-carousel';
import { Box } from '@mui/system';
import Image from 'next/image';

import { IGalleryItem } from '../../interfaces';

import styles from './Gallery.module.css';
import { StandardSection } from '../StandardSection';

interface IPortfolioProps {
  items: IGalleryItem[];
}

export const Gallery: React.FC<IPortfolioProps> = ({ items }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <StandardSection title={'Наши работы'}>
      <Box pb={4}>
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          transitionDuration={500}
          itemClass={styles.itemWrapper}
        >
          {items.map((item, index) => (
            <div key={item.id} className={styles.item}>
              <img
                alt={`work-example-${index}`}
                className="react-multi-carousel-item--active"
                src={'http://localhost:1337' + item.imageSrc}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    </StandardSection>
  );
};
