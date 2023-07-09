import React from "react";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";
import { useModalContext } from "../../../hooks/useModalContext";


const Template = () => {
  const {templateArr} = useModalContext();
  // console.log(templateArr)
  return (
    <>
      {/* one Template */}
      <TemplateOne />

      {/* Template Two */}
      <TemplateTwo  templateArr={templateArr}/>

      {/* Template three */}
       <TemplateThree />
    </>
  );
};

export default Template;
