import React from "react";

const Card = ({ children, className, styles }) => {
  return (
    <div className={`card ` + className} style={{ ...styles }}>
      {children}
    </div>
  );
};

export default Card;
