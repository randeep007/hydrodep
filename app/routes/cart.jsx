import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer/Footer';
import { Link, NavLink, useLoaderData } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';
import { CartForm } from '@shopify/hydrogen';
import { CartLineItems, CartSummary } from '~/Components/Cart';
import { useState } from 'react';
import invariant from 'tiny-invariant';
import { FiShoppingCart } from 'react-icons/fi';

export const meta = () => {
  return [{ title: `BuildMyBody | Cart` }];
};

export async function action({ request, context }) {
  const { cart } = context;

  const formData = await request.formData();
  const { action, inputs } = CartForm.getFormInput(formData);

  let result;

  switch (action) {
    case CartForm.ACTIONS.LinesAdd:
      result = await cart.addLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesUpdate:
      result = await cart.updateLines(inputs.lines);
      break;
    case CartForm.ACTIONS.LinesRemove:
      result = await cart.removeLines(inputs.lineIds);
      break;
    default:
      invariant(false, `${action} cart action is not defined`);
  }

  // The Cart ID might change after each mutation, so update it each time.
  const headers = cart.setCartId(result.cart.id);

  return json(result, { status: 200, headers });
}

const COLLECTION_QUERY = `{
  collection(handle: "all") {
    id
    title
    products(first: 10) {
      nodes {
          id
          title
          publishedAt
          descriptionHtml
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
        }}
    }}
}`;

export async function loader({ context }) {
  const { cart } = context;
  const { collection } = await context.storefront.query(COLLECTION_QUERY);
  return json({ cart: await cart.get(), collection });
}

const Cart = () => {
  const { cart, collection } = useLoaderData();
  const [btnClass, setBtnClass] = useState('transparent');
  function toggleColor() {
    // const [btnClass, setBtnClass] = useState('blue-color');
    if (btnClass === 'transparent') {
      setBtnClass('red-color');
    } else {
      setBtnClass('transparent');
    }
  }
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert('Please add items to cart');
      setNum(0);
    }
  };

  const removeItem = () => { };

  return (
    <>
      <Navbar />
      <section className="main-div">
        <div className="container-fluid">
          {cart?.totalQuantity > 0 ? (
            <div className="row ">
              <div
                className="col h-100 col-12 col-sm-12 col-md-12 col-lg-7"
                id="leftside"
              >
                {cart?.totalQuantity > 0 && (
                  <CartLineItems linesObj={cart.lines} />
                )}
              </div>

              <div className="h-100 col-12 col-sm-12 col-md-12 col-lg-5 order-summary mt-1 mt-md-3 ">
                <CartSummary
                  cost={cart?.cost || 0}
                  checkoutUrl={cart?.checkoutUrl || ''}
                  collection={collection}
                />
              </div>
            </div>
          ) : (
            <div className="row d-flex justify-content-center">
              <div className="col-12 d-flex justify-content-center">
                <FiShoppingCart size={25} />
              </div>
              <div className="col-12 mt-5">
                <h4 className=" px-3 text-center">
                  {' '}
                  <span className="text-center" style={{ fontWeight: 'bold' }}>
                    Your Cart is <span style={{ color: '#ff2828' }}>Empty!</span>{' '}
                  </span>{' '}
                </h4>
              </div>
              <div className="col-12 text-center mt-3">
                <span style={{ fontSize: '1.3rem' }} className="">
                  Please add some items to your cart.
                </span>
              </div>
              <div className="col-12 text-center mt-3 mb-3">
                <NavLink to="/products/all" className="btn blog-btn">
                  RETURN TO SHOP
                </NavLink>
              </div>
            </div>
          )}
        </div>
        {/* end of container */}
      </section>
      <Footer />
    </>
  );
};

export default Cart;
