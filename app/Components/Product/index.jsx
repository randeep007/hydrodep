import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { ShopPayButton } from '@shopify/hydrogen-react';
import { Image, Money } from '@shopify/hydrogen';
import ProductCarousal from './ProductCarousal';
import ProductOptions from './ProductOptions';
import ProductForm from './ProductForm';
import { Link } from '@remix-run/react';
import discountsvg from '../../img/discountsvg.png'
import ProductConstants from './ProductConstants';

const Product = ({ data }) => {
  const {
    product,
    selectedVariant,
    FeaturedProductsCollection,
    TrendingProductsCollection,
    storeDomain,
    orderable,
  } = data;

  useEffect(() => {
    document.title = `${product.title}`;
  }, [product.title]);

  const [pincode, setPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [deliverable, setDeliverable] = useState(false);
  const checkPincode = async () => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`,
      );
      const data = await response.json();
      if (data && data[0]?.Status === 'Success') {
        const postOfficeData = data[0].PostOffice[0];
        const deliveryStatus = postOfficeData.Deliverystatus;
        if (deliveryStatus === 'Yes') {
          setDeliverable(true);
          setErrorMessage('Deliverable to your location. Order Now!');
        } else {
          setDeliverable(false);
          setErrorMessage('Delivery  available to your location.  Order now!');
        }
      } else {
        setDeliverable(false);
        setErrorMessage('Enter a valid PIN code');
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error fetching data from the API:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const amount = selectedVariant ? selectedVariant.amount : null;
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleDropdownCustom = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <Navbar />
      <section id="products-section">
        <div className="product">
          <div className="container-fluid">
            <div className="row ">
              {/* image column  */}

              <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                <ProductCarousal media={product.media.nodes} />
              </div>


              {/* middle column  */}
              <div className="col-sm-12 col-lg-6 col-md-12 mt-5 " style={{ padding: '0rem 1rem' }}>
                <h2
                  className="text-lg-left text-md-center text-sm-center product-title-size"
                  style={{ fontWeight: '800' }}
                >
                  {product.title}
                </h2>
                <div className="row mt-2 d-flex option-flex">
                  {/* weight/flavour section  */}
                  <div className="col-lg-6 col-md-6 col-12 flex-column">
                    <div>
                      <div className="d-flex" style={{ fontSize: '25px' }}>
                        <p className="title  ">Price:</p>
                        <span>
                          <Money
                            withoutTrailingZeros
                            data={selectedVariant.compareAtPrice}
                            className="ml-2"
                            as="del"
                            style={{ color: '#ff2828' }}
                          />
                        </span>
                      </div>
                      <h2 className="d-flex title flex-wrap ">
                        <div className="d-flex">
                          MRP:
                          <Money
                            withoutTrailingZeros
                            data={selectedVariant.price}
                            className="ml-2"
                            style={{ fontSize: '38px' }}
                          />
                        </div>
                        <div>
                          <div className="ml-1 mt-1 d-flex align-items-center ">
                            <p
                              style={{ color: '#ff2828' }}
                              className="product-btn p-2"
                            >
                              {Math.ceil(
                                ((selectedVariant.compareAtPrice.amount -
                                  selectedVariant.price.amount) /
                                  selectedVariant.compareAtPrice.amount) *
                                100,
                              )}
                              % off
                            </p>
                          </div>
                        </div>
                      </h2>
                    </div>
                    <div className="d-flex width-input mt-3 border border-dark justify-content-between p-1">
                      <div>
                        <button
                          style={{ border: 'none', background: 'none' }}
                          className="ml-4"
                          onClick={() => {
                            setQuantity((prevQty) =>
                              prevQty <= 1 ? 1 : prevQty - 1,
                            );
                          }}
                        >
                          {' '}
                          <FaMinus />
                        </button>
                      </div>
                      <div className="">
                        <span className="num">{quantity}</span>
                      </div>

                      <div>
                        <button
                          style={{ border: 'none', background: 'none' }}
                          className="mr-4"
                          onClick={() => {
                            setQuantity((prevQty) =>
                              prevQty >= 10 ? 10 : prevQty + 1,
                            );
                          }}
                        >
                          {' '}
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 title mt-3 mt-lg-0 mt-md-0">
                    <ProductOptions
                      options={product.options}
                      selectedVariant={selectedVariant}
                    />
                  </div>

                  <div className=" mt-5 ">
                    <div className=" each-product-btn d-flex">
                      <div>
                        <ProductForm
                          variantId={selectedVariant?.id}
                          quantity={quantity}
                        />
                      </div>

                      <div className="ml-0 ml-sm-2 ml-lg-2 ml-md-2 mt-2 mt-sm-0 mt-lg-0 mt-md-0" >

                        {orderable && (

                          <ShopPayButton
                            storeDomain={storeDomain}
                            variantIds={[selectedVariant?.id]}
                            className="custom-buy-now"
                            target="_blank"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <hr className="w-100" />
                  <h4
                    className="mt-5 title font-weight-bolder"
                    style={{ color: '#282828' }}
                  >
                    Check Delivery
                  </h4>
                  <div className="input-group mb-3 m-lg-0 title d-flex flex-column ">
                    <div className="d-flex">
                      <input
                        type="number"
                        className="form-control w-100"
                        placeholder="Enter Pincode"
                        aria-describedby="basic-addon2"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={checkPincode}
                        >
                          Check
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      <p
                        className={`error-message ${deliverable ? 'success' : 'error'
                          }`}
                      >
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>

                {/* featured products section   */}

              </div>
              <div className="container-fluid ">
                {/* <hr /> */}
                <div className="row">
                  <div className="col-lg-10 " id="product-tabs">
                    <ul
                      className="nav nav-tabs mt-4 d-flex justify-content-start justify-content-lg-around justify-content-md-around w-100"
                      style={{ background: 'black' }}
                      id="myTab"
                      role="tablist"
                    >
                      {ProductConstants.tabs.map((tab, index) => (
                        <li className="nav-item" key={index}>
                          <a
                            className={`nav-link ${index === activeTab ? 'active' : ''}`}
                            id={`${tab.id}-tab`}
                            data-toggle="tab"
                            href={`#${tab.href}`}
                            role="tab"
                            aria-controls={tab.href}
                            aria-selected={index === activeTab}
                            onClick={() => handleTabClick(index)}
                          >
                            {tab.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="tab-content mt-3" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="descr-tab"
                        dangerouslySetInnerHTML={{
                          __html: product.descriptionHtml,
                        }}
                      ></div>
                      <div
                        className="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="howto-tab"
                      >
                        <div>
                          {ProductConstants.faqData.map((faq, index) => (
                            <div key={faq.id}>
                              <button
                                onClick={() => toggleDropdownCustom(index)}
                                className="w-100 text-left p-3 mt-4"
                                style={{ border: '1px solid transparent' }}
                              >
                                <span className="ques-product">Question</span>
                                <span data-title="Question" className="ml-5" data-show="">
                                  {faq.question}
                                </span>
                              </button>
                              {openIndex === index && (
                                <div style={{ fontSize: '14px' }}>
                                  <br />
                                  <br />
                                  <span className="answer-product">Answer</span>
                                  <span data-title="Answer" className="" data-show="">
                                    <p className="mt-4">{faq.answer}</p>
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                        {ProductConstants.ReviewText}
                      </div>
                    </div>
                  </div>
                  <div
                    id="third"
                    className="col-lg-2 flex-lg-column mt-0 mt-lg-5 mt-md-5 mt-sm-0 d-flex d-lg-none "
                  >
                    <h4 className="d-flex justify-content-center font-weight-bolder ">
                      <em style={{ fontSize: '2rem' }} className="text-center">
                        FEATURED PRODUCTS
                      </em>
                    </h4>
                    <div className="custom-fl-product d-md-flex flex-lg-column ">
                      {FeaturedProductsCollection.collection.products.nodes.map(
                        (product) => (
                          <>
                            <Link
                              key={product.handle}
                              to={`/product/${product.handle}`}
                              className="d-flex mt-4 flex-column"
                            >
                              <div
                                className="w-100 card-container"
                                style={{ maxWidth: '250px', margin: '0 auto' }}
                              >
                                <Image
                                  data={product.variants.nodes[0].image}
                                  style={{
                                    objectFit: 'contain',
                                    height: '100%',
                                  }}
                                  alt={product.title}
                                  className="single-product-img"
                                />
                                <div className='all-discount' >
                                  <img src={discountsvg} className='w-100' alt="Discount" />
                                </div>
                                <div className="text-light" style={{ position: 'absolute', top: '1px', right: '7px' }}>
                                  <p style={{ fontWeight: '700' }}>
                                    {Math.ceil(
                                      ((product.variants.nodes[0].compareAtPrice
                                        .amount -
                                        product.variants.nodes[0].price.amount) /
                                        product.variants.nodes[0].compareAtPrice
                                          .amount) *
                                      100,
                                    )}
                                    %
                                  </p>
                                </div>
                              </div>
                            </Link>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                              <h6 className="font-weight-bold mt-4  text-center text-dark">
                                {product.title}
                              </h6>
                              <h6 className="mt-3 font-weight-bold  text-center text-dark d-flex align-items-center justify-content-center">
                                {product.variants.nodes[0].compareAtPrice && (
                                  <del className="discount-text">
                                    ₹
                                    {
                                      product.variants.nodes[0].compareAtPrice
                                        .amount
                                    }
                                  </del>
                                )}{' '}
                                <Money
                                  withoutTrailingZeros
                                  data={product.variants?.nodes[0].price}
                                  style={{
                                    color: '#ff2828 !important',
                                    fontSize: '22px',
                                  }}
                                  className="ml-2"
                                />
                              </h6>
                              <div className="text-center each-product-btn">
                                <ProductForm
                                  variantId={product.variants?.nodes[0].id}
                                />
                              </div>
                            </div>
                          </>
                        ),
                      )}
                    </div>
                  </div>
                  <div
                    id="third"
                    className="col-lg-2 flex-lg-column mt-5 mt-lg-4 mt-md-4 mt-sm-2"
                  >
                    <h4 className="d-flex justify-content-center align-items-center font-weight-bolder  text-center">
                      <em style={{ fontSize: '2rem' }}>RELATED PRODUCTS</em>
                    </h4>
                    <div className="custom-fl-product d-md-flex flex-lg-column ">
                      {TrendingProductsCollection.collection.products.nodes.map(
                        (product) => (
                          <>
                            {' '}
                            <Link
                              key={product.handle}
                              to={`/product/${product.handle}`}
                              className="d-flex mt-4 flex-column"
                            >
                              <div
                                className="w-100 card-container"
                                style={{ maxWidth: '250px', margin: '0 auto' }}
                              >
                                <Image
                                  data={product.variants.nodes[0].image}
                                  style={{
                                    objectFit: 'contain',
                                    height: '100%',
                                  }}
                                  className="single-product-img"
                                  alt={product.title}
                                />
                                <div className='all-discount' >
                                  <img src={discountsvg} className='w-100' alt="Discount" />
                                </div>
                                <div className="text-light" style={{ position: 'absolute', top: '2px', right: '5px' }}>
                                  <p style={{ fontWeight: '700' }}>
                                    {Math.ceil(
                                      ((product.variants.nodes[0].compareAtPrice
                                        .amount -
                                        product.variants.nodes[0].price.amount) /
                                        product.variants.nodes[0].compareAtPrice
                                          .amount) *
                                      100,
                                    )}
                                    %
                                  </p>
                                </div>
                              </div>
                            </Link>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                              <p
                                className="font-weight-bold mt-4  text-center text-dark d-flex justify-content-center align-items-center flex-column"
                                style={{ fontSize: '.9rem' }}
                              >
                                {product.title}
                              </p>
                              <h6 className="mt-3 font-weight-bold  text-center text-dark d-flex align-items-center justify-content-center">
                                {product.variants.nodes[0].compareAtPrice && (
                                  <del className="discount-text">
                                    ₹
                                    {
                                      product.variants.nodes[0].compareAtPrice
                                        .amount
                                    }
                                  </del>
                                )}{' '}
                                <Money
                                  withoutTrailingZeros
                                  data={product.variants?.nodes[0].price}
                                  style={{
                                    color: '#ff2828 !important',
                                    fontSize: '22px',
                                  }}
                                  className="ml-2"
                                />
                              </h6>

                              <div className="text-center each-product-btn d-flex justify-content-center align-items-center ">
                                <ProductForm
                                  variantId={product.variants?.nodes[0].id}
                                />
                              </div>
                            </div>
                          </>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Product;
