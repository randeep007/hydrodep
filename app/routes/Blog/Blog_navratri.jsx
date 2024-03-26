import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import blog1 from '../../img/blog-1.jpg';

import './Blog.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Blog_food() {
  const navigate = useNavigate();

  const navigateToBlog2 = () => {
    navigate('/blog2');
  };
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
              {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light"> Read More</button> */}
              <a
                className="btn font-weight-bold mt-4 blog-btn text-light"
                target="_blank"
                href="https://m.timesofindia.com/life-style/food-news/5-tips-that-will-make-navratri-fasting-healthier-for-you/photostory/98935923.cms"
              >
                Read More
              </a>
            </p>
          </div>
        </div>

        <div className="mt-3"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog_food;
