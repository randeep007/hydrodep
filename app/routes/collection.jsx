import { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import { Link, NavLink, useLoaderData } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';
import { FcFilledFilter } from 'react-icons/fc';
import ProductCard from './ProductCard';
import { Pagination } from '@shopify/hydrogen';
import { getPaginationVariables } from '@shopify/hydrogen';
import ProductCarousal from '~/Components/Product/ProductCarousal';
import BrandCaraousel from '~/Components/Home/BrandCaraousel';
import TopSelling from '~/Components/Home/TopSelling';
import FeaturedProducts from '~/Components/Home/FeaturedProducts';
import Offers from '~/Components/Home/Offers';
import React from 'react';
// export async function loader({ params, context, request }) {
//     const paginationVariables = getPaginationVariables(request, {
//         pageBy: 4,
//     });
//     const { handle } = params;
//     const { collection } = await context.storefront.query(COLLECTION_QUERY, {
//         variables: {
//             ...paginationVariables,
//             handle,
//         },
//     });

//     // Handle 404s
//     if (!collection) {
//         throw new Response(null, { status: 404 });
//     }

//     // json is a Remix utility for creating application/json responses
//     // https://remix.run/docs/en/v1/utils/json
//     return json({
//         collection,
//     });
// }
// export const meta = () => {
//   return [{ title: 'BuildMyBody|All Products' }];
// };

export default function Collection() {
  // const { collection } = useLoaderData();



  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid d-flex  ">
          <div className="row mt-4">
            <div className="col-lg-3 col-md-12 d-md-none d-sm-none d-lg-flex pro-none ">
              <div className="card-filter">
                <div className="card-content-all">
                  {/* <hr /> */}
                  {/* <p className="card-text">Rest filters, price,range etc.</p> */}

                  <br />
                  <br />
                  <div className="product-top-sellers border border-dark">
                    <h1 className="text-center">Top Sellers</h1>
                    <hr className="mt-0" />
                    <div>
                      {/* <FeaturedProducts collections={data.collections} /> */}
                    </div>
                    {/* <BrandCa>raousel /> */}
                    {/* <FeaturedProducts collections={data.collections} /> */}
                  </div>

                  <br />
                  <br />
                  <div className="product-authencity border border-dark">
                    <h2 className="text-center">Authenticity Matters</h2>
                    <hr className="mt-0" />

                    <p className="text-center m-2">
                      The risk of receiving a counterfeit product increases when
                      customer buys it from a reseller as the product moves from
                      Importer to distributor then retailer and then to the
                      reseller. <br /> <br /> But here at BuildMyBody we have
                      reduced this gap between the importer and the customer.
                      That's how BuildMyBody maintains the quality and
                      authenticity till customer receives the final product.
                    </p>
                    <NavLink to={'/certificates'}>
                      <p className="text-center"> Read More</p>
                    </NavLink>
                  </div>
                </div>
              </div>



            </div>


            <div className="col-lg-9 col-md-12 " id="all-products">
              <h1
                style={{ color: '#ff2828' }}
                className="d-flex justify-content-center align-items-center"
              >
                {/* <em>{collection.title}</em> */}
              </h1>

              <div className="col ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">
                    <FcFilledFilter size={30} /> <span>Filter</span>
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

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mr-auto">
                      <li className="nav-item d-lg-none">
                        <a className="nav-link" href="#">
                          Authencity
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="servicesDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Protien
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="servicesDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to="/products/whey-protien"
                          >
                            Whey Protien
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/whey-blend"
                          >
                            Whey Blend
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/whey-protein"
                          >
                            Whey Protein Isolate{' '}
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item dropdown ml-lg-3 ">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="servicesDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Gainers
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="servicesDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to="/products/mass-gainer"
                          >
                            Mass Gainer
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/weight-gainer"
                          >
                            Weight Gainer
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item dropdown ml-lg-3">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="servicesDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Pre/Post Workout
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="servicesDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to="/products/preworkout"
                          >
                            Pre Workout
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/amino-acids-bcaas"
                          >
                            Amino Acids & BCAAs
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/glutamine"
                          >
                            Glutamine
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/Carnitine"
                          >
                            Carnitine
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item dropdown ml-lg-3">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="servicesDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Workout Essentials
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="servicesDropdown"
                        >
                          <Link
                            className="dropdown-item"
                            to="/products/testosterone-support"
                          >
                            Testosterone
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/multivitamins-men-women"
                          >
                            Multivitamins
                          </Link>
                          <Link
                            className="dropdown-item"
                            to="/products/fat-burner"
                          >
                            Fat Burner{' '}
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* <Pagination connection={collection.products}>
                                {({ nodes, NextLink, PreviousLink, isLoading }) => (
                                    <>
                                        <div className="flex items-center justify-center mt-6">
                                            <PreviousLink className="btn">
                                                {isLoading ? 'Loading...' : 'Load previous products'}
                                            </PreviousLink>
                                        </div>
                                        <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3 mt-5">
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
                                    </>
                                )}
                            </Pagination> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* <script>
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
            </script> */}
    </>
  );
}
// const COLLECTION_QUERY = `#graphql
//   query CollectionDetails(
//     $handle: String!
//     $first: Int
//     $last: Int
//     $startCursor: String
//     $endCursor: String
//   ) {
//     collection(handle: $handle) {
//       id
//       title
//       description
//       handle
//       products(
//         first: $first,
//         last: $last,
//         before: $startCursor,
//         after: $endCursor,
//       ) {
//         nodes {
//           id
//           title
//           publishedAt
//           handle
//           variants(first: 1) {
//             nodes {
//               id
//               image {
//                 url
//                 altText
//                 width
//                 height
//               }
//               price {
//                 amount
//                 currencyCode
//               }
//               compareAtPrice {
//                 amount
//                 currencyCode
//               }
//             }
//           }
//         }
//         pageInfo {
//           hasPreviousPage
//           hasNextPage
//           hasNextPage
//           endCursor
//         }
//       }
//     }
//   }
//   `;
// const seo = ({ data }) => ({
//     title: data?.collection?.title,
//     description: data?.collection?.description.substr(0, 154),
// });
// export const handle = {
//     seo,
// };

// export function meta({ data }) {
//     return [
//         { title: data?.collection?.title ?? 'Collection' },
//         { description: data?.collection?.description },
//     ];
// }
