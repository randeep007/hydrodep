import React from 'react';
import Slider from 'react-slick';
import { Link } from '@remix-run/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pre from '../img/pre.png';
import ProductForm from './Product/ProductForm';

export const meta = () => {
  return [
    { title: 'BuildMyBody | Trending Products' },
    { name: 'description', content: 'Explore the latest trending products on BuildMyBody.' },
    { name: 'keywords', content: 'BuildMyBody, Trending Products' },
  ];
};

const Bmitrend = ({ trendingProducts, slides, product }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slides, // Show 3 slides on large screens
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 3, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 576, // Small screens
        settings: {
          slidesToShow: 2, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <section className="trending-products">
      <div className="container">
        <div className="text-center carousel">
          <h1 className="font-weight-bold custom-heading3" style={{ paddingTop: '0rem' }}>
            <em> Trending Products </em>
          </h1>
          {/* <p>Best deals on individual products picked for you. Shop Now to grab the deals!</p> */}
        </div>
        <Slider {...settings} aria-label="Trending Products Carousel">
          {trendingProducts.products.nodes.map((product, index) => (
            <div key={index} className="slider-item p-2 text-dark" role="listitem">
              <div>
                <Link to={`/product/${product.handle}`} className="product-link" aria-label={product.title}>
                  <img
                    src={product.variants.nodes[0].image.url}
                    alt={product.variants.nodes[0].image.altText}
                    className="w-100"
                  />
                </Link>
                <div className="mt-1 text-center">
                  <p style={{ fontWeight: '600', fontSize: '.9rem' }}>{product.title}</p>
                </div>
              </div>
              <div>
                <ProductForm
                  custom
                  button={
                    <button className="d-flex justify-content-center btn mt-4 category-btn w-100 flash-button">
                      Add to Cart
                    </button>
                  }
                  variantId={product.variants.nodes[0].id}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Bmitrend;
