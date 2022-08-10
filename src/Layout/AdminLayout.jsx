import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { AdminHeader } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import sidebarItems from "../data/sidebarItems";

const AppLayout = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(true);

  const handleVisibleSidebar = (isOpen) => {
    console.log(isOpen);
    setVisibleSidebar(isOpen);
  };

  return (
    <>
      <AdminHeader
        visibleSidebar={visibleSidebar}
        onVisibleSidebar={handleVisibleSidebar}
      />
      <div className='row g-0'>
        <div className='col-lg-auto'>
          <Sidebar
            items={sidebarItems}
            visible={visibleSidebar}
            onVisible={handleVisibleSidebar}
          />
        </div>
        <div className='col'>
          <div className='container__content'>
            <div className='container'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
