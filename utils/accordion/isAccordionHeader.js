/**
 * @desc determines whether the passed element is an accordion header.
 *
 * @param {Element} element the element to be tested for bing an accordion header.
 *
 * @returns {boolean} a boolean indicating whether or not the given element is an accordion header.
 */
function isAccordionHeader(element) {
  return element.getAttribute("data-accordion-header");
}

export default isAccordionHeader;
