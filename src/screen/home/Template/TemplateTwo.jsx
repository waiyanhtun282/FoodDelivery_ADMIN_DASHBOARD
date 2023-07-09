import React from "react";
import TemplateImg from "../../../assets/images/index";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const TemplateTwo = ({ templateArr }) => {
  // const arr = Array(6).fill("");

  return (
    <>
      <div className=" lg:h-[1942px] flex items-center ">
        <div className="container mx-auto">
          <div className=" space-y-4">
            {/* categories */}
            <div className="hidden py-0 lg:py-0  md:py-5 md:block md:w-[473px] md:h-[32px] mx-auto">
              <ul className=" flex  justify-between" data-aos="zoom-in">
                <li>ALl</li>
                <li>UI Design</li>
                <li>Webflow Design</li>
                <li>Figma Design</li>
              </ul>
            </div>

            {/* Template */}
            <div className=" md:grid md:grid-cols-2 md:gap-5 space-y-6 md:space-y-0">
              {templateArr?.map((temp) => {
                return (
                  <div
                    className=" lg:w-[550px] lg:h-[576px] "
                    key={temp?.id}
                    data-aos="zoom-in"
                  >
                    <img
                      src={temp?.template}
                      alt="temp 1"
                      className=" w-[100%] lg:h-[380px] mb-3 object-contain"
                    />
                    <div className="md:h-auto h-[172px] space-y-5">
                      <h3 className=" h3">Template 1</h3>
                      <p className="para text-gray-600">
                        Apparently we had reached a great height in the
                        atmosphere, for the sky was a dead black, and the stars
                        had ceased to twinkle.
                      </p>
                      <Link to={`/template/detail?detailId=${temp?.id}`}>
                        <div className=" flex  items-center gap-3 h-[56px]">
                          <span className=" text-dark_blue">{temp?.show}</span>
                          <LiaLongArrowAltRightSolid size={25} />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateTwo;
