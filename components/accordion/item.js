import PropTypes from "prop-types";
import React from "react";

function Item({ children, itemKey }) {
  var childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { itemKey });
    }
    return child;
  });
  return <div>{childrenWithProps}</div>;
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default Item;
