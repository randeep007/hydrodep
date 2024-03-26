import React, { useState } from 'react';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { Link } from '@remix-run/react';
import { CartForm } from '@shopify/hydrogen';
import { flattenConnection, Image, Money } from '@shopify/hydrogen-react';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowDown } from 'react-icons/io';
// import ClipboardJS from 'clipboard';
import { IoClipboardOutline } from 'react-icons/io5';

export const meta = () => {
  return [{ title: `BuildMyBody|Cart` }];
};

export function CartLineItems({ linesObj }) {
  const lines = flattenConnection(linesObj);
  return (
    <div className="space-y-8">
      {lines.map((line) => {
        return <LineItem key={line.id} lineItem={line} />;
      })}
    </div>
  );
}

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [copied, setCopied] = useState([false, false]); // Separate state for each accordion section

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setCopied((prevCopied) => {
      const newCopied = [...prevCopied];
      newCopied[index] = false; // Reset copied state when accordion is clicked
      return newCopied;
    });
  };

  const handleCopyToClipboard = (text, index) => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    setCopied((prevCopied) => {
      const newCopied = [...prevCopied];
      newCopied[index] = true;
      setTimeout(() => {
        newCopied[index] = false; // Reset copied state after 2 seconds
        setCopied([...newCopied]);
      }, 2000);
      return newCopied;
    });
  };


  return (
    <div>
      <p className='pt-4' style={{ color: "ff2828" }}>Note: Copy to apply these offers at <span className='font-weight-bolder'>Checkout Page</span> above (Click To Copy) .</p>
      {/* First Accordion */}
      <div className="section-acc-1">

        <button
          className={`accordion ${activeIndex === 0 ? 'active-acc' : ''}`}
          onClick={() => {
            handleAccordionClick(0);
            handleCopyToClipboard('Protein30', 0); // Pass the index
          }}
        >
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <MdOutlineLocalOffer size={20} />
                <span className="font-weight-bolder mx-1">Protein30:</span> &nbsp;30% off
                on All Protein products sitewise

              </div>
              <IoIosArrowDown size={30}
                className={`arrow-icon mx-2 ${activeIndex === 0 ? 'rotate' : ''}`}
              />
              <IoClipboardOutline size={30}
                className={`clipboard-icon ${copied ? 'copied' : ''}`}
              />
            </div>

            <div className='mt-1'>
              {copied[0] && <span className="copied-message">Copied!</span>}
            </div>
          </div>
        </button>
        <div
          className="panel"
          style={{
            display: activeIndex === 0 ? 'block' : 'none',
          }}
        >
          <p className="p-2">
            Terms and conditions are as follows: Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet aut odit minus pariatur sint
            fugit placeat cupiditate. Explicabo, porro non!
          </p>
        </div>
      </div>

      {/* Second Accordion */}
      <div className="section-acc-2">

        <button
          className={`accordion ${activeIndex === 1 ? 'active-acc' : ''}`}
          onClick={() => {
            handleAccordionClick(1);
            handleCopyToClipboard('Offer20', 1); // Pass the index
          }}
        >
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-between align-items-center'>
              <div>
                <MdOutlineLocalOffer size={20} />
                <span className="font-weight-bolder mx-1">Offer20:</span> &nbsp;Description for the second accordion
              </div>
              <IoIosArrowDown size={30}
                className={`arrow-icon mx-2 ${activeIndex === 1 ? 'rotate' : ''}`}
              />
              <IoClipboardOutline size={30}
                className={`clipboard-icon ${copied ? 'copied' : ''}`}
              />
            </div>
            <div className='mt-1'>
              {copied[1] && <span className="copied-message">Copied!</span>}
            </div>
          </div>
        </button>
        <div
          className="panel"
          style={{
            display: activeIndex === 1 ? 'block' : 'none',
          }}
        >
          <p className="p-2">
            Terms and conditions for the second accordion: Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eveniet aut odit minus pariatur sint
            fugit placeat cupiditate. Explicabo, porro non!
          </p>
        </div>
      </div>
    </div>
  );
};


const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3, // Show 3 slides on large screens
  arrows: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992, // Medium screens
      settings: {
        slidesToShow: 3, // Show 2 slides on medium screens
      },
    },
    {
      breakpoint: 576, // Small screens
      settings: {
        slidesToShow: 2, // Show 1 slide on small screens
      },
    },
  ],
};

function ItemRemoveButton({ lineIds }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{ lineIds }}
    >
      <button
        id="remove-product"
        className="text-dark mt-4"
        style={{ background: 'white' }}
        type="submit"
      >
        <p>Remove</p>
      </button>
    </CartForm>
  );
}

function LineItem({ lineItem }) {
  const { merchandise, quantity } = lineItem;
  return (
    <>
      <div className="all-info  mt-5 row">
        <div className=" col-6 mt-0 mt-lg-2 mt-md-2">
          <Link to={`/product/${merchandise.product.handle}`} className="">
            <Image data={merchandise.image} className="cart-item-img" />
          </Link>
        </div>
        {/* PROTIEN INFO */}
        <div className=" col-6 ">
          <div className="protien-info mt-5 mt-md-0 mt-lg-0">
            <Link
              to={`/product/${merchandise.product.handle}`}
              className="text-start "
              id="protien-name"
            >
              {merchandise.product.title}
              <br />
            </Link>
            {merchandise.selectedOptions &&
              merchandise.selectedOptions.map((option) => (
                <div>
                  ({option.name}: {option.value})
                </div>
              ))}
            <Money className="price-cart" data={lineItem.cost.totalAmount} />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 ">
          <div className="d-flex justify-content-left justify-content-lg-center justify-content-md-center ">
            <div
              className="d-flex p-2 mt-4 flex-row-reverse"
              style={{ border: '1px solid black', borderRadius: '4px' }}
            >
              <div>
                <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesUpdate}
                  inputs={{
                    lines: [
                      {
                        id: lineItem.id,
                        merchandiseId: merchandise.id,
                        quantity: quantity + 1,
                      },
                    ],
                  }}
                >
                  <button
                    style={{ border: 'none', background: 'none' }}
                    className="ml-4"
                  >
                    {' '}
                    <FaPlus />
                  </button>
                </CartForm>
              </div>

              <div className="">
                <span className="num">{quantity}</span>
              </div>
              <div>
                <CartForm
                  route="/cart"
                  action={CartForm.ACTIONS.LinesUpdate}
                  inputs={{
                    lines: [
                      {
                        id: lineItem.id,
                        merchandiseId: merchandise.id,
                        quantity: quantity - 1,
                      },
                    ],
                  }}
                >
                  <button
                    style={{ border: 'none', background: 'none' }}
                    className="mr-4"
                  >
                    {' '}
                    <FaMinus />
                  </button>
                </CartForm>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <div className=" d-flex">
              <ItemRemoveButton lineIds={[lineItem.id]} className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function CartSummary({ cost, checkoutUrl, collection }) {
  if (!checkoutUrl) return null;
  return (
    <>
      <div className="card-1 px-4 py-2 mt-2">
        <p className="text-center mt-2" id="order">
          My Order Summary
        </p>
        <div
          className="text-start d-flex justify-content-between mt-4"
          id="mrp1"
        >
          Subtotal
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </div>
        <div
          className="text-start d-flex justify-content-between mt-4"
          id="mrp2"
        >
          Total{' '}
          {cost?.totalAmount?.amount ? (
            <Money data={cost?.totalAmount} className="text-success" />
          ) : (
            '-'
          )}
        </div>
        <hr className="cart-hr bg-dark w-100 mt-3 " />
        <Link
          to={checkoutUrl}
          className="btn w-100 checkout-button"
          target="_blank"
          rel=" noopener noreferrer "
        >
          Checkout
        </Link>
        {/* <hr className="cart-hr bg-dark w-100 mt-3 " /> */}
        <Accordion />
      </div>
    </>
  );
}
