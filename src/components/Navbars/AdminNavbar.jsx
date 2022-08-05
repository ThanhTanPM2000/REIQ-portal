import React, { useState } from "react";
import { Button, Drawer, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { LogoIcon } from "../Icons";

const Header = ({ menu }) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className='navbar'>
      <Button
        className='menu'
        type='ghost'
        icon={<MenuOutlined style={{ color: "white" }} />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title='Topics'
        className='drawer'
        placement='left'
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}>
        {menu}
      </Drawer>
      <a className='logo' href='/'>
        <LogoIcon />
      </a>
      <div className='header-account'>
        <Avatar icon={<UserOutlined />}>Username</Avatar>
        <p>Username</p>
      </div>
    </nav>
  );
};

export default Header;
