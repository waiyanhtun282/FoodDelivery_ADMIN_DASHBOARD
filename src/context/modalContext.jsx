import { createContext, useState } from "react";
import TemplateImg from "../assets/images/index";
import Images from "../assets/images/index";
import BlogImg from "../assets/images/index";

export const modalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isShowNav, setIsShowNav] = useState(false);

 
 const pj1 =   {
      id:131,
      template:Images?.PJ1
    };

   const pj2 = {
      id:142,
      template:Images?.PJ2
    };
    const pj3 ={
      id:152,
      template:Images?.PJ3
    };

  const templateArr = [
    {
      id: 21,
      template: TemplateImg?.template1,
      show: "View Portfolio",
    },
    {
      id: 31,
      template: TemplateImg?.template2,
      show: "View Portfolio",
    },
    {
      id: 41,
      template: TemplateImg?.template3,
      show: "Read case study",
    },
    {
      id: 51,
      template: TemplateImg?.template4,
      show: "Read case study",
    },
    {
      id: 61,
      template: TemplateImg?.template5,
      show: "Read case study",
    },
    {
      id: 71,
      template: TemplateImg?.template6,
      show: "Read case study",
    },
  ];

  // blog
  const blogArr = [
    {
      id: 100,
      image: BlogImg?.blog1,
    },
    {
      id: 200,
      image: BlogImg?.blog2,
    },
    {
      id: 300,
      image: BlogImg?.blog3,
    },
    {
      id: 400,
      image: BlogImg?.blog4,
    },
    {
      id: 500,
      image: BlogImg?.blog5,
    },
    {
      id: 600,
      image: BlogImg?.blog6,
    },
  ];

  const values = {
    isShowNav,
    setIsShowNav,
    templateArr,
    blogArr,
    pj1,
    pj2,
    pj3,
  };
  return (
    <modalContext.Provider value={values}>{children}</modalContext.Provider>
  );
};
