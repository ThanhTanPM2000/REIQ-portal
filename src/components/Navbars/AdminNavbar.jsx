import React, { useState } from "react";
import { Button, Drawer, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { LogoIcon } from "../Icons";

const Header = ({ menu }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className='container-fuild bg-primary'>
        <div className='row d-flex text-white align-items-center p-3'>
          <div className='col-1 d-md-none d-flex align-items-center justify-content-center'>
            <Button
              type='text'
              icon={<MenuOutlined style={{ color: "white" }} />}
              onClick={() => setVisible(true)}
            />
          </div>
          <div
            className='col-9 col-md-9 d-flex align-items-center justify-content-center justify-content-md-start'
            href='/'>
            <LogoIcon />
          </div>

          <div className='col-2 col-md-3 gap-2 d-md-flex align-items-center justify-content-end'>
            <Avatar icon={<UserOutlined />} />
            <span className='d-none d-md-flex'>Username</span>
          </div>
        </div>
      </div>
      <Drawer
        title='Menu'
        className='drawer'
        placement='left'
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}>
        {menu}
      </Drawer>
    </>
  );
};

export default Header;
