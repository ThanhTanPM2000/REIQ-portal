import React from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

import { AdminHeader } from "../components/Navbars";
import { Sidebar } from "../components/Sidebar";
import menuData from "../data/menuHeaderItems";
import { Content } from "antd/lib/layout/layout";

const AppLayout = () => {
  const menu = (
    <Menu>
      {menuData.map((item) => (
        <Menu.Item>
          <div className='row align-items-center'>
            <div className='col-3'>
              <item.icon />
            </div>
            <span className='col-9 text-muted'>{item.label}</span>
          </div>
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
