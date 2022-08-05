import { Divider } from "antd";
import React from "react";
import { Card } from "../../components/Card";

const Home = () => {
  return (
    <div className='container'>
      <div className='Home'>
        <div className='card mb-3'>
          <div className='card-body'>
            <span>Home | </span>
            <span> Welcome to Real Estate IQ's Portal, Username!</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-7 mb-3'>
            <div className='card h-100 '>
              <div className='card-body gap-3 h-100 d-flex flex-column flex-lg-row justify-content-sm-between align-items-center'>
                <div className='order-1 order-lg-0'>
                  <p>
                    In this portal, you will find our latest off-market
                    properties divided into more than seven different types of
                    lists to start flipping houses, wholesaling, or buy and
                    hold.
                  </p>
                  <p>
                    Leads are updated daily, meaning you will get the freshest
                    data, mined straight from the courthouses! Are you ready to
                    find some deals?
                  </p>
                </div>
                <img
                  className='order-0 order-lg-1'
                  alt=''
                  src={"/images/rocket.png"}
                />
              </div>
            </div>
            <div />
          </div>
          <div className='col-12 col-sm-5 mb-3'>
            <div className='card h-100 '>
              <div className='card-body gap-3 h-100 d-flex flex-column flex-lg-row gap-5 justify-content-center  align-items-center'>
                <div className='order-1 order-lg-0'>
                  If you have any questions you can always contact us, and we
                  will reach out right away.
                </div>
                <img
                  className='order-0 order-lg-1'
                  alt=''
                  src={"/images/contactUsIcon.png"}
                />
              </div>
            </div>
            <div />
          </div>
          <div className='col col-sm-6 mb-3'>
            <div className='card h-100  d-flex flex-column flex-sm-row align-items-center justify-content-center'>
              <div className='card-body h-100 gap-3 d-flex flex-column flex-xl-row align-items-center'>
                <img alt='' src={"/images/video.png"} />
                <div className='d-flex flex-column align-items-center justify-contern-center'>
                  <div className='card-title'>
                    <h3>Get Started Here</h3>
                  </div>
                  <Divider className='my-3' />
                  <div className='card-text text-justify'>
                    Learn how to easily navigate the portal so you can start
                    using the software right away and access your leads.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col col-sm-6 mb-3'>
            <div className='card h-100  d-flex flex-column flex-sm-row align-items-center justify-content-center'>
              <div className='card-body h-100 gap-3 d-flex flex-column flex-xl-row align-items-center'>
                <img alt='' src={"/images/video.png"} />
                <div className='d-flex flex-column align-items-center justify-contern-center'>
                  <div className='card-title'>
                    <h3>Main Features</h3>
                  </div>
                  <Divider className='my-3' />
                  <div className='card-text text-justify'>
                    Learn how to access your account and billing information,
                    generate a ticket if you have any issues, and more!
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='card mb-3 d-flex flex-column flex-sm-row align-items-center justify-content-center'>
          <img className='card-img-top' alt='' src={"/images/video.png"} />
          <div className='card-body d-flex flex-column align-items-center justify-content-between'>
            <div className='card-title'>
              <h3>Get Started Here</h3>
            </div>
            <div className='card-text text-justify'>
              Learn how to access your account and billing information, generate
              a ticket if you have any issues, and more!
            </div>
          </div>
        </div> */}
        </div>
      </div>
      <img className='w-100' alt='' src={"/images/sliderTest.png"} />
    </div>
  );
};

export default Home;
