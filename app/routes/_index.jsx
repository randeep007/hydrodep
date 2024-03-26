import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';
import {json} from '@shopify/remix-oxygen';
import {useEffect} from 'react';
import Home from '~/Components/Home';
import {useStateValue} from '~/StateProvider';

export function meta() {
  return [
    {title: 'BuildMyBody | Home'},
    {description: 'Get the best authentic supplements delivered across India'},
  ];
}
export async function loader({request, context}) {
  const {collection} = await context.storefront.query(COLLECTION_QUERY);
  const {collections} = await context.storefront.query(FeaturedCollections);
  const flashDeals = await context.storefront.query(FLASH_DEALS_QUERY);
  let user = null;
  const accessToken = context.session.get('customer_access_token');
  if (Boolean(accessToken)) {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36';
    const origin = new URL(request.url).origin; // Will be http://localhost:3000 in development or an oxygen generated host

    const query = `query customer {
        personalAccount {
          email
        }
      }`;
    const variables = {};
    const shopID = context.env.PUBLIC_STOREFRONT_ID;
    user = await fetch(
      `https://shopify.com/${shopID}/account/customer/api/${context.env.CUSTOMER_API_VERSION}/graphql`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': userAgent,
          Origin: origin,
          Authorization: accessToken,
        },
        body: JSON.stringify({
          operationName: 'SomeQuery',
          query,
          variables: variables,
        }),
      },
    ).then(async (response) => {
      if (!response.ok) {
        throw new Error(
          `${response.status} (RequestID ${response.headers.get(
            'x-request-id',
          )}): ${await response.text()}`,
        );
      }
      return (await response.json()).data;
    });
  }

  // json is a Remix utility for creating application/json responses
  // https://remix.run/docs/en/v1/utils/json
  return json({
    collection,
    collections,
    flashDeals,
    user: user || null,
  });
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
}
`;
const FLASH_DEALS_QUERY = `{
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
}
`;

const FeaturedCollections = `#graphql
  query FeaturedCollections {
    collections(first: 6, query: "(title:Carnitine) OR (title:Whey Blend) OR (title:Glutamine) OR (title:Testosterone) OR (title:Multivitamins) OR (title:Enhanced Athelte)") {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }`;

export default function Index() {
  // const [_, dispatch] = useStateValue();
  const data = useLoaderData();

  // useEffect(() => {
  //   if (data.user) {
  //     dispatch({
  //       type: 'SET_USER',
  //       user: data.user,
  //     });
  //   }
  // }, []);
  return <Home data={data} />;
}
