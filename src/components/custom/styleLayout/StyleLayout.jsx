import React from "react";
import Header from "./header/Header";

const StyleLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default StyleLayout;
