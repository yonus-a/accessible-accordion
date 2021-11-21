import PropTypes from "prop-types";
import useAccordion from "../../hooks/useAccordion";
import styles from "./index.module.css";
import Content from "./content";
import Header from "./header";
import Item from "./item";

function Accordion({ children }) {
  var accordionRef = useAccordion();
  return (
    <div ref={accordionRef} className={styles.accordion}>
      {children}
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Object.assign(Accordion, {
  Item,
  Header,
  Content,
});
