// AboutUs.js

import React from 'react';
// import First from '../img/first.jpeg';

const Try = ({ email, aboutUs, phone, website, name, img }) => {
  return (
    <div className="about-us">
      {img && <img src={img} className='w-100' />}

      <p className="d-flex flex-wrap align-items-center">
        <span className="bold" style={{ color: '#474544' }}>
          Email:
        </span>
        <span
          className="ml-2 bold2"
          style={{ cursor: 'pointer', color: '#474544' }}
        >
          {email}
        </span>{' '}
      </p>
      <p className="d-flex flex-wrap align-items-center">
        <span className="bold" style={{ color: '#474544' }}>
          Phone:
        </span>
        <span
          className="ml-2 bold2"
          style={{ cursor: 'pointer', color: '#474544' }}
        >
          {phone}
        </span>{' '}
      </p>
      <p className="d-flex flex-wrap align-items-center">
        <span className="bold" style={{ color: '#474544' }}>
          Website:
        </span>
        <span
          className="ml-2 bold2"
          style={{ cursor: 'pointer', color: '#474544' }}
        >
          {website}
        </span>{' '}
      </p>
      <p className="d-flex flex-wrap align-items-center">
        <span className="bold" style={{ color: '#474544' }}>
          About Us:
        </span>
        <span className=" bold2">{aboutUs}</span>{' '}
      </p>
    </div>
  );
};

export default Try;
