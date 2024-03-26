import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import blog1 from '../../img/blog-1.jpg';
import blog2 from '../../img/blog-2.jpg';
import blog3 from '../../img/blog-3.jpg';

import './Blog.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Blog_fitness() {
  const navigate = useNavigate();

  const navigateToFood = () => {
    navigate('/blog_food');
  };
  const navigateToHealthy = () => {
    navigate('/blog_healthy');
  };
  const navigateToNavratri = () => {
    navigate('/blog_navratri');
  };
  const navigateToFitness = () => {
    navigate('/blog_fitness');
  };
  const navigateToAll = () => {
    navigate('/blog');
  };

  return (
    <div className="main-div">
      <Navbar />
      <div className="container">
        <p className="text-center mt-3 blogs-text">BLOGS</p>
        <nav className="nav nav-pills flex-column flex-sm-row  justify-content-center blog-links mt-3">
          <a
            className="flex-sm-fill text-sm-center nav-link blog-colour"
            onClick={navigateToAll}
            href="#"
          >
            All
          </a>
          <a
            className="flex-sm-fill text-sm-center nav-link blog-colour"
            onClick={navigateToFitness}
            href="#"
          >
            Fitness
          </a>
          <a
            className="flex-sm-fill text-sm-center nav-link blog-colour"
            onClick={navigateToFood}
            href="#"
          >
            Food
          </a>
          <a
            className="flex-sm-fill text-sm-center nav-link blog-colour"
            onClick={navigateToHealthy}
            href="#"
          >
            Healthy Eating
          </a>
          <a
            className="flex-sm-fill text-sm-center nav-link blog-colour"
            onClick={navigateToNavratri}
            href="#"
          >
            Navratri
          </a>
        </nav>

        <div className="row no-gutters mt-5 blog-margin">
          <div className="col-lg-6 col-sm-12 col-md-12 ">
            <img src={blog1} className="img-fluid login-img " />
          </div>

          <div className="col  ">
            <p className="text-center mt-2 blog-name">
              Fitness Hacks During Navratri:
            </p>
            <p className="text-center mt-5">
              Navratri time is here. A great opportunity to detox your body. But
              there are some things you should keep in mind while fasting - to
              balance out the pros and cons. Today we’ll learn them very quickly
              -
            </p>
            <p className="text-center">
              <button
                type="submit"
                className="btn font-weight-bold mt-4 blog-btn text-light"
              >
                {' '}
                Read More
              </button>
            </p>
          </div>
        </div>

        <div className="row no-gutters mt-5">
          <div className="col-md-12 d-lg-none d-md-block ">
            <img src={blog2} className="img-fluid login-img " />
          </div>
          <div className=" col-lg-6 col-sm-12 col-md-12">
            <p className="text-center mt-2 blog-name">Hydration is the key:</p>
            <p className="text-center mt-5 mr-lg-2">
              Fast or no fast, water intake is super important for your body.
              During fasting, the body’s stored energy resources are used.
              That’s why hydration becomes even more necessary. With fruit
              intake, water needs can be managed but drinking it is always
              better, to be on the safer side. Fruit juice is a good middle way
              between this water and fruit dilemma. Try that as an experiment.
            </p>
            <p className="text-center">
              <button
                type="submit"
                className="btn font-weight-bold mt-4 blog-btn text-light "
              >
                {' '}
                Read More
              </button>
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block ">
            <img src={blog2} className="img-fluid login-img" />
          </div>
        </div>

        <div className="row no-gutters mt-5">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <img src={blog3} className="img-fluid login-img" />
          </div>
          <div className="col  ">
            <p className="text-center mt-2 blog-name">
              Avoid fried, oily and sugary stuff:
            </p>
            <p className="text-center mt-5 ml-lg-2">
              Potatoes might become your friend during Navratri time. There are
              so many chips available in the market made of things other than
              just potatoes. But they’re not a healthy option. Too much oil in
              them. Plus, sugar anyways is empty calories. This doesn’t mean you
              can’t have sweets. Just make sure to have them in moderation. Not
              to mention, binging will ruin the purpose of fast. Remember you’re
              fasting for detoxing and giving your body a break.
            </p>
            <p className="text-center">
              <button
                type="submit"
                className="btn font-weight-bold mt-4 blog-btn text-light"
              >
                {' '}
                Read More
              </button>
            </p>
          </div>
        </div>

        <div className="mt-3"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog_fitness;
