import PropTypes from "prop-types";
import styles from "./index.module.css";

function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ),
};

export default Layout;
