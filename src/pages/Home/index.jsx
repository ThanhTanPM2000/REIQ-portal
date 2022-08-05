import { Button } from "antd";
import React from "react";
import { Card } from "../../components/Card";

const Home = () => {
  return (
    <div className='Home'>
      <Card className='flex flex-ai-c'>
        <div className='breadcumb'>Home |</div>
        <div className=''> Welcome to Real Estate IQ's Portal, Username!</div>
      </Card>
      <div className='home-grid'>
        <Card className='flex flex-jc-sb flex-ai-c g-1 card-contrast'>
          <div>
            In this portal, you will find our latest off-market properties
            divided into more than seven different types of lists to start
            flipping houses, wholesaling, or buy and hold. Leads are updated
            daily, meaning you will get the freshest data, mined straight from
            the courthouses! Are you ready to find some deals?
          </div>
          <img alt='' src={"/images/rocket.png"} />
        </Card>
        <Card className='flex flex-jc-sb flex-ai-c g-1 card-contrast'>
          <div className='flex flex-dir-c flex-ai-c flex-jc-c g-1'>
            If you have any questions you can always contact us, and we will
            reach out right away.
            {/* <Button shape='round' type='primary'>
              Contact Us
            </Button> */}
          </div>
          {/* <img alt='' src={"/images/contactUsIcon.png"} /> */}
          <img alt='' src={"/images/rocket.png"} />
        </Card>
        <Card className='flex flex-jc-sb flex-ai-c g-1 card-contrast'>
          <img alt='' src={"/images/video.png"} />
          <div>
            In this portal, you will find our latest off-market properties
            divided into more than seven different types of lists to start
            flipping houses, wholesaling, or buy and hold. Leads are updated
            daily, meaning you will get the freshest data, mined straight from
            the courthouses! Are you ready to find some deals?
          </div>
        </Card>
        <Card className='flex flex-jc-sb flex-ai-c g-1 card-contrast'>
          <img alt='' src={"/images/video.png"} />
          <div>
            In this portal, you will find our latest off-market properties
            divided into more than seven different types of lists to start
            flipping houses, wholesaling, or buy and hold. Leads are updated
            daily, meaning you will get the freshest data, mined straight from
            the courthouses! Are you ready to find some deals?
          </div>
        </Card>
      </div>
      <div className='home-slider'>
        <img alt='' src={"/images/sliderTest.png"} />
      </div>
    </div>
  );
};

export default Home;
