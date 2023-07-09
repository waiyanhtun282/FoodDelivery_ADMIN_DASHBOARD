import React from "react";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";
import { useModalContext } from "../../../hooks/useModalContext";
import Images from "../../../assets/images/index"

const templateArr = [
  {
    id: 21,
    template: Images?.template1,
    show: "View Portfolio",
  },
  {
    id: 31,
    template: Images?.template2,
    show: "View Portfolio",
  },
  {
    id: 41,
    template: Images?.template3,
    show: "Read case study",
  },
  {
    id: 51,
    template: Images?.template4,
    show: "Read case study",
  },
  {
    id: 61,
    template: Images?.template5,
    show: "Read case study",
  },
  {
    id: 71,
    template: Images?.template6,
    show: "Read case study",
  },
];

const Template = () => {
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
