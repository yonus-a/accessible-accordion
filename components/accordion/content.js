import PropTypes from "prop-types";
import styles from "./index.module.css";

// itemKey props passed by Item component
function Content({ children, itemKey }) {
  return (
    <div
      hidden
      role="region"
      aria-labelledby={`header_${itemKey}`}
      className={styles.accordion_content}
      id={`content_${itemKey}`}
    >
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
