import { Link } from '@remix-run/react';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';
import { Oval } from 'react-loader-spinner';

export const meta = () => {
  return [
    { title: 'BuildMyBody | Shop by Category' },
    { name: 'description', content: 'Explore fitness articles and products on BuildMyBody for health and wellness tips.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Articles, Health, Wellness, Products' },
  ];
};

const FeaturedProducts = ({ collections }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [loading, setLoading] = useState(false); // State variable to track loading state
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  // Function to handle "Shop now" click
  const handleShopNowClick = () => {
    setLoading(true); // Set loading state to true when "Shop now" is clicked
    // Perform any additional actions (e.g., fetching data) here
  };

  return (
    <section id="product-card" className="mb-5">
      <div className="container-fluid" id="cgap">
        <Fade direction="up" triggerOnce>
          <div
            className="d-flex justify-content-center mb-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1 className="font-weight-bold custom-heading1">
              <em>Shop by Category</em>
            </h1>
            <hr className="h1-hr" />
          </div>
        </Fade>

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
          {collections.nodes.map((collection) => (
            <div className="card" style={{ width: '18rem', paddingBottom: '' }} id="cgap" key={collection.id}>
              <Link to={`/products/${collection.handle}`} onClick={handleShopNowClick} >
                <img className="card-img-top" src={collection.image?.url || ''} alt="Card image cap" />
              </Link>
              <div className="card-content">
                <Link
                  to={`/products/${collection.handle}`}
                  className="btn category-btn d-flex justify-content-center mt-4"
                  onClick={handleShopNowClick} // Call handleShopNowClick when "Shop now" is clicked
                >
                  Shop now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        {loading && (
          <div className="overlay">
            <Oval
              visible={true}
              height={80}
              width={80}
              color="black"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
