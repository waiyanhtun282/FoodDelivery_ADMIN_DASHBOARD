import React, { useEffect } from "react";
import Images from "../../../../assets/images/index";
import DetailTempOne from "./DetailTempOne";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TemplateThree from "../TemplateThree";
import Lists from "./Lists";
import { HiArrowNarrowLeft } from "react-icons/hi";

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
  {
    id: 11,
    template: Images?.PJ1,
    show: "Read case study",
  },
  {
    id: 12,
    template: Images?.PJ2,
    show: "Read case study",
  },
  {
    id: 13,
    template: Images?.PJ3,
    show: "Read case study",
  },

  {
    id: 16,
    template: Images.Client1,
  },
  {
    id: 17,
    template: Images.Client2,
  },
  {
    id: 18,
    template: Images.Client3,
  },
];

const TemplateDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const detailId = params.get("detailId");

  const detail = templateArr.find((tem) => tem.id == detailId);
  // console.log(detail)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link onClick={() => navigate(-1)}>
        <p className="  cursor-pointer  container flex items-center gap-3 sm:py-5 py-3">
          <HiArrowNarrowLeft size={20} />
          <span className=" text-[18px]">Back</span>
        </p>
      </Link>

      {/* DeatilOne */}
      <DetailTempOne template={detail} />

      {/* DeatilTwo */}

      <div className=" flex justify-center ">
        <div className=" sm:h-[1420px]  flex items-center ">
          <div className="container mx-auto">
            <div className=" lg:w-[840px] md:space-y-8 space-y-5">
              {/* heading */}
              <div className=" space-y-2 ">
                <h2
                  className=" md:h2 h3 text-center md:text-left"
                  data-aos="zoom-in"
                >
                  About the project
                </h2>
                <p
                  className="para text-gray-600 lg:w-[835px] lg:h-[140px] text-justify md:text-left"
                  data-aos="zoom-in"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              {/* lists */}
              <Lists />

              {/* image */}
              <div className=" lg:w-[840px] lg:h-[508px]" data-aos="zoom-in">
                <img
                  src={detail?.template}
                  alt=" tempeatail"
                  className=" w-[100%] h-[100%] object-contain"
                />
              </div>

              {/* how we do it */}
              <div className=" space-y-2" data-aos="zoom-in">
                <h2 className=" md:h2 h3">How we do it</h2>
                <p className="para text-gray-600 lg:w-[835px] lg:h-[140px] text-justify md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <Lists />
            </div>
          </div>
        </div>
      </div>

      {/* keywords */}

      <div className="container mx-auto hidden sm:block" data-aos="zoom-in">
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
