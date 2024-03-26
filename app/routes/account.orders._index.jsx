import { Link, NavLink, useLoaderData } from '@remix-run/react';
import { Money, Pagination, getPaginationVariables } from '@shopify/hydrogen';
import { json, redirect } from '@shopify/remix-oxygen';

export const meta = () => {
  return [{ title: 'BuildMyBody|Orders' }];
};

export async function loader({ request, context }) {
  const { session, storefront } = context;

  const customerAccessToken = await session.get('customerAccessToken');
  if (!customerAccessToken?.accessToken) {
    return redirect('/account/login');
  }

  try {
    const paginationVariables = getPaginationVariables(request, {
      pageBy: 20,
    });

    const { customer } = await storefront.query(CUSTOMER_ORDERS_QUERY, {
      variables: {
        customerAccessToken: customerAccessToken.accessToken,
        country: storefront.i18n.country,
        language: storefront.i18n.language,
        ...paginationVariables,
      },
      cache: storefront.CacheNone(),
    });

    if (!customer) {
      throw new Error('Customer not found');
    }

    return json({ customer });
  } catch (error) {
    if (error instanceof Error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ error }, { status: 400 });
  }
}

export default function Orders() {
  const { customer } = useLoaderData();
  const { orders, numberOfOrders } = customer;
  return (
    <>
      <div className="container">
        <div className="parent-orders  ">
          <div className="card-orders">
            <div className="orders">
              <h2 className="text-center">
                Orders <small>[{numberOfOrders}]</small>
              </h2>

              <br />
              {orders.nodes.length ? (
                <OrdersTable orders={orders} />
              ) : (
                <EmptyOrders />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function OrdersTable({ orders }) {
  return (
    <>
      <div className="acccount-orders">
        {orders?.nodes.length ? (
          <Pagination connection={orders}>
            {({ nodes, isLoading, PreviousLink, NextLink }) => {
              return (
                <>
                  <PreviousLink>
                    {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                  </PreviousLink>
                  {nodes.map((order) => {
                    return <OrderItem key={order.id} order={order} />;
                  })}
                  <NextLink>
                    {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                  </NextLink>
                </>
              );
            }}
          </Pagination>
        ) : (
          <EmptyOrders />
        )}
      </div>
    </>
  );
}

function EmptyOrders() {
  return (
    <>
      <div className="empty-orders">
        <p>You haven&apos;t placed any orders yet.</p>
        <br />
        <a className="btn-shopping p-3">
          <Link to="/products/all">Start Shopping →</Link>
        </a>
      </div>
    </>
  );
}

function OrderItem({ order }) {
  return (
    <>
      <fieldset>
        <div className="row">

          <div className="col-12 ">
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 ">
                <div className="">
                  <h5 style={{ fontWeight: 'bold' }}>Order Id</h5>
                  <Link to={`/account/orders/${order.id}`}>
                    <span style={{ fontSize: '1.2rem', color: 'black' }}>
                      #{order.orderNumber}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <div className="mt-3 mt-lg-0 mt-md-0">
                  <h5 style={{ fontWeight: 'bold' }}>Date</h5>
                  <p style={{ fontSize: '1.2rem' }}>
                    {new Date(order.processedAt).toDateString()}
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <div className="mt-3 mt-lg-0 mt-md-0">
                  <h5 style={{ fontWeight: 'bold' }}>Payment Status</h5>
                  <p style={{ fontSize: '1.2rem' }}>{order.financialStatus}</p>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-6">
                <div className="mt-3 mt-lg-0 mt-md-0">
                  <h5 style={{ fontWeight: 'bold' }}>Fulfillment Status</h5>
                  <p style={{ fontSize: '1.2rem' }}>{order.fulfillmentStatus}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-lg-center ">
            <h5 style={{ fontWeight: 'bold' }}>Total</h5>
            <span style={{ fontSize: '1.2rem' }} className="ml-4">
              <Money data={order.currentTotalPrice} />
            </span>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12  d-flex justify-content-lg-center mt-3 mt-lg-0 mt-md-0">
            <Link to={`/account/orders/${btoa(order.id)}`}>
              <div
                className="btn shop-nav-btn p-2"
                style={{ fontSize: '1.2rem' }}
              >
                View Order
              </div>
            </Link>
          </div>
        </div>

        {/* <Link to={`/account/orders/${order.id}`}>
          <strong>#{order.orderNumber}</strong>
        </Link> */}
      </fieldset>
      <br />
    </>
  );
}

const ORDER_ITEM_FRAGMENT = `#graphql
  fragment OrderItem on Order {
    currentTotalPrice {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    id
    lineItems(first: 10) {
      nodes {
        title
        variant {
          image {
            url
            altText
            height
            width
          }
        }
      }
    }
    orderNumber
    customerUrl
    statusUrl
    processedAt
  }
`;

export const CUSTOMER_FRAGMENT = `#graphql
  fragment CustomerOrders on Customer {
    numberOfOrders
    orders(
      sortKey: PROCESSED_AT,
      reverse: true,
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...OrderItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        hasNextPage
        endCursor
      }
    }
  }
  ${ORDER_ITEM_FRAGMENT}
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/queries/customer
const CUSTOMER_ORDERS_QUERY = `#graphql
  ${CUSTOMER_FRAGMENT}
  query CustomerOrders(
    $country: CountryCode
    $customerAccessToken: String!
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ...CustomerOrders
    }
  }
`;
