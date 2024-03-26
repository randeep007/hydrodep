import { Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';
import { useEffect } from 'react';
import ProductForm from '~/Components/Product/ProductForm';
import discountsvg from '../img/discountsvg.png'


export default function ProductCard({ product }) {
  function calculateDiscountPercentage(mrp, discountedPrice) {
    const discount = ((mrp - discountedPrice) / mrp) * 100;
    return discount.toFixed(2);
  }

  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;
  return (
    <div className="col productCard">
      <Link to={`/product/${product.handle}`} className="">
        <div className="card" style={{ paddingBottom: '0px' }}>
          <div className="card-img-all  mt-3 ">
            <div className='card-container'>
              <Image
                data={product.variants.nodes[0].image}
                alt={product.title}
                className="all-img"
              />{' '}
              <div className='all-discount' >
                <img src={discountsvg} className='w-100' alt="Discount" />
              </div>
              <div className='disc' style={{ position: 'absolute', top: '3px', right: '8px' }} >
                <p className='text-light' style={{ fontWeight: '700', fontSize: '14px' }}>
                  {' '}
                  {Math.floor(calculateDiscountPercentage(
                    product.variants.nodes[0]?.compareAtPrice?.amount || 0,
                    product.variants.nodes[0]?.price?.amount || 0,
                  ))}
                  %
                </p>
              </div>
            </div>
          </div>
          <div className="card-content-all mt-4">
            <h3 className=" text-center" style={{ fontSize: '1.3rem' }}>
              {' '}
              {product.title}
            </h3>
            <p className="card-text mt-3 text-center">
              {isDiscounted && (
                <p>
                  <Money
                    style={{ color: '#ff2828', fontSize: '1.3rem' }}
                    className=""
                    withoutTrailingZeros
                    as="del"
                    data={compareAtPrice}
                  />
                </p>
              )}
              <Money withoutTrailingZeros data={price} style={{ fontSize: '1.4rem' }} />
            </p>
          </div>
        </div>
      </Link>
      <div className="all-btn mt-3 d-flex flex-lg-column pro-clr ">
        <ProductForm variantId={product.variants?.nodes[0].id} />
      </div>
    </div>
  );
}
