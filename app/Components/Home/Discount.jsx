import React from 'react';
import dubai from '../../img/dubai.png';
import dubaimob from '../../img/dubaimob.png';

export const meta = () => {
  return [
    { title: 'BuildMyBody | Dubai Carousel' },
    { name: 'description', content: 'Explore fitness articles and products on BuildMyBody for health and wellness tips.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Articles, Health, Wellness, Products' },
  ];
};
const Carousel = () => {
  return (
    <section className='p-3' >
      <div>
        <img
          src={dubai}
          className='w-100 d-none d-lg-block'
          style={{ borderRadius: '10px' }}
          alt="Dubai City"
          loading="lazy"
        />
        <img
          src={dubaimob}
          className='w-100 d-block d-lg-none'
          style={{ borderRadius: '10px' }}
          alt="Dubai City "
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Carousel;
