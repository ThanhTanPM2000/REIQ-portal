import React from "react";
import { Drawer, Menu } from "antd";

const Sidebar = ({ items, visible, onVisible }) => {
  const menu = items?.map((item) => (
    <Menu.Item
      key={item?.key}
      icon={item?.icon}
      className='d-flex  align-items-center'>
      {item?.label}
    </Menu.Item>
  ));

  return (
    <>
      <div className='d-none d-lg-block'>
        <Menu
          className='sidebar sidebar__menu--active '
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={visible ? "inline" : "vertical"}
          inlineCollapsed={visible}
          items={items}
        />
      </div>
      <Drawer
        className='drawer drawer__menu--active d-lg-none'
        title='Menu'
        placement='left'
        onClick={() => onVisible(false)}
        onClose={() => onVisible(false)}
        visible={visible}>
        <Menu>{menu}</Menu>
      </Drawer>
    </>
  );
};

export default Sidebar;
