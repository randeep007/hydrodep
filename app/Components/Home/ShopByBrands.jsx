import React, { useState } from 'react';
import photo from '../../img/cellu.png';
import photo1 from '../../img/mt.png';
import photo3 from '../../img/mp.png';
import photo5 from '../../img/onn.png';
import { Link } from '@remix-run/react';
import { Oval } from 'react-loader-spinner';

export const meta = () => {
  return [
    { title: 'BuildMyBody | Shop By Brands' },
    { name: 'description', content: 'Explore products from popular brands in sports nutrition on BuildMyBody for health and wellness tips.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Articles, Health, Wellness, Products, Sports Nutrition, Brands' },
  ];
};

const ShopByBrands = () => {
  const [loading, setLoading] = useState(false); // State variable to track loading state

  // Function to handle loading state
  const handleLoading = () => {
    setLoading(true);
    // You can perform additional actions here, such as fetching data
  };
  return (
    <>
      {loading && (
        <div className="overlay">
          <Oval
            visible={true}
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <section id="shopbb" className="container mt-5 mb-5">
        <div
          className="d-flex justify-content-center mb-5 pt-5"
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="custom-heading3">
            <em>Shop By Brands</em>
          </h1>
          <hr className="h1-hr" />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 col-sm-6 mb-2  mb-lg-0 mb-md-0">
            <div className="certificate-card1">
              <Link to={`/products/cellucor`} className="text-center mt-4" onClick={handleLoading}>
                <img src={photo} className="w-100" alt="Cellucor" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-sm-6 mb-2 mb-lg-0 mb-md-0">
            <div className="certificate-card1">
              <Link to={`/products/muscletech`} className="text-center mt-4" onClick={handleLoading}>
                <img src={photo1} className="w-100" alt="Muscletech" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-sm-6 mt-lg-2 mt-md-2 mb-2 mb-lg-0 mb-md-0">
            <div className="certificate-card1">
              <Link to="/products/musclepharm" className="text-center mt-4" onClick={handleLoading}>
                <img src={photo3} className="w-100" alt="MusclePharm" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-sm-6 mt-lg-2 mt-md-2">
            <div className="certificate-card1">
              <Link to={`/products/on-nutrition`} className="text-center mt-4" onClick={handleLoading}>
                <img src={photo5} className="w-100" alt="ON Nutrition" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByBrands;
