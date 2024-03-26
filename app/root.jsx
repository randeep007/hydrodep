import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';
import styles2 from './styles/style.css';
import favicon from '../public/favicon.svg';
import { Seo } from '@shopify/hydrogen';
import { useEffect } from 'react';
// import { Script } from '@shopify/hydrogen';

export const links = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: styles2 },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    { rel: 'icon', type: 'image/svg+xml', href: favicon },
  ];
};

export async function loader({ context }) {
  const layout = await context.storefront.query(LAYOUT_QUERY);
  return { layout };
}

export default function App() {
  return (

    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <link href="../node_modules/hamburgers/dist/hamburgers.css" rel="stylesheet" /> */}

        <Seo />
        <Meta />
        <Links />
        {/* <Script // Add the Script component here
          async
          src='https://cdn.shopify.com/extensions/12ce4341-bff5-4f7d-8c62-9b559f6407ed/inbox-170/assets/shopifyChatV1Widget.js?button_color=%23000000&amp;sc=%23FFFFFF&amp;tc=%236A6A6A&amp;i=chat_bubble&amp;t=chat_with_us&amp;p=bottom_right&amp;vp=lowest&amp;shop_id=fKc5Ik8XZiybFPoIGyFLQ6QaS670IXw4Ucd2DvtYtwE&amp;shop=buildmybody.in" type="module" defer="" async='
        /> */}
      </head>
      <body>
        <script
          src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
          crossOrigin="anonymous"
        ></script>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
