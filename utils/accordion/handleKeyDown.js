import isAccordionHeader from "./isAccordionHeader";
import ManageFocus from "./manageFocus";

function handleKeyDown({ target, key }) {
  if (isAccordionHeader(target)) {
    switch (key) {
      case "ArrowDown":
        return ManageFocus.focusNextTrigger();
      case "ArrowUp":
        return ManageFocus.focusPreviousTrigger();
      case "Home":
        return ManageFocus.focusFirstTrigger();
      case "End":
        return ManageFocus.focusLastTrigger();
    }
  }
}

export default handleKeyDown;
