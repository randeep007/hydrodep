import {RemixServer} from '@remix-run/react';
import {
  cartGetIdDefault,
  cartSetIdDefault,
  createCartHandler,
} from '@shopify/hydrogen';
import isbot from 'isbot';
import {renderToReadableStream} from 'react-dom/server';

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });

  const cart = createCartHandler({
    storefront,
    getCartId: cartGetIdDefault(request.headers),
    setCartId: cartSetIdDefault({
      maxage: 60 * 60 * 24 * 365, // 1 year expiry
    }),
  });
}
