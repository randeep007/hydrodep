import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import Product from '~/Components/Product';

const PRODUCT_QUERY = `#graphql
  query product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      descriptionHtml
      media(first: 10) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      options {
        name,
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        id
        availableForSale
        selectedOptions {
          name
          value
        }
        image {
          id
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
        sku
        title
        unitPrice {
          amount
          currencyCode
        }
        product {
          title
          handle
        }
      }
      variants(first: 1) {
        nodes {
          id
          title
          availableForSale
          price {
            currencyCode
            amount
          }
          compareAtPrice {
            currencyCode
            amount
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

const FeaturedProducts = `{
  collection(handle: "all") {
    id
    title
    products(first: 2) {
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
const TrendingProducts = `{
  collection(handle: "all") {
    id
    title
    products(first: 2) {
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

export async function loader({params, context, request}) {
  const {handle} = params;

  const searchParams = new URL(request.url).searchParams;
  const selectedOptions = [];

  // set selected options from the query string
  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });
  const storeDomain = context.storefront.getShopifyDomain();
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle,
      selectedOptions,
    },
  });
  const selectedVariant =
    product.selectedVariant ?? product?.variants?.nodes[0];

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }
  const FeaturedProductsCollection = await context.storefront.query(
    FeaturedProducts,
  );
  const TrendingProductsCollection = await context.storefront.query(
    TrendingProducts,
  );

  return json({
    FeaturedProductsCollection,
    TrendingProductsCollection,
    product,
    selectedVariant,
    storeDomain,
  });
}
export default function ProductHandle() {
  const data = useLoaderData();

  const orderable = data.selectedVariant?.availableForSale || false;

  return <Product data={{...data, orderable: orderable}} />;
}
