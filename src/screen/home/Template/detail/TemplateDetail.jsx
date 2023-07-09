import React from "react";
import DetailTempOne from "./DetailTempOne";
import TemplateImg from "../../../../assets/images/index";
import TemplateThree from "../TemplateThree";
import Lists from "./Lists";
import { useParams } from "react-router-dom";
import { useModalContext } from "../../../../hooks/useModalContext";

const TemplateDetail = () => {
  const { id } =useParams();
  console.log(id);
  const {templateArr} = useModalContext();
  const template = templateArr?.find((temp) => temp?.id === parseInt(id));

  if(!template){
    return <p>Template not found.</p>;

  }


  return (
    <>
      {/* DeatilOne */}
      <DetailTempOne template={template}/>
      
      {/* DeatilTwo */}

      <div className=" sm:h-[1420px]  flex items-center">
        <div className="container mx-auto">
          <div className=" sm:w-[840px] sm:space-y-8 space-y-5">
            {/* heading */}
            <div className=" space-y-2 ">
              <h2 className=" sm:h2 h3 text-center sm:text-left">About the project</h2>
              <p className="para text-gray-600 sm:w-[835px] sm:h-[140px] text-justify sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* lists */}
            <Lists />

            {/* image */}
            <div className=" sm:w-[840px] sm:h-[508px]">
              <img
                src={template?.template}
                alt=" tempeatail"
                className=" w-[100%] h-[100%] object-contain"
              />
            </div>

            {/* how we do it */}
            <div className=" space-y-2">
              <h2 className=" sm:h2 h3">How we do it</h2>
              <p className="para text-gray-600 sm:w-[835px] sm:h-[140px] text-justify sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <Lists />
          </div>
        </div>
      </div>

      {/* keywords */}

      <div className="container mx-auto hidden sm:block">
        <div className="     border-y-[.9px] border-y-gray-400  ">
          <div className="  py-5 ">
            <ul className=" flex  justify-between  items-center">
              <li className=" text-[24px] text-c_blue">Keywords</li>
              <li>Design</li>
              <li>UI/UX</li>
              <li>Wireframing</li>
              <li>Branding</li>
              <li>Development</li>
              <li>webflow</li>
            </ul>
          </div>
        </div>
      </div>

      {/* end */}
      <TemplateThree />
    </>
  );
};

export default TemplateDetail;
