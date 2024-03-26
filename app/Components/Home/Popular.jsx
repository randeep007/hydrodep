import React, { useState } from 'react';
import whey from '../../img/whey.png';
import gainer from '../../img/gainer.png';
import workout from '../../img/workout.png';
import pre from '../../img/pre.png';
import creatine from '../../img/creatine.png';
import amino from '../../img/amino.png';
import { Link } from '@remix-run/react';
import { Oval } from 'react-loader-spinner';

export const meta = () => {
  return [
    { title: 'BuildMyBody | Popular in Sports Nutrition' },
    { name: 'description', content: 'Explore popular sports nutrition products on BuildMyBody for health and wellness tips.' },
    { name: 'keywords', content: 'BuildMyBody, Fitness Articles, Health, Wellness, Products, Sports Nutrition' },
  ];
};

const Popular = () => {
  const tiles = [
    { title: 'Whey Protein', url: 'whey-protein', image: whey },
    { title: 'Mass Gainer', url: 'mass-gainer-1', image: gainer },
    { title: 'Creatine', url: 'creatine', image: creatine },
    { title: 'Amino Acids/ BCAAs', url: 'amino-acids-bcaas-1', image: amino },
    {
      title: 'Pre/Post Workout',
      url: 'pre-post-workout',
      image: pre,
    },
    {
      title: 'Workout Essentials',
      url: 'workout-essentials',
      image: workout,
    },
  ];
  const [loading, setLoading] = useState(false); // State variable to track loading state

  return (
    <section id="popular" className="pb-3">
      <div className="container-fluid pb-5" id="cgap">
        <div
          className="d-flex justify-content-center pt-4"
          style={{ flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="font-weight-bolder custom-heading">
            <em>Popular in Sports Nutrition</em>
          </h1>
          <hr className="h1-hr" />
        </div>
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
          {tiles.map((tile) => (
            <Link
              to={`/products/${tile.url}`}
              className="col"
              key={tile.url}
              onClick={() => setLoading(true)} // Set loading state to true when tile is clicked
            >
              <div className="certificate-card mt-5 p-0 p-lg-2" style={{ borderRadius: '16px' }}>
                <p className="text-center mt-4">
                  <img
                    src={tile.image}
                    className="popular-img"
                    alt={`Image for ${tile.title}`}
                    style={{ width: '45%' }}
                  />
                </p>
                <div className="text-center" id="popular-txt">
                  <p className="pt-2 font-weight-bolder text-dark" style={{ fontSize: '1.1rem' }}>
                    {tile.title}
                  </p>
                </div>
              </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;