import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { Image } from '@shopify/hydrogen';
import Navbar from '~/Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '~/Components/Footer/Footer';

export const meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data.article.title} article` }];
};

export async function loader({ params, context }) {
  const { blogHandle, articleHandle } = params;

  if (!articleHandle || !blogHandle) {
    throw new Response('Not found', { status: 404 });
  }

  const { blog } = await context.storefront.query(ARTICLE_QUERY, {
    variables: { blogHandle, articleHandle },
  });

  if (!blog?.articleByHandle) {
    throw new Response(null, { status: 404 });
  }

  const article = blog.articleByHandle;

  return json({ article });
}

export default function Article() {
  const { article } = useLoaderData();
  const { title, image, contentHtml, author } = article;

  const publishedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.publishedAt));

  return (
    <>
      <Navbar />
      <div className="article container">
        <a href="/blogs/news"><p className='text-dark s' style={{ fontSize: '3rem', textDecoration: 'underline' }}>Blogs</p></a>
        <h1 className='d-flex flex-column mt-2'>
          {title}
          <span style={{ fontSize: '.8rem' }}>
            {publishedDate} &middot; {author?.name}
          </span>
        </h1>

        {image && <Image data={image} className='h-100 w-100' loading="eager" />}
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="article mt-2"

        />

      </div>
      <Footer />
    </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog#field-blog-articlebyhandle
const ARTICLE_QUERY = `#graphql
  query Article(
    $articleHandle: String!
    $blogHandle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        title
        contentHtml
        publishedAt
        author: authorV2 {
          name
        }
        image {
          id
          altText
          url
          width
          height
        }
        seo {
          description
          title
        }
      }
    }
  }
`;
