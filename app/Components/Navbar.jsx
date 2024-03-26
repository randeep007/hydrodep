import React, { useState } from 'react';
import { Link, NavLink } from '@remix-run/react';
import on from '../img/on.png';
import mt from '../img/mt.jpg';
import uni from '../img/uni.jpg';
import logo_replace from '../img/logo_replace.png';
import cl from '../img/cl.jpg';
import whey from '../img/whey.png';
import gainer from '../img/gainer.png';
import workout from '../img/workout.png';
import pre from '../img/pre.png';
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { CiBarcode } from 'react-icons/ci';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/hamburgers.css';

import { GiBodyBalance } from 'react-icons/gi';
const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);

  const handleFeaturesClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSubMenuLeave = () => {
    if (!isNavbarCollapsed) {
      setSelectedCategory(null);
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const iconLinks = [
    {
      to: '/search',
      icon: <BsSearch size={20} />,
    },
    {
      to: '/cart',
      icon: <FiShoppingCart size={20} />,
    },
    {
      to: '/account',
      icon: <RiAccountCircleLine size={25} />,
    },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  nav-flex"
        style={{ background: 'black' }}
      >
        <div className="d-flex d-md-flex d-lg-none">
          {iconLinks.map((icon, index) => (
            <div key={index} className={`icon-search ${index !== 0 ? 'ml-3' : ''}`}>
              <li>
                <NavLink to={icon.to}>
                  {React.cloneElement(icon.icon, { className: 'text-white' })}
                </NavLink>
              </li>
            </div>
          ))}
        </div>


        <NavLink
          className="navbar-brand ml-lg-4 center-img d-none d-lg-block col justify-content-start"
          to="/"
        >
          <img className="logo_img w-80 " src={logo_replace} alt="BuildMyBody" />
        </NavLink>

        <NavLink
          className="navbar-brand replace-img d-flex justify-content-center d-lg-none ml-0 ml-lg-5 ml-md-5 ml-sm-5"
          to="/"
        >
          <img className=" replace-img-width " src={logo_replace} alt="BuildMyBody" />
        </NavLink>

        <button
          className="navbar-toggler text-light mt-2 mt-lg-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavbarToggle}
        >
          {isNavOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>

        <div
          className={`collapse navbar-collapse mx-3 mx-lg-0    ${isNavbarCollapsed ? 'show' : ''
            }`}
          id="navbarNav"
        >
          <ul
            className="navbar-nav ml-auto mr-auto col d-flex justify-content-center"
            style={{ gap: '.8rem' }}
          >
            <li className="nav-item">
              <NavLink
                className={'nav-link active text-light'}
                to="/"
                style={{ fontSize: '1rem' }}
              >
                Home
              </NavLink>
            </li>
            <div
              className="dropdown show "
              style={{ marginBottom: '0', marginRight: '0' }}
            >
              <Link
                className=" dropdown-toggle nav-link"
                style={{
                  background: 'none',
                  color: 'white',

                  fontWeight: '400',
                  fontSize: '1rem',
                }}
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All Products
              </Link>


              <div
                className="dropdown-menu drop-custom "
                aria-labelledby="dropdownMenuLink"
              >
                <div className="row">
                  <div className="col-lg-12 col-md-6 d-flex justify-content-around nav-product">
                    <Link className="" to="/products/whey-protien">
                      <div className="d-flex flex-lg-column flex-md-column align-items-center ">
                        <img
                          src={whey}
                          alt="Whey Protien"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                          className="mt-2 text-center text-dark"
                        >
                          Whey Protein
                        </span>
                      </div>
                    </Link>
                    <Link to="/products/gainers" className="">
                      <div className="d-flex flex-lg-column flex-md-column align-items-center ml-lg-5 ">
                        <img
                          src={gainer}
                          alt="Gainers"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                          className="mt-2 text-center text-dark"
                        >
                          Mass Gainer
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-12 col-md-6 d-flex mt-lg-2 justify-content-around nav-product">
                    <Link to="/products/pre-post-workout" className="  ">
                      <div className="d-flex flex-lg-column flex-md-column align-items-center  ">
                        <img
                          src={pre}
                          alt="Pre/Post Workout"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          className="text-center mt-2 text-dark"
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                        >
                          Pre/Post Workout
                        </span>
                      </div>
                    </Link>
                    <Link to="/products/workout-essentials" className="  ">
                      <div className="d-flex flex-lg-column flex-md-column align-items-center ml-lg-5">
                        <img
                          src={workout}
                          alt="Workout Essentials"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          className="text-center mt-2 text-dark"
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                        >
                          Workout Essentials
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-12 mt-4 mb-2 text-center">
                    <NavLink to={'/products/all'} id="shop-nav-btn2">
                      <div className="btn w-50 shop-nav-btn ">Shop All</div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item">
              <NavLink
                className={'nav-link active text-light'}
                style={{ fontSize: '1rem' }}
                to="/blogs/news"
              >
                Blogs
              </NavLink>
            </li>
            <div
              className="dropdown show "
              style={{ marginBottom: '0', marginRight: '0' }}
            >
              <Link
                className=" dropdown-toggle nav-link"
                style={{
                  background: 'none',
                  color: 'white',

                  fontWeight: '400',
                  fontSize: '1rem',
                }}
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Store
              </Link>
              <div
                className="dropdown-menu drop-custom"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="row">
                  <div className="col-lg-12 col-md-6 d-flex justify-content-around">
                    <Link to="/products/on-nutrition" className="  ">
                      <div className="d-flex flex-column align-items-center ">
                        <img
                          src={on}
                          alt="On Nutrition"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                          className="mt-2 text-center text-dark"
                        >
                          {' '}
                          ON Nutrition
                        </span>
                      </div>
                    </Link>
                    <Link to="/products/muscletech" className="  ">
                      <div className="d-flex flex-column align-items-center ml-lg-5 ">
                        <img
                          src={mt}
                          alt="MuscleTech"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                          className="mt-2 text-center text-dark"
                        >
                          MuscleTech
                        </span>
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-12 col-md-6 d-flex mt-lg-2 justify-content-around">
                    <Link to="/products/universal" className="  ">
                      <div className="d-flex flex-column align-items-center  ">
                        <img
                          src={uni}
                          alt="Universal"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          className="text-center mt-2 text-dark"
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                        >
                          Universal
                        </span>
                      </div>
                    </Link>
                    <Link to="/products/cellucor" className="  ">
                      <div className="d-flex flex-column align-items-center ml-lg-5">
                        <img
                          src={cl}
                          alt="Cellucor"
                          style={{
                            width: '5rem',
                            border: '1px solid transparent',
                            borderRadius: '62px',
                          }}
                        />
                        <span
                          className="text-center mt-2 text-dark"
                          style={{ fontWeight: 'bold', fontSize: '1rem' }}
                        >
                          Cellucor
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-12 mt-4 mb-2 text-center">
                    <NavLink to={'/products/all'} id="shop-nav-btn2">
                      <div className="btn w-50 shop-nav-btn">Shop All</div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle nav-link "
                  style={{
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Authenticity
                </button>
                <div
                  className="dropdown-menu padding-dropdown"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className={' active text-dark dropdown-item d-flex '}
                    to="/Authenticity"
                    style={{ fontSize: '1rem', background: 'none' }}
                  >
                    Authenticate Product
                    <span className="ml-0 ml-lg-2 ml-md-2">
                      <CiBarcode />
                    </span>
                  </NavLink>
                  <NavLink
                    className={' active text-dark dropdown-item'}
                    to="/certificates"
                    style={{ fontSize: '1rem', background: 'none' }}
                  >
                    Certificates
                  </NavLink>

                  {/* <a className="dropdown-item" href="#">Something else here</a> */}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                className={'nav-link active text-light'}
                to="/contact"
                style={{ fontSize: '1rem' }}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={'nav-link active text-light'}
                to="/bmi"
                style={{ fontSize: '1rem' }}
              >
                BMI
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'nav-link active text-light'}
                to="/aboutus"
                style={{ fontSize: '1rem' }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav nav-icon  ml-auto col d-none d-lg-flex justify-content-end">
          <div className="d-flex" >
            <div className="icon-search">
              <li>
                <NavLink to="/search">
                  <BsSearch size={25} />
                </NavLink>
              </li>
            </div>
            <div className="icon-cart ml-lg-3 ml-md-4 ml-sm-5 ml-5">
              <li>
                <NavLink to="/cart">
                  <FiShoppingCart size={25} />
                </NavLink>
              </li>
            </div>
            <div className="icon-cart ml-lg-3 ml-md-4 ml-sm-5 ml-5">
              <li>
                <NavLink
                  to="/account"
                  className={'border border-light p-2'}
                  id="acc-icon"
                >
                  Account
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </nav>

      <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
        <h6
          className="text-center font-weight-bolder"
          style={{ paddingTop: '7px', paddingBottom: '4px', fontSize: '17px' }}
        >
          {' '}
          <GiBodyBalance size={30} style={{ color: '#ff2828' }} /> Elevate your
          Fitness Journey with
          <span style={{ color: '#ff2828' }}>&nbsp; BuildMyBody</span>
        </h6>
      </div>
    </>
  );
};

export default Navbar;
