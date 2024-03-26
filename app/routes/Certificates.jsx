import { AiFillCheckCircle } from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/Footer';
import { useState } from 'react';
import data from './data';
import Try from './Try';
import certificate_emoji from '../img/certificate_emoji.png';
import authenticity from '../img/authenticity3.jpg';
import certificate_img from '../img/certificate_img.webp';

export const meta = () => {
  return [{
    title: 'BuildMyBody | Certificates',
    description: 'Explore our certificates and ensure the authenticity of our products.'
  }];
};

function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('Category1');
  const certificateData = [
    {
      name: 'GLANBIA CERTIFICATE',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/files/Glanbia_Certificate_BuildMyBody.jpg?v=1595962934',
    },
    {
      name: 'MUSCLEPRO NUTRITION CERTIFICATE',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/files/MPN_Authorization_BuildMyBody.jpg?v=1595962932',
    },
    {
      name: 'PEARL INTERNATIONAL CERTIFICATE',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/files/Pearl-International-Authorisation_BuildMyBody.jpg?v=1595962928',
    },
    {
      name: 'MUSCLE HOUSE CERTIFICATE',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0272/0566/4803/files/MHI-cerificate-BuildMyBody.jpg?v=1595963106',
    },
  ];
  const categories = [
    'Kar Enterprises',
    'MusclePro Nutrition(MPN)',
    'Bright Commodities',
    'Pearl International',
    'ARC Distributors',
    'Shree Balaji Overseas',
    'Paradise Nutrition',
    'Unlimited Nutrition',
    'Musclehouse',
    'Molecule Hub',
    'SSNC',
    'AM Lifestyle',
  ];
  const authenticityChecks = [
    'Product should be sealed pack and have a long shelf life.',
    'The importer\'s MRP sticker must be present and display the import date & FSSAI of the importer.',
    'The batch number can be confirmed with the brand itself & from the import also.',
    'If still concerned, get the lab test done.',
  ];

  return (
    <>
      <Navbar />
      <div className="main-div">
        <div className="container-fluid">
          <h1 className="text ml-0 ml-lg-5 ml-md-5 certificate-heading">Certificates</h1>
          <div className="row">
            <img src={certificate_img} className="w-100 p-1 p-lg-5 p-md-3" alt="Certificates" />
          </div>
          <div className="row">
            <div className="col">
              <p className="text-center certificate-heading2" style={{ color: '#474544' }}>
                View Certificates
              </p>
            </div>
          </div>
          <div className="row">
            {certificateData.map((certificate, index) => (
              <div key={index} className="col-md-6 col-lg-3 ">
                <a href={certificate.imageUrl} target="_blank">
                  <div className="certificate-card">
                    <p className="text-center mt-4">
                      <img src={certificate_emoji} className="w-25" alt="Certificate Emoji" />
                    </p>
                  </div>
                </a>
                <p
                  className="text-center mb-2 mt-3 certificate-card-text"
                  style={{ color: '#474544' }}
                >
                  <a
                    href={certificate.imageUrl}
                    target="_blank"
                    className="  "
                    style={{ color: '#474544' }}
                  >
                    {certificate.name}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <h2 className="text ml-0 ml-lg-5 ml-md-5 certificate-heading2" style={{ color: '#474544' }}>
                AUTHENTICITY DELIVERED
                <hr className="mt-0 certificate-hr" />
              </h2>
              <p className="ml-0 ml-lg-5 ml-md-5 certificate-auth-text" style={{ color: '#474544' }}>
                About half of the supplements sold in India are suspect - they
                are either parallel imports or fake. Fake supplements may
                contain banned substances, such as steroids, which may cause
                permanent damage to your body.
              </p>
              <br />
              <p className="ml-0 ml-lg-5 ml-md-5 certificate-auth-text" style={{ color: '#474544' }}>
                At BuildMyBody, we strive to provide 100% authentic products to
                our customers by maintaining tight quality control during
                sourcing and distribution of supplements. We also offer a 7-day
                return policy to our customers, in case you are not satisfied
                with the product quality.
              </p>
            </div>
            <div className="col text-center">
              <img src={authenticity} className=" mt-5 certificate-auth-img" alt="Authenticity" />
            </div>
          </div>
          <div className="row">
            <div className="col ml-0 ml-lg-5 ml-md-5 mt-5">
              <h2 className="certificate-heading2" style={{ color: '#474544' }}>
                How to check if the product is genuine and of good quality?
                <hr className="mt-0 certificate-hr" />
              </h2>
              {authenticityChecks.map((check, index) => (
                <p key={index} className="d-flex certificate-auth-text2" style={{ color: '#474544' }}>
                  <AiFillCheckCircle className="mt-1 certificate-img" />
                  {check}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 d-none d-md-flex flex-column mt-5">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(`Category${index + 1}`)}
                  className={`p-2 certi-btn ${selectedCategory === `Category${index + 1}` ? 'selected' : ''}`}
                  style={{
                    border: '1px solid #ccc',
                    background: 'white',
                    color: '#474544',
                    cursor: 'pointer',
                  }}
                >
                  <p className="text-left">{category}</p>
                </button>
              ))}
            </div>
            <div className="d-md-none mt-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-control certi-btn w-100"
              >
                {categories.map((category, index) => (
                  <option key={index} value={`Category${index + 1}`}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-8 col-lg-8  mt-5">
              {data
                .filter(
                  (item) =>
                    selectedCategory === 'All' ||
                    item.category === selectedCategory,
                )
                .map((item, index) => (
                  <Try
                    key={index}
                    img={item.img}
                    email={item.email}
                    aboutUs={item.aboutUs}
                    name={item.name}
                    website={item.website}
                    phone={item.phone}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Certificates;
