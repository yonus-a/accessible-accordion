import isAccordionHeader from "./isAccordionHeader";

function handleClick({ target }) {
  if (isAccordionHeader(target)) {
    var isExpanded = target.getAttribute("aria-expanded") === "true";
    var content = document.getElementById(target.getAttribute("aria-controls"));
    if (isExpanded) {
      content.setAttribute("hidden", "");
      target.setAttribute("aria-expanded", "false");
    } else {
      content.removeAttribute("hidden");
      target.setAttribute("aria-expanded", "true");
    }
  }
}

export default handleClick;
