import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="mx-auto">
        <main className="container flex flex-col justify-center mx-auto">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
