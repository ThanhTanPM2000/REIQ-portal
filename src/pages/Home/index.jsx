import { Divider, Button } from "antd";
import React from "react";

const Home = () => {
  return (
    <div className='home'>
      <div className='card shadow mt-2 mb-4'>
        <div className='card-body'>
          <span>Home | </span>
          <strong className='fw-bold'>
            Welcome to Real Estate IQ's Portal, Username!
          </strong>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-lg-2 g-4'>
        <div className='col col-lg-8'>
          <div className='card shadow  h-100 '>
            <div className='card-body d-flex align-items-center'>
              <div className='row align-content-center align-items-center'>
                <div className='col-7 col-md-9'>
                  <p>
                    In this portal, you will find our latest off-market
                    properties divided into more than seven different types of
                    lists to start flipping houses, wholesaling, or buy and
                    hold.
                  </p>
                  <p>
                    Leads are updated daily, meaning you will get the freshest
                    data, mined straight from the courthouses!{" "}
                    <strong>Are you ready to find some deals?</strong>
                  </p>
                </div>
                <div className='col-5 col-md-3'>
                  <img
                    className='img-fluid '
                    alt=''
                    src={"/images/png/rocket.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col col-lg-4 '>
          <div className='card shadow h-100 shadow'>
            <div className='card-body d-flex align-items-center'>
              <div className='row align-content-center align-items-center'>
                <div className='col-7 col-md-9 col-lg-7 d-flex flex-column align-items-center'>
                  <p className='text-center'>
                    If you have any questions you can always{" "}
                    <strong>
                      contact us, and we will reach out right away.
                    </strong>
                  </p>
                  <div>
                    <Button type='primary'>Contact Us</Button>
                  </div>
                </div>
                <div className='col-5 col-md-3 col-lg-5'>
                  <img
                    className='img-fluid'
                    alt=''
                    src={"/images/png/contactUs.png"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className='col col-lg-6'>
          <div className='card shadow h-100'>
            <div className='card-body h-100'>
              <div className='row align-items-center gap-1'>
                <div className='col col-md-4 d-flex justify-content-center'>
                  <img
                    className='img-fluid'
                    alt=''
                    src={"/images/png/video.png"}
                  />
                </div>
                <div className='col col-md-7'>
                  <div className='card-title'>
                    <h5 className='fw-bold text-center'>Get Started Here</h5>
                  </div>
                  <Divider className='my-3' />
                  <p>
                    Learn how to easily navigate the portal so you can start
                    using the software right away and access your leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col col-lg-6'>
          <div className='card shadow h-100'>
            <div className='card-body h-100'>
              <div className='row align-items-center gap-1'>
                <div className='col col-md-4 d-flex justify-content-center'>
                  <img
                    className='img-fluid'
                    alt=''
                    src={"/images/png/video.png"}
                  />
                </div>
                <div className='col col-md-7'>
                  <div className='card-title'>
                    <h5 className='fw-bold text-center'>Get Started Here</h5>
                  </div>
                  <Divider className='my-3' />
                  <p>
                    Learn how to easily navigate the portal so you can start
                    using the software right away and access your leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <img
          className='img-fluid rounded-3'
          alt=''
          src={"/images/png/sliderTest.png"}
        />
      </div>
    </div>
  );
};

export default Home;
