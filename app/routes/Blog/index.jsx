import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import blog1 from '../../img/blog-1.jpg';
import blog2 from '../../img/blog-2.jpg';
import blog3 from '../../img/blog-3.jpg';
import blog4 from '../../img/blog-4.jpg';

function Blog() {
  const navigate = useNavigate();

  const navigateToBlog2 = () => {
    navigate('/blog_2');
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
    <>
      <Navbar />
      <div className="main-div m-0 p-0 blog-main pt-5">
        <div className="container">
          <div
            className="d-flex justify-content-center mb-5"
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <h1
              className="font-weight-bold custom-heading3"
              style={{ color: '#ff2828' }}
            >
              <em>Blogs</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="row no-gutters mt-5 blog-margin">
            <div className="col-lg-6 col-sm-12 col-md-12 ">
              <img src={blog1} className="img-fluid login-img rounded" />
            </div>

            <div className="col  ">
              <p className="text-center mt-2 blog-name">
                Fitness Hacks During Navratri:
              </p>
              <p className="text-center pt-lg-0 pb-lg-0 pl-lg-4 pr-lg-4 mt-5">
                Navratri time is here. A great opportunity to detox your body.
                But there are some things you should keep in mind while fasting
                - to balance out the pros and cons. Today we'll learn them very
                quickly -
              </p>
              <p className="text-center">
                <a
                  className="btn font-weight-bold mt-4 blog-btn"
                  target="_blank"
                  href="https://m.timesofindia.com/life-style/food-news/5-tips-that-will-make-navratri-fasting-healthier-for-you/photostory/98935923.cms"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className="row no-gutters mt-5">
            <div className="col-md-12 d-lg-none d-md-block ">
              <img src={blog2} className="img-fluid login-img rounded" />
            </div>
            <div className=" col-lg-6 col-sm-12 col-md-12">
              <p className="text-center mt-2 blog-name">
                Hydration is the key:
              </p>
              <p className="text-center mt-5 mr-lg-2">
                Fast or no fast, water intake is super important for your body.
                During fasting, the body's stored energy resources are used.
                That's why hydration becomes even more necessary. With fruit
                intake, water needs can be managed but drinking it is always
                better, to be on the safer side. Fruit juice is a good middle
                way between this water and fruit dilemma. Try that as an
                experiment.
              </p>
              <p className="text-center">
                <a
                  className="btn font-weight-bold mt-4 blog-btn "
                  target="_blank"
                  href="https://familydoctor.org/athletes-the-importance-of-good-hydration/"
                >
                  Read More
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block ">
              <img src={blog2} className="img-fluid login-img rounded" />
            </div>
          </div>

          <div className="row no-gutters mt-5">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <img src={blog3} className="img-fluid login-img rounded" />
            </div>
            <div className="col  ">
              <p className="text-center mt-2 blog-name">
                Avoid fried, oily and sugary stuff:
              </p>
              <p className="text-center mt-5 ml-lg-2">
                Potatoes might become your friend during Navratri time. There
                are so many chips available in the market made of things other
                than just potatoes. But they're not a healthy option. Too much
                oil in them. Plus, sugar anyways is empty calories. This doesn't
                mean you can't have sweets. Just make sure to have them in
                moderation. Not to mention, binging will ruin the purpose of
                fast. Remember you're fasting for detoxing and giving your body
                a break.
              </p>
              <p className="text-center">
                <a
                  className="btn font-weight-bold mt-4 blog-btn"
                  target="_blank"
                  href=" https://www.healthline.com/nutrition/greasy-food#5.-May-raise-your-risk-of-diabetes"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div className="row no-gutters mt-5">
            <div className="col-md-12 d-lg-none d-md-block ">
              <img src={blog4} className="img-fluid login-img rounded" />
            </div>
            <div className=" col-lg-6 col-sm-12 col-md-12">
              <p className="text-center mt-2 blog-name">
                How to increase lifting capacity?
              </p>
              <p className="text-center mt-5 mr-lg-2">
                Lifting capacity is defined as the amount of weight you can
                lift. Now, this measurement can be taken in the span of an hour
                or a week. But in general, high lifting capacity is often
                equated with your strength because squatting 100 kilos for 5
                reps is equivalent to 10 reps of 50 kilos. But who’s stronger?
              </p>
              <p className="text-center">
                <a
                  className="btn font-weight-bold mt-4 blog-btn"
                  target="_blank"
                  href="  https://www.wikihow.com/Lift-Heavier-Weights"
                >
                  Read More
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block ">
              <img src={blog4} className="img-fluid login-img rounded" />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center blog-next-btn-flex mt-5">
              <p className="text-center">
                {' '}
                <button
                  type="submit"
                  className="btn font-weight-bold w-100 blog-next-btn mt-3"
                >
                  {' '}
                  <AiOutlineArrowLeft />
                </button>
              </p>
              <p className="text-center">
                <button
                  type="submit"
                  className="btn font-weight-bold mt-3 ml-2 blog-next-btn"
                >
                  {' '}
                  1
                </button>
              </p>
              <p className="text-center">
                <button
                  type="submit"
                  onClick={navigateToBlog2}
                  className="btn font-weight-bold mt-3 mr-2 blog-next-btn"
                >
                  {' '}
                  2
                </button>
              </p>
              <p className="text-center">
                <button
                  type="submit"
                  onClick={navigateToBlog2}
                  className="btn font-weight-bold  w-100 blog-next-btn mt-3 "
                >
                  {' '}
                  <AiOutlineArrowRight className="" />
                </button>
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
