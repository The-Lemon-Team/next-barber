import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';

import { IGalleryItem } from '../../interfaces';

import styles from './Gallery.module.css';
import { StandardSection } from '../StandardSection';
import { Box } from '@mui/system';

interface IPortfolioProps {
  items: IGalleryItem[];
}

export const Gallery: React.FC<IPortfolioProps> = ({ items }) => {
  const [count, setCount] = useState(10);

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
    <StandardSection title={'Наши работы'} fullWidth>
      <Box pb={4}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          transitionDuration={500}
          itemClass={styles.itemWrapper}
        >
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <img
                className="react-multi-carousel-item--active"
                src={item.imageSrc}
                onClick={() => {
                  console.log(count);
                  setCount(count + 1);
                }}
              />
            </div>
          ))}
        </Carousel>
      </Box>
    </StandardSection>
  );
};
