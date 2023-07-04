import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" w-full min-h-[400px] bg-tint_blue">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] text-white pt-[60px]">
          <div className="">
            <h6 className=" uppercase h6">asia ice</h6>
            <p className=" mt-5">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div className="">
            <h4 className=" h4">Lets Talk!</h4>
            <p className=" mt-3">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className=" flex items-center gap-[25px] mt-5">
              <BsFacebook className=" text-[20px]" />
              <BsTwitter className=" text-[20px]" />
              <BsInstagram className=" text-[20px]" />
              <BsLinkedin className=" text-[20px]" />
            </div>
          </div>
          <div className=" md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-2 bg-c_yellow py-[20px] px-[30px] text-black">
              <div className="">
                <p className=" font-psemibold">Email me at</p>
                <p>asiaice@website.com</p>
              </div>
              <div className="">
                <p className=" font-psemibold">Call us</p>
                <p>09 770 890 989</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-[30px]">
            <p className=" text-gray-400 text-center lg:text-start">Copyright 2023, asiaice.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
