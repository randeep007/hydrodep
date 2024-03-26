import { Link } from '@remix-run/react';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import article1 from '../../img/article1.jpg';
import article2 from '../../img/article2.jpg';
import article3 from '../../img/article3.jpg';
import article4 from '../../img/article4.jpg';


export const meta = () => {
  return [
    { title: 'BuildMyBody | Fitness Articles' },
    { name: 'description', content: 'Explore fitness articles on BuildMyBody for health and wellness tips.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Articles, Health, Wellness' },
  ];
};

const BrandCaraousel = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const articles = [
    {
      image: article1,
      date: '10th June, 2019',
      title: 'Fitness Hacks During Navratri'
    },
    {
      image: article2,
      date: '10th June, 2019',
      title: 'Fitness Hacks During Navratri'
    },
    {
      image: article3,
      date: '10th June, 2019',
      title: 'Fitness Hacks During Navratri'
    },
    {
      image: article4,
      date: '10th June, 2019',
      title: 'Fitness Hacks During Navratri'
    }
  ];
  return (
    <>
      <section id="fitness-car">
        <div className="container-fluid pt-5 pb-5 mt-2  mb-5" >
          <div
            className="d-flex justify-content-center mb-5 pt-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="custom-heading3">
              <em>Fitness Articles</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="fitness-slider">
            <Slider
              className="ml-lg-5 mr-lg-5"
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                    nextArrow: <></>,
                    prevArrow: <></>,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    nextArrow: <></>,
                    prevArrow: <></>,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: <></>,
                    prevArrow: <></>,
                  },
                },
              ]}
            >
              {articles.map((article, index) => (
                <div className="card" id="articles-card" key={index}>
                  <img className="card-img-articles" src={article.image} alt="Card image cap" />
                  <Link to="/blog" className="card-content2">
                    <p className="mt-3"><em style={{ color: '#474544' }}>{article.date}</em></p>
                    <h2 className="font-weight-bold mt-2" style={{ color: '#474544' }}>{article.title}</h2>
                    <Link to="#" className="btn category-btn d-flex justify-content-center mt-4">Read More</Link>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCaraousel;
