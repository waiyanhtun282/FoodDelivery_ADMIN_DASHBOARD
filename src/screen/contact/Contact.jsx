import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import { Button } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto my-[60px] lg:my-[128px]">
        <div className="" data-aos="zoom-in">
          <h3 className=" h3 text-center">Contact Us</h3>
          <p className="text-center mt-[16px] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className=" max-w-[1060px] mt-[40px] md:mt-[60px] mx-auto" data-aos="zoom-in">
          <div className="p-[20px] md:p-[50px] bg-c_gray">
            <form action="">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[30px]">
                <div className="">
                  <Input type={"text"} label={"Name"} />
                </div>
                <div className="">
                  <Input type={"email"} label={"Email"} />
                </div>
                <div className="">
                  <Input type={"text"} label={"Address"} />
                </div>
                <div className="">
                  <Input type={"text"} label={"Subject"} />
                </div>
                <div className=" md:col-span-2">
                  <TextArea label={"Message"} />
                </div>
              </div>
              <Button className="rounded-full bg-black text-white mt-[32px]">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
