import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Images from "../../../assets/images/index";
import { RiCloseLine } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";

const navLists = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about-us" },
  { id: 3, name: "Features", link: "/features" },
  { id: 4, name: "Pricing", link: "/pricing" },
  { id: 5, name: "Blog", link: "/blog" },
];

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" bg-tint_blue text-white">
      <div className=" container mx-auto h-[70px] md:h-[80px] flex justify-between items-center">
        <div className=" h6">ASIA ICE</div>
        {/* for desktop  */}
        <nav className=" hidden lg:block">
          <ul className=" flex items-center gap-[48px]">
            {navLists.map((n, id) => (
              <NavLink to={n.link} className=" text-gray-400" key={id}>
                {n.name}
              </NavLink>
            ))}
            <Button
              variant="outlined"
              className=" rounded-full border-white text-white hover:bg-blue-400 hover:border-blue-800 focus:shadow-none"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </Button>
          </ul>
        </nav>
        {/* for menu icon  */}
        <button className=" lg:hidden">
          <BiMenu className=" text-[25px]" onClick={() => setIsShow(true)} />
        </button>
        {/* for mobile and tablet  */}
        <div
          className={` h-screen w-full lg:hidden fixed top-0 bottom-0 transition-all dura ${
            isShow ? "left-0" : "left-[-100%]"
          }`}
        >
          <div
            className=" h-screen w-full bg-cover bg-no-repeat"
            style={{ backgroundImage: `url('${Images.navBg}')` }}
          ></div>
          <nav className=" absolute top-0 w-full h-screen bg-[#171753de]">
            <ul className=" flex flex-col justify-center items-center gap-[48px] h-[100%] relative">
              {navLists.map((n, id) => (
                <NavLink to={n.link} className=" text-gray-300" key={id}>
                  {n.name}
                </NavLink>
              ))}
              <Button
                variant="outlined"
                className=" rounded-full border-white text-white hover:bg-blue-400 hover:border-blue-800 focus:shadow-none"
                onClick={() => navigate("/contact-us")}
              >
                Contact Us
              </Button>
              <button className=" absolute top-5 right-5 md:top-10 md:right-10">
                <RiCloseLine
                  className={"text-[25px] md:text-[30px]"}
                  onClick={() => setIsShow(false)}
                />
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
