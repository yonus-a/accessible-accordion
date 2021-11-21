import PropTypes from "prop-types";
import styles from "./index.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// itemKey Props passed by Item component
function Header({ children, itemKey }) {
  return (
    <h2>
      <button
        data-accordion-header
        aria-controls={`content_${itemKey}`}
        aria-expanded="false"
        className={styles.accordion_header}
        id={`header_${itemKey}`}
      >
        {children}
        <FontAwesomeIcon className={styles.icon} icon={faAngleDown} />
      </button>
    </h2>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
