import React from "react";
import Images from "../../assets/images/index";
import AboutCard from "./AboutCard";
import { GiNotebook } from "react-icons/gi";
import { RiPencilRuler2Line } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import Icons from "../../assets/icons/index";

const process = [
  {
    id: 1,
    title: "Planning",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    id: 2,
    title: "Conception",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    id: 3,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  {
    id: 4,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
];

const benefits = [
  {
    id: 1,
    icon: <GiNotebook className=" text-[30px] text-c_blue" />,
    title: "Customize with ease",
  },
  {
    id: 1,
    icon: <RiPencilRuler2Line className=" text-[30px] text-c_blue" />,
    title: "Perfectly Responsive",
  },
  {
    id: 1,
    icon: <HiUserGroup className=" text-[30px] text-c_blue" />,
    title: "Friendly Support",
  },
];

const brands = [
  { id: 1, icon: Icons.brand1 },
  { id: 1, icon: Icons.brand2 },
  { id: 1, icon: Icons.brand3 },
  { id: 1, icon: Icons.brand4 },
  { id: 1, icon: Icons.brand5 },
];

const teams = [
  { id: 1, img: Images.aboutP1, name: "John Smith", job: "CEO" },
  { id: 2, img: Images.aboutP2, name: "Simon Adams", job: "CTO" },
  { id: 3, img: Images.aboutP3, name: "Paul Jones", job: "Design Lead" },
  { id: 4, img: Images.aboutP4, name: "Sara Hardin", job: "Project Manager" },
];

const About = () => {
  return (
    <div>
      <div className="container mx-auto my-[50px] md:py-[128px] lg:my-0 flex items-center animate__animated animate__fadeIn">
        <AboutCard
          as={"h2"}
          label={"About us"}
          title={"Our designs solve problems"}
          imgUrl={Images.about1}
        />
      </div>
      {/* section  */}
      <div className="container mx-auto my-[30px] lg:my-0">
        <div className="p-[20px] md:p-[80px] bg-[#F4F5F5]">
          <p data-aos="zoom-in">Who we are</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] mt-2">
            <div className="" data-aos="zoom-in">
              <h4 className=" h5 font-psemibold">Goal focussed</h4>
              <p className=" text-dark_blue mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="" data-aos="zoom-in">
              <h4 className=" h5 font-psemibold">Continuous improvement</h4>
              <p className=" text-dark_blue mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="" data-aos="zoom-in">
          <img src={Images.aboutBanner} alt="" className=" w-full" />
        </div>
      </div>
      {/* section  */}
      <div className="container mx-auto my-[100px]">
        <h3 className="h3 text-center" data-aos="zoom-in">
          The process we follow
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[30px] mt-[30px] md:mt-[48px]">
          {process.map((pro, id) => (
            <div className="" key={id} data-aos="zoom-in">
              <div className="flex gap-[24px] items-center">
                <div className=" w-[15px] md:w-[24px] h-[15px] md:h-[24px] rounded-full bg-c_blue"></div>
                <div className=" border-t-[1px] md:border-t-[2px] border-c_blue border-dashed w-[200px]"></div>
              </div>
              <h6 className=" text-dark_blue h6 font-psemibold mt-[15px] md:mt-[30px]">
                {pro.title}
              </h6>
              <p className=" text-dark_blue mt-[8px]">{pro.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* section  */}
      <div className=" w-full bg-c_accent py-[50px] md:py-[100px]">
        <div className="container mx-auto flex flex-col gap-[70px] md:gap-[90px]">
          <AboutCard
            as={"h3"}
            label={"Our Mission"}
            title={"Inspire, Innovate, Share"}
            imgUrl={Images.about2}
          />
          <AboutCard
            position="reverse"
            as={"h3"}
            label={"Our Vision"}
            title={"Laser focus"}
            imgUrl={Images.about3}
          />
        </div>
      </div>
      {/* section  */}
      <div className="container mx-auto py-[80px] md:py-[100px]">
        <div className="">
          <h2 className=" h3 text-center" data-aos="zoom-in">
            The benefits of working <br /> with us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[30px] md:mt-[40px]">
            {benefits.map((be, id) => (
              <div className=" bg-c_gray p-[40px]" key={id} data-aos="zoom-in">
                <div className="">{be.icon}</div>
                <h6 className="h6 font-psemibold my-[20px]">{be.title}</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut enim.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[20px] gap-y-[30px] md:gap-[30px] lg:gap-0 mt-[48px]">
          <div className="" data-aos="zoom-in">
            <h4 className=" h4 font-psemibold">100.000+</h4>
            <p>Finsweet Users</p>
          </div>
          {brands.map((brand, id) => (
            <div
              className=" h-full flex items-center"
              key={id}
              data-aos="zoom-in"
            >
              <img src={brand.icon} alt="" className=" w-[120px] md:w-auto" />
            </div>
          ))}
        </div>
      </div>
      {/* section  */}
      <div className="w-full bg-c_gray">
        <div className="container mx-auto py-[50px] md:py-[100px]">
          <h3 className=" h3 text-center" data-aos="zoom-in">
            Meet our team
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[32px] mt-[48px]">
            {teams.map((team, id) => (
              <div
                className=" flex flex-col justify-center bg-white py-[20px] md:py-[40px]"
                key={id}
                data-aos="zoom-in"
              >
                <img
                  src={team.img}
                  alt=""
                  className=" w-[90px] md:w-[160px] mx-auto"
                />
                <h6 className=" h6 text-center mt-[15px] md:mt-[30px] font-psemibold">
                  {team.name}
                </h6>
                <p className=" text-center">{team.job}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
