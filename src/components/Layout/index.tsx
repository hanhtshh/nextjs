import * as React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Layout = ({ children }: any) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
