import { json } from '@shopify/remix-oxygen';
import { Link, useLoaderData } from '@remix-run/react';
import { Image, Pagination, getPaginationVariables } from '@shopify/hydrogen';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer/Footer'
import Brand from '../Components/Home/Brand';
import { NavLink } from '@remix-run/react';
import Offers from '~/Components/Home/Offers';

export const meta = ({ data }) => {
  return [{ title: `BuildMyBody | ${data.blog.title}` }];
};

export const loader = async ({ request, params, context: { storefront } }) => {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  if (!params.blogHandle) {
    throw new Response(`blog not found`, { status: 404 });
  }

  const { blog } = await storefront.query(BLOGS_QUERY, {
    variables: {
      blogHandle: params.blogHandle,
      ...paginationVariables,
    },
  });

  if (!blog?.articles) {
    throw new Response('Not found', { status: 404 });
  }

  return json({ blog });
};

export default function Blog() {
  const { blog } = useLoaderData();
  const { articles } = blog;

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className='d-flex flex-wrap' style={{ justifyContent: 'space-between' }}>
          <h1>{blog.title}</h1>
          <NavLink to={'/certificates'}>
            <div className='d-flex d-lg-none d-md-none ' >
              <h1 className=''>Authenticity</h1>
            </div>
          </NavLink>
        </div>

        <div className="blog row">
          <div className="col-lg-4 col-md-4 d-none d-md-flex d-lg-flex flex-column">
            <div className="card-filter">
              <div className="mt-3 ">
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

            {/* <Offers /> */}

          </div>
          <div className="blog-grid col-lg-8 col-md-8 ">
            <Pagination connection={articles}>
              {({ nodes, isLoading, PreviousLink, NextLink }) => {
                return (
                  <>
                    <PreviousLink>
                      {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
                    </PreviousLink>
                    {nodes.map((article, index) => {
                      return (
                        <ArticleItem
                          article={article}
                          key={article.id}
                          loading={index < 2 ? 'eager' : 'lazy'}
                        />
                      );
                    })}
                    <NextLink className='d-flex justify-content-center'>
                      <button id='flash-button' className='p-2'>
                        {isLoading ? 'Loading...' : <span>Load more ↓</span>}
                      </button>
                    </NextLink>
                  </>
                );
              }}
            </Pagination>
          </div>
        </div>
      </div>
      <div className='d-lg-none d-md-none'>
        <Offers />
      </div>
      <Brand />
      <Footer />
    </>
  );
}

function ArticleItem({ article, loading }) {
  const publishedAt = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));
  return (
    <div className="blog-article d-flex flex-column" key={article.id}>
      <h3 className='mt-2'>{article.title}</h3>
      <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
        {article.image && (
          <div className="blog-article-image mt-3">
            <Image
              alt={article.image.altText || article.title}
              style={{ height: '100%' }}
              data={article.image}
              loading={loading}

            />
          </div>
        )}


        <small className='mt-2 text-dark'>{publishedAt}</small>
      </Link>

      <Link to={`/blogs/${article.blog.handle}/${article.handle}`}>
        <button className=" p-2 mt-2 " id='flash-button'>
          Read More
        </button>
      </Link>
    </div>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog
const BLOGS_QUERY = `#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      seo {
        title
        description
      }
      articles(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ArticleItem
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
  fragment ArticleItem on Article {
    author: authorV2 {
      name
    }
    contentHtml
    handle
    id
    image {
      id
      altText
      url
      width
      height
    }
    publishedAt
    title
    blog {
      handle
    }
  }
`;
