import { Link } from '@remix-run/react';
import { NavLink } from '@remix-run/react';
import imgbrand from '../../img/logo.png';

import { FooterConstants } from './FooterConstants';


const Footer = () => {
  return (
    <>
      <div>
        <div className="container" >
          <div className="footer-top-section row">
            {FooterConstants.items.map((item, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-3">
                <p style={{ color: item.color }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-row">
        <div className="container">
          <p className=' pt-4 pb-2 d-flex flex-lg-row flex-column justify-content-center align-items-center help-size text-center' style={{ fontWeight: 'bold' }}>Need help? Call our support team at <span className='ml-2'>+91 9494 979191</span> </p>
        </div>
        <div className="container-fluid px-5">
          <div className="row ">
            <div className="col-lg-4 col-md-6  ">
              <div className=" w-75 ">
                <div className="footer-details company-footer1">
                  <NavLink className="" to="/">
                    <img className="w-75 " src={imgbrand} alt="BuildMyBody" />
                  </NavLink>
                  {/* <img className="w-75" src={logo} alt="" /> */}
                  <p className="mt-3">
                    You are browsing India's one of the most recommended one stop shops for health care and fitness products. While shopping with us here you can always be sure of 100% genuine and authentic products.
                  </p>
                  <div className="footer-social-icons">
                    {FooterConstants.socialIcons.map((social, index) => (
                      <Link key={index} to={social.link} target="_blank">
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  footer-details  mt-4 mt-lg-5 mt-md-5">
              <div className="customer-footer mt-0 mt-lg-5 mt-md-4">
                <h6>CUSTOMER SERVICE</h6>
                {FooterConstants.links.map((link, index) => (
                  <Link key={index} to={link.to}>
                    <p>{link.text}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-details mt-4 mt-lg-5 mt-md-0">
              <div className="customer-footer mt-0 mt-lg-5 mt-md-5">
                <h6>PRODUCTS</h6>

                {FooterConstants.productLinks.map((link, index) => (
                  <Link key={index} to={link.to}>
                    <p>{link.text}</p>
                  </Link>
                ))}

              </div>
            </div>

            <div className="col-lg-3 col-md-6  footer-details mt-4  mt-lg-5 mt-md-0">
              <div className="  mt-0 mt-lg-5 mt-md-5">
                <h6 className=" ">COMPANY</h6>
                {FooterConstants.footerLinks.map((link, index) => (
                  <Link key={index} to={link.to}>
                    <p>{link.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-5">
          <div className="row mt-3">
            <div className="col">
              <ul className='d-flex flex-wrap' style={{ gap: '.8rem' }}>
                {FooterConstants.paymentMethods.map((method, index) => (
                  <li key={index}>
                    <img src={method.src} alt={method.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid px-5 mt-4">
          <div className="row footer-bg pb-5">

            <div className="col-sm-6 custom-footer2  ">
              <p>@2024 BuildMyBody. All Rights Reserved</p>
            </div>
            <div className="col footer-end custom-footer flex-wrap">
              {FooterConstants.navLinks.map((link, index) => (
                <Link key={index} to={link.to} className="">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
