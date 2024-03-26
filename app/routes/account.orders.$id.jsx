import {json, redirect} from '@shopify/remix-oxygen';
import {Link, useLoaderData} from '@remix-run/react';
import {Money, Image, flattenConnection} from '@shopify/hydrogen';

export const meta = ({data}) => {
  return [{title: `Order ${data?.order?.name}`}];
};

export async function loader({params, context}) {
  const {session, storefront} = context;

  if (!params.id) {
    return redirect('/account/orders');
  }

  const orderId = atob(params.id);
  const customerAccessToken = await session.get('customerAccessToken');

  if (!customerAccessToken) {
    return redirect('/account/login');
  }

  const {order} = await storefront.query(CUSTOMER_ORDER_QUERY, {
    variables: {orderId},
  });

  if (!order || !('lineItems' in order)) {
    throw new Response('Order not found', {status: 404});
  }

  const lineItems = flattenConnection(order.lineItems);
  const discountApplications = flattenConnection(order.discountApplications);

  const firstDiscount = discountApplications[0]?.value;

  const discountValue =
    firstDiscount?.__typename === 'MoneyV2' && firstDiscount;

  const discountPercentage =
    firstDiscount?.__typename === 'PricingPercentageValue' &&
    firstDiscount?.percentage;

  return json({
    order,
    lineItems,
    discountValue,
    discountPercentage,
  });
}

export default function OrderRoute() {
  const {order, lineItems, discountValue, discountPercentage} = useLoaderData();
  return (
    <div className="account-order container">
      <h2>Order {order.name}</h2>
      <p>Placed on {new Date(order.processedAt).toDateString()}</p>
      <br />
      <div className="d-flex justify-content-between flex-wrap">
        <table>
          {/* <tr className='row'>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr> */}

          <tbody>
            {lineItems.map((lineItem, lineItemIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <OrderLineRow key={lineItemIndex} lineItem={lineItem} />
            ))}
          </tbody>
          <tfoot>
            {((discountValue && discountValue.amount) ||
              discountPercentage) && (
              <tr>
                <th scope="row" colSpan={3}>
                  <p>Discounts</p>
                </th>
                <th scope="row">
                  <p>Discounts</p>
                </th>
                <td>
                  {discountPercentage ? (
                    <span>-{discountPercentage}% OFF</span>
                  ) : (
                    discountValue && <Money data={discountValue} />
                  )}
                </td>
              </tr>
            )}
            <tr>
              {/* <th scope="row" colSpan={3}>
                <p>Subtotal</p>
              </th> */}
              <th scope="row">
                <p>Subtotal</p>
              </th>
              <td>
                <Money data={order.subtotalPriceV2} />
              </td>
            </tr>
            <tr>
              {/* <th scope="row" colSpan={3}>
                Tax
              </th> */}
              <th scope="row">
                <p>Tax</p>
              </th>
              <td>
                <Money data={order.totalTaxV2} />
              </td>
            </tr>
            <tr>
              {/* <th scope="row" colSpan={3}>
                Total
              </th> */}
              <th scope="row" className="ml-2">
                <p>Total</p>
              </th>
              <td>
                <Money data={order.totalPriceV2} />
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="">
          <h3>Shipping Address</h3>
          {order?.shippingAddress ? (
            <address>
              <p>
                {order.shippingAddress.firstName &&
                  order.shippingAddress.firstName + ' '}
                {order.shippingAddress.lastName}
              </p>
              {order?.shippingAddress?.formatted ? (
                order.shippingAddress.formatted.map((line) => (
                  <p key={line}>{line}</p>
                ))
              ) : (
                <></>
              )}
            </address>
          ) : (
            <p>No shipping address defined</p>
          )}
          <h3>Status</h3>
          <div>
            <p>{order.fulfillmentStatus}</p>
          </div>
        </div>
      </div>
      <br />
      <p>
        <a target="_blank" href={order.statusUrl} rel="noreferrer">
          View Order Status →
        </a>
      </p>
    </div>
  );
}

function OrderLineRow({lineItem}) {
  return (
    <tr key={lineItem.variant.id} className="row">
      <td className="col-6 col-lg-3 col-md-3 ">
        <div>
          <h4>Product</h4>
          <Link to={`/products/${lineItem.variant.product.handle}`}>
            {lineItem?.variant?.image && (
              <div>
                <Image data={lineItem.variant.image} width={96} height={96} />
              </div>
            )}
          </Link>
          <div>
            <p>{lineItem.title}</p>
            <small>{lineItem.variant.title}</small>
          </div>
        </div>
      </td>
      <td className="col-6 col-lg-3 col-md-3">
        <h4>Price</h4>
        <Money data={lineItem.variant.price} />
      </td>
      <td className="col-6 col-lg-3 col-md-3">
        <h4>Quantity</h4>
        {lineItem.quantity}
      </td>
      <td className="col-6 col-lg-3 col-md-3">
        <h4>Total</h4>
        <Money data={lineItem.discountedTotalPrice} />
      </td>
    </tr>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/Order
const CUSTOMER_ORDER_QUERY = `#graphql
  fragment OrderMoney on MoneyV2 {
    amount
    currencyCode
  }
  fragment AddressFull on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formatted
    id
    lastName
    name
    phone
    province
    provinceCode
    zip
  }
  fragment DiscountApplication on DiscountApplication {
    value {
      __typename
      ... on MoneyV2 {
        ...OrderMoney
      }
      ... on PricingPercentageValue {
        percentage
      }
    }
  }
  fragment OrderLineProductVariant on ProductVariant {
    id
    image {
      altText
      height
      url
      id
      width
    }
    price {
      ...OrderMoney
    }
    product {
      handle
    }
    sku
    title
  }
  fragment OrderLineItemFull on OrderLineItem {
    title
    quantity
    discountAllocations {
      allocatedAmount {
        ...OrderMoney
      }
      discountApplication {
        ...DiscountApplication
      }
    }
    originalTotalPrice {
      ...OrderMoney
    }
    discountedTotalPrice {
      ...OrderMoney
    }
    variant {
      ...OrderLineProductVariant
    }
  }
  fragment Order on Order {
    id
    name
    orderNumber
    statusUrl
    processedAt
    fulfillmentStatus
    totalTaxV2 {
      ...OrderMoney
    }
    totalPriceV2 {
      ...OrderMoney
    }
    subtotalPriceV2 {
      ...OrderMoney
    }
    shippingAddress {
      ...AddressFull
    }
    discountApplications(first: 100) {
      nodes {
        ...DiscountApplication
      }
    }
    lineItems(first: 100) {
      nodes {
        ...OrderLineItemFull
      }
    }
  }
  query Order(
    $country: CountryCode
    $language: LanguageCode
    $orderId: ID!
  ) @inContext(country: $country, language: $language) {
    order: node(id: $orderId) {
      ... on Order {
        ...Order
      }
    }
  }
`;
