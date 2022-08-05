import React from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

import { AdminHeader } from "../components/Navbars";
import { Sidebar } from "../components/Sidebar";
import menuData from "../data/menuHeader";
import { Content } from "antd/lib/layout/layout";

const AppLayout = () => {
  const menu = (
    <Menu>
      {menuData.map((item) => (
        <Menu.Item icon={<item.icon fill='#000000' stroke='#000000' />}>
          {item?.title}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <AdminHeader menu={menu} />
      <Layout>
        <Sidebar menu={menu} />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default AppLayout;
