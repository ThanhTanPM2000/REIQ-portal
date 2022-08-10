import React from "react";
import icons from "../../data/icons";

const IconWraper = ({ name, alt }) => {
  return (
    <span
      role='img'
      aria-label='account-book'
      className='anticon anticon-account-book ant-menu-item-icon'>
      {icons[name]}
    </span>
  );
};

export default IconWraper;
