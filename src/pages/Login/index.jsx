import React from "react";
import { Form, Input } from "antd";

const Login = () => {
  return (
    <>
      <div className='Login vh-100 d-flex flex-column justify-content-center align-items-center'>
        {/* <div className='mb-3 bg-primary p-2'>
          <img alt='' src='/images/png/logo_dark.png' />
        </div> */}
        <div className='card'>
          <div class='card-body row justify-content-center align-items-strech'>
            <div className='div__form col col-md-6 gap-1  d-flex flex-column '>
              <h1 className='text-center'>
                Welcome back! <br /> Sign in
              </h1>
              <Form>
                <Form.Item name='username'>
                  <Input className='small' placeholder='Username' />
                </Form.Item>
                <Form.Item name='password'>
                  <Input.Password
                    className='small'
                    itemType='password'
                    placeholder='Password'
                  />
                </Form.Item>
              </Form>
              <a className='link-dark' href='/'>
                Forgot your password?
              </a>
              <br />
              <button
                className='btn__login btn btn-primary text-center align-self-center'
                type='primary'>
                Login
              </button>
              <p className='text-muted small mt-4 txt-c'>
                By logging in, you agree to our{" "}
                <a className='link-dark' href='/'>
                  terms of use{" "}
                </a>
                and{" "}
                <a className='link-dark' href='/'>
                  privacy policy
                </a>
              </p>
            </div>
            <div className='col-md-6 div__picture' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
