import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="h-full mt-2 mb-6">
      <div className="mx-auto">
        <main className="container flex flex-col justify-center mx-auto lg:flex-row">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
