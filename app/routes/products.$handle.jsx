import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';
import { FcFilledFilter } from 'react-icons/fc';
import ProductCard from './ProductCard';
import { Pagination } from '@shopify/hydrogen';
import { getPaginationVariables } from '@shopify/hydrogen';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';

export async function loader({ params, context, request }) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });
  const { handle } = params;
  const { collection } = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      ...paginationVariables,
      handle,
    },
  });
  const trendingProducts = await context.storefront.query(PRODUCT_QUERY);

  // Handle 404s
  if (!collection) {
    throw new Response(null, { status: 404 });
  }

  // json is a Remix utility for creating application/json responses
  // https://remix.run/docs/en/v1/utils/json
  return json({
    collection,
    trendingProducts,
  });
}
// const BmitrendLazy = React.lazy(() => import('~/Components/Bmitrend'));
// const ProductCarousalLazy = React.lazy(() => import('~/Components/Product/ProductCarousal'));
// const BrandCaraouselLazy = React.lazy(() => import('~/Components/Home/BrandCaraousel'));
// const TopSellingLazy = React.lazy(() => import('~/Components/Home/TopSelling'));
// const FeaturedProductsLazy = React.lazy(() => import('~/Components/Home/FeaturedProducts'));
// const OffersLazy = React.lazy(() => import('~/Components/Home/Offers'));

export default function Products() {
  const { collection, trendingProducts } = useLoaderData();
  const navigationItems = [
    {
      label: 'Protien', links: [
        { to: '/products/whey-protien', text: 'Whey Protien' },
        { to: '/products/whey-blend-1', text: 'Whey Blend' },
        { to: '/products/whey-protein-isolate', text: 'Whey Protein Isolate' }
      ]
    },
    {
      label: 'Gainers', links: [
        { to: '/products/mass-gainer', text: 'Mass Gainer' },
        { to: '/products/weight-gainer', text: 'Weight Gainer' }
      ]
    },
    {
      label: 'Pre/Post Workout', links: [
        { to: '/products/preworkout', text: 'Pre Workout' },
        { to: '/products/amino-acids-bcaas', text: 'Amino Acids & BCAAs' },
        { to: '/products/glutamine-1', text: 'Glutamine' },
        { to: '/products/Carnitine-1', text: 'Carnitine' }
      ]
    },
    {
      label: 'Workout Essentials', links: [
        { to: '/products/testosterone', text: 'Testosterone' },
        { to: '/products/multivitamins-1', text: 'Multivitamins' },
        { to: '/products/fat-burner', text: 'Fat Burner' }
      ]
    }
  ];
  const [loading, setLoading] = useState(false); // State variable to track loading state

  // Function to handle loading state
  const handleLoading = () => {
    setLoading(true);
    // You can perform additional actions here, such as fetching data
  };
  return (
    <>
      {loading && (
        <div className="overlay">
          <Oval
            visible={true}
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <Navbar />
      <section id="product-section">
        <div className="container-fluid pb-5">
          <div className="row mt-4">
            {/* <div className="col-lg-3 col-md-12 d-md-none d-sm-none d-lg-flex pro-none flex-column ">
              <div style={{ marginTop: '6rem' }}>
              </div>
              <div className="card-filter">
                <div className="card-content-all ">
                  <div className="product-authencity border border-dark pb-4">
                    <h2 className="text-center font-weight-bolder mt-3 p-1">
                      <em style={{ color: '#282828' }}>Authencity Matters</em>
                    </h2>
                    <hr
                      className="w-100"
                      style={{ border: '1.5px solid black' }}
                    />
                    <p
                      className="text-center m-2"
                      style={{ fontWeight: 'bold', color: '#242424' }}
                    >
                      The risk of receiving a counterfeit product increases when
                      customer buys it from a reseller as the product moves from
                      Importer to distributor then retailer and then to the
                      reseller. <br /> <br /> But here at
                      <span style={{ color: '#ff2828' }}>
                        {' '}
                        &nbsp; BuildMyBody
                      </span>
                      &nbsp; we have reduced this gap between the importer and
                      the customer. That's how BuildMyBody maintains the quality
                      and authenticity till customer receives the final product.
                    </p>
                    <div
                      className="d-flex justify-content-center pt-2
                    "
                    >
                      <NavLink to={'/certificates'}>
                        <p className="read-more-all text-center"> Read More</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col" id="all-products">
              <div
                className="d-flex justify-content-center mb-5"
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                <h1 className="font-weight-bold custom-heading3 text-center">
                  <em className="text-capitalize">
                    {collection.title} Products
                  </em>
                </h1>
                <hr className="h1-hr" />
              </div>
              <div className="col mt-4">
                <nav className="navbar navbar-expand-lg " id="all-products-navbar">
                  <a className="navbar-brand d-flex align-items-center" href="#">
                    <FcFilledFilter size={30} />{' '}
                    <span className="font-weight-bolder" style={{ color: 'black' }}>
                      Filters
                    </span>
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon ">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                      {navigationItems.map((item, index) => (
                        <li className="nav-item dropdown" key={index}>
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id={`servicesDropdown${index}`}
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {item.label}
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby={`servicesDropdown${index}`}
                          >
                            {item.links.map((link, subIndex) => (
                              <Link className="dropdown-item" to={link.to} key={subIndex}>
                                {link.text}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col">
                <span className="nav-item d-lg-none">
                  <a
                    className="nav-link font-weight-bolder"
                    href="/certificates"
                    style={{ color: 'black', fontSize: '1.3rem' }}
                  >
                    Authenticity
                  </a>
                </span>
              </div>
              <Pagination connection={collection.products}>
                {({ nodes, NextLink, PreviousLink, isLoading }) => (
                  <div style={{ textAlign: 'center' }}>
                    <div className="flex items-center justify-center mt-6">
                      <PreviousLink className="btn">
                        {isLoading ? 'Loading...' : 'Load previous products'}
                      </PreviousLink>
                    </div>
                    <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 mt-5" onClick={handleLoading}>
                        {nodes.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <NextLink className="btn">
                        {isLoading ? 'Loading...' : 'Load more products'}
                      </NextLink>
                    </div>
                  </div>
                )}
              </Pagination>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <script>
        {`
          document.addEventListener("DOMContentLoaded", function () {
            const dropdowns = document.querySelectorAll(".dropdown");
            
            dropdowns.forEach((dropdown, index) => {
              const toggleButton = dropdown.querySelector(".dropdown-toggle");
              const content = dropdown.querySelector(".dropdown-content");
            
              toggleButton.addEventListener("click", () => {
                dropdown.classList.toggle("active");
                const isActive = dropdown.classList.contains("active");
            
                if (isActive) {
                  const contentHeight = content.offsetHeight;
                  if (index < dropdowns.length - 1) {
                    dropdowns[index + 1].style.marginTop = contentHeight + "px";
                  }
                } else {
                  dropdowns[index + 1].style.marginTop = "0";
                }
              });
            });
          });
        `}
      </script>
    </>
  );
}
const COLLECTION_QUERY = `#graphql
  query CollectionDetails(
    $handle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor,
      ) {
        nodes {
          id
          title
          publishedAt
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
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
  }
  `;
const PRODUCT_QUERY = `{
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
const seo = ({ data }) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});
export const handle = {
  seo,
};

export function meta({ data }) {
  return [
    { title: data?.collection?.title ?? 'Collection' },
    { description: data?.collection?.description },
  ];
}
