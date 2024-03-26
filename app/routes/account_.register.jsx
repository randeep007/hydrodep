import { json, redirect } from '@shopify/remix-oxygen';
import { Form, Link, useActionData } from '@remix-run/react';
import Navbar from '~/Components/Navbar';
import Footer from '~/Components/Footer/Footer';
import buildbody from '../img/buildbody.jpg';

export const meta = () => {
  return [{ title: 'BuildMyBody|Register' }];
}
export async function loader({ context }) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (customerAccessToken) {
    return redirect('/account/profile');
  }

  return json({});
}

export const action = async ({ request, context }) => {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  const { storefront, session } = context;
  const form = await request.formData();
  const email = String(form.has('email') ? form.get('email') : '');
  const password = form.has('password') ? String(form.get('password')) : null;
  const passwordConfirm = form.has('passwordConfirm')
    ? String(form.get('passwordConfirm'))
    : null;

  const validPasswords =
    password && passwordConfirm && password === passwordConfirm;

  const validInputs = Boolean(email && password);
  try {
    if (!validPasswords) {
      throw new Error('Passwords do not match');
    }

    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    const { customerCreate } = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: { email, password },
      },
    });

    if (customerCreate?.customerUserErrors?.length) {
      throw new Error(customerCreate?.customerUserErrors[0].message);
    }

    const newCustomer = customerCreate?.customer;
    if (!newCustomer?.id) {
      throw new Error('Could not create customer');
    }

    // get an access token for the new customer
    const { customerAccessTokenCreate } = await storefront.mutate(
      REGISTER_LOGIN_MUTATION,
      {
        variables: {
          input: {
            email,
            password,
          },
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error('Missing access token');
    }
    session.set(
      'customerAccessToken',
      customerAccessTokenCreate?.customerAccessToken,
    );

    return json(
      { error: null, newCustomer },
      {
        status: 302,
        headers: {
          'Set-Cookie': await session.commit(),
          Location: '/account',
        },
      },
    );
  } catch (error) {
    if (error instanceof Error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ error }, { status: 400 });
  }
};

export default function Register() {
  const data = useActionData();
  const error = data?.error || null;
  return (
    <>
      <Navbar />
      <div className="main-div pt-2 pb-5">
        <div className="container ">
          <div className="row no-gutters shadow-lg">
            <div className="col d-none col-lg-5 d-lg-block  ">
              <img src={buildbody} className="img-fluid login-img" />
            </div>
            <div className="col-md-12 col-lg-7 bg-white p-4 border border-dark login-border">
              <h3 className="pb-3 text-center login-name">Welcome To BMB!</h3>
              <div className="form-style">
                <Form method="POST">
                  <fieldset>
                    <div className="form-group pb-3 pt-4">
                      <input
                        className="w-100"
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Email address"
                        aria-label="Email address"
                        autoFocus
                      />
                    </div>
                    <div className="form-group pb-3">
                      <input
                        className="w-100"
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        aria-label="Password"
                        minLength={8}
                        required
                      />
                    </div>

                    <div className="form-group pb-3">
                      <input
                        className="w-100"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Re-enter password"
                        aria-label="Re-enter password"
                        minLength={8}
                        required
                      />
                    </div>
                  </fieldset>
                  {error ? (
                    <p>
                      <mark>
                        <small>{error}</small>
                      </mark>
                    </p>
                  ) : (
                    <br />
                  )}
                  <div className="d-flex align-items-center justify-content-between"></div>
                  <div className="pb-2">
                    <button
                      type="submit"
                      className="btn text-light w-100 font-weight-bold mt-2 login-btn "
                    >
                      Register
                    </button>
                  </div>
                </Form>
                <div className="pt-4 text-center">
                  Already a member? <Link to="/account/login">Login →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="login">
        <h1>Register.</h1>
        <Form method="POST">
          <fieldset>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              aria-label="Password"
              minLength={8}
              required
            />
            <label htmlFor="passwordConfirm">Re-enter password</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              autoComplete="current-password"
              placeholder="Re-enter password"
              aria-label="Re-enter password"
              minLength={8}
              required
            />
          </fieldset>
          {error ? (
            <p>
              <mark>
                <small>{error}</small>
              </mark>
            </p>
          ) : (
            <br />
          )}
          <button type="submit">Register</button>
        </Form>
        <br />
        <p>
          <Link to="/account/login">Login →</Link>
        </p>
      </div> */}
      <Footer />
    </>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate
const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate(
    $input: CustomerCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

// NOTE: https://shopify.dev/docs/api/storefront/latest/mutations/customeraccesstokencreate
const REGISTER_LOGIN_MUTATION = `#graphql
  mutation registerLogin(
    $input: CustomerAccessTokenCreateInput!,
    $country: CountryCode,
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
