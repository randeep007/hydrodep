import { json, redirect } from '@shopify/remix-oxygen';
import { Form, Link, useActionData } from '@remix-run/react';
import Navbar from '~/Components/Navbar';
import Footer from '~/Components/Footer/Footer';
import React from 'react';
import buildbody from '../img/buildbody.jpg';

export const meta = () => {
  return [
    { title: 'BuildMyBody | Login' },
    { name: 'description', content: 'Login to your BuildMyBody account.' },
    { name: 'keywords', content: 'BuildMyBody, Login, Account' },
  ];
};

export async function loader({ context }) {
  if (await context.session.get('customerAccessToken')) {
    return redirect('/account/profile');
  }
  return json({});
}

export async function action({ request, context }) {
  const { session, storefront } = context;

  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const form = await request.formData();
    const email = String(form.has('email') ? form.get('email') : '');
    const password = String(form.has('password') ? form.get('password') : '');
    const validInputs = Boolean(email && password);

    if (!validInputs) {
      throw new Error('Please provide both an email and a password.');
    }

    const { customerAccessTokenCreate } = await storefront.mutate(
      LOGIN_MUTATION,
      {
        variables: {
          input: { email, password },
        },
      },
    );

    if (!customerAccessTokenCreate?.customerAccessToken?.accessToken) {
      throw new Error(customerAccessTokenCreate?.customerUserErrors[0].message);
    }

    const { customerAccessToken } = customerAccessTokenCreate;
    session.set('customerAccessToken', customerAccessToken);

    return redirect('/account/profile', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ error }, { status: 400 });
  }
}

export default function Login() {
  const data = useActionData();
  const error = data?.error || null;

  return (
    <>
      <Navbar />
      <div className="main-div mt-5">
        <div className="container">
          <div className="row no-gutters shadow-lg">
            <div className="col d-none col-lg-5 d-lg-block">
              <img src={buildbody} className="img-fluid login-img" alt="BuildMyBody" />
            </div>
            <div className="col-md-12 col-lg-7 bg-white p-3 border border-dark login-border">
              <h3 className="pb-3 text-center login-name">Welcome To BMB!</h3>
              <div className="form-style">
                <Form method="POST">
                  <fieldset>
                    <div className="form-group pb-3 mt-4">
                      {/* <label htmlFor="email">Email address</label> */}
                      <input
                        id="email"
                        className="w-100"
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
                      {/* <label htmlFor="password">Password</label> */}
                      <input
                        id="password"
                        className="w-100"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        aria-label="Password"
                        minLength={8}
                        required
                      />
                    </div>
                  </fieldset>
                  {error ? (
                    <p className="login-error-text text-center">
                      <mark>
                        <small>Wrong Email or Password, Please try again!</small>
                      </mark>
                    </p>
                  ) : (
                    <br />
                  )}
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center">
                      <input name="" type="checkbox" value="" />
                      <span className="pl-2 font-weight-bold">Remember Me</span>
                    </div>
                    <div>
                      <Link to="/account/recover">Forgot password →</Link>
                    </div>
                  </div>
                  <div className="pb-2">
                    <button
                      type="submit"
                      className="btn text-light w-100 font-weight-bold mt-2 login-btn"
                    >
                      Sign in
                    </button>
                  </div>
                </Form>
                <div className="sideline">OR</div>
                <div>
                  <Link to="/account/register">
                    <button
                      type="submit"
                      className="btn text-light w-100 font-weight-bold mt-2 "
                      style={{ height: '50px', background: 'red' }}
                    >
                      <p style={{ color: 'white' }}>Register →</p>
                    </button>
                  </Link>
                </div>
                <div className="pt-4 text-center">
                  Get Members Benefit. <Link to="/account/register">Sign Up→</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const LOGIN_MUTATION = `#graphql
  mutation login($input: CustomerAccessTokenCreateInput!) {
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
