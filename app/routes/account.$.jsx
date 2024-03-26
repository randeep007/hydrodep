import {redirect} from '@shopify/remix-oxygen';

export async function loader({context}) {
  if (await context.session.get('customerAccessToken')) {
    return redirect('/account/login');
  }
  return redirect('/account/login');
}
