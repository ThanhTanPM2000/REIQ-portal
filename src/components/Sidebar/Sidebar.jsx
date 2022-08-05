import React from "react";
import { Layout } from "antd";

const Sidebar = ({ menu }) => {
  return (
    <Layout.Sider
      className='sidebar'
      breakpoint={"md"}
      theme='light'
      collapsedWidth={0}
      trigger={null}>
      {menu}
    </Layout.Sider>
  );
};

export default Sidebar;
