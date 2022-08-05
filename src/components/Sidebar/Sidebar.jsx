import React from "react";
import { Layout } from "antd";

const Sidebar = ({ menu }) => {
  return (
    <Layout.Sider
      className='sidebar me-0 me-lg-3'
      breakpoint={"md"}
      theme='light'
      collapsedWidth={0}
      trigger={null}>
      {menu}
    </Layout.Sider>
  );
};

export default Sidebar;
