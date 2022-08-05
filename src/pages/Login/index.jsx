import React from "react";
// import logo from "../../assets/images/Logo REIQ.svg";
import { Form, Button, Input } from "antd";
import { LogoIcon } from "../../components/Icons";

const Login = () => {
  return (
    <>
      <div className='Login flex flex-jc-c flex-ai-c'>
        <div className='wrap-login flex flex-dir-c flex-ai-c'>
          <div className='login-logo'>
            <LogoIcon />
          </div>
          <div className='login-card'>
            <div className='login-form'>
              <h1 className='txt-c mt-5'>
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
              <a className='text-muted small' href='/'>
                Forgot your password?
              </a>
              <Button
                size='large'
                className='Login-button btn-primary'
                type='primary'
                shape='round'>
                Login
              </Button>
              <p className='text-muted small mt-4 txt-c'>
                By logging in, you agree to our{" "}
                <a className='txt-fade' href='/'>
                  terms of use{" "}
                </a>
                and{" "}
                <a className='txt-fade' href='/'>
                  privacy policy
                </a>
              </p>
            </div>
            <div className='login-pic'>
              {/* <img
                src={require("../../assets/images/contactUs.png")}
                className='App-logo'
                alt='logo'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
