import { useEffect, useRef } from "react";
import handleKeyDown from "../utils/accordion/handleKeydown";
import handleClick from "../utils/accordion/handleClick";
import ManageFocus from "../utils/accordion/manageFocus";

function useAccordion() {
  var accordionRef = useRef();
  useEffect(() => {
    var accordion = accordionRef.current;
    ManageFocus.init(accordion);
    accordion.addEventListener("click", handleClick);
    accordion.addEventListener("keydown", handleKeyDown);
    return () => {
      accordion.removeEventListener("click", handleClick);
      accordion.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return accordionRef;
}

export default useAccordion;
