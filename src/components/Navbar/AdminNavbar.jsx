import React from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import IconWraper from "../Icon";

const Header = ({ visibleSidebar, onVisibleSidebar }) => {
  return (
    <>
      <nav className='navbar text-white bg-primary'>
        <div>
          <Button
            type='text'
            aria-label='Toggle navigation'
            icon={<MenuOutlined style={{ color: "white" }} />}
            onClick={() => onVisibleSidebar(!visibleSidebar)}
          />
          <Link className='navbar-brand' to='/'>
            <img src='/images/svg/logo_light.svg' alt='' />
          </Link>
        </div>
        <div className='gap-2 p-2 d-flex flex-row align-items-center'>
          <IconWraper name='account' />
          <span className='d-sm-block d-none'>Username</span>
        </div>
      </nav>
    </>
  );
};

export default Header;
