import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="mx-auto">
        <main className="container flex my-8 flex-col justify-center mx-auto w-full lg:flex-row">{children}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
