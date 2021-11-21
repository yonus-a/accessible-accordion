var Utils = {};

function init(accordion) {
  Utils.triggers = accordion.querySelectorAll("[data-accordion-header]");
}

function getCurrentIndex() {
  return Array.from(Utils.triggers).indexOf(document.activeElement);
}

function focusNextTrigger() {
  var { triggers } = Utils;
  triggers[(getCurrentIndex() + 1) % triggers.length].focus();
}

function focusPreviousTrigger() {
  var prevTriggerIndex = getCurrentIndex() - 1;
  if (prevTriggerIndex < 0) return focusLastTrigger();
  Utils.triggers[prevTriggerIndex].focus();
}

function focusFirstTrigger() {
  Utils.triggers[0].focus();
}

function focusLastTrigger() {
  var { triggers } = Utils;
  triggers[triggers.length - 1].focus();
}

const exportedObject = {
  focusPreviousTrigger,
  focusFirstTrigger,
  focusNextTrigger,
  focusLastTrigger,
  init,
};

export default exportedObject;
