import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import blog1 from '../../img/blog-1.jpg';
import blog6 from '../../img/blog-6.jpg';
import blog7 from '../../img/blog-7.jpg';

import './Blog.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Blog_healthy() {
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
            <img src={blog6} className="img-fluid login-img " />
          </div>
          <div className=" col-lg-6 col-sm-12 col-md-12">
            <p className="text-center mt-2 blog-name">
              Rice VS Chapati - Which is better?
            </p>
            <p className="text-center mt-5 mr-lg-2">
              Both rice and chapati are a source of carbohydrates in any typical
              Indian diet. People in certain regions prefer one over the other
              based on a number of reasons including availability and
              accessibility to either of them. But without getting into the
              specifics, let’s understand what makes more sense for you to
              consume. Broadly speaking, the energy...
            </p>
            <p className="text-center">
              {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light "> Read More</button> */}
              <a
                className="btn font-weight-bold mt-4 blog-btn text-light"
                target="_blank"
                href="         https://timesofindia.indiatimes.com/life-style/health-fitness/diet/rice-vs-roti-for-weight-loss-whats-better-for-dinner/photostory/77723187.cms?picid=77723283"
              >
                Read More
              </a>
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block ">
            <img src={blog6} className="img-fluid login-img" />
          </div>
        </div>

        <div className="row no-gutters mt-5">
          <div className="col-lg-6 col-sm-12 col-md-12">
            <img src={blog7} className="img-fluid login-img" />
          </div>
          <div className="col  ">
            <p className="text-center mt-2 blog-name">
              Breaking The Myths About Breakfast One At A Time
            </p>
            <p className="text-center mt-5 ml-lg-2">
              This question might have struck your head sometime of the other.
              In newspaper and magazine health columns, expert seem to talk
              about the importance of breakfast more than anything else. But is
              that true? It is and it is not. Let’s try to understand this
              complex situation by breaking the myths about breakfast one at a
              time.
            </p>
            <p className="text-center">
              {/* <button type="submit" className="btn font-weight-bold mt-4 blog-btn text-light"> Read More</button> */}
              <a
                className="btn font-weight-bold mt-4 blog-btn text-light"
                target="_blank"
                href=" https://timesofindia.indiatimes.com/life-style/food-news/6-breakfast-myths-you-need-to-stop-believing/photostory/77904634.cms"
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

export default Blog_healthy;
