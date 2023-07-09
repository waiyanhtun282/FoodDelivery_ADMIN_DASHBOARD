import React from "react";

const PrivacyPolicy = () => {
  const arr = Array(3).fill("");
  return (
    <div>
      <div className="container mx-auto my-[60px] lg:my-[128px]">
        <div className=" text-center">
          <h2 className=" h2">Privacy Policy</h2>
          <p className=" mt-[16px] text-gray-600">
            When you’re ready to go beyond prototyping in Figma, Webflow’s{" "}
            <br /> ready to help you bring your{" "}
          </p>
        </div>
        <div className=" max-w-[850px] mx-auto">
          <div className=" mt-[30px] md:mt-[50px]">
            <h4 className="text-[25px] md:text-[38px] font-psemibold">Lorem ipsum dolor.</h4>
            <p className=" text-gray-700 mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
              <span className=" text-blue-500">Excepteur sint occaecat</span>{" "}
              cupidatat non proident.
            </p>
            <p className="text-gray-700 mt-[22px]">
              Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className=" mt-[50px]">
            <h4 className="text-[25px] md:text-[38px] font-psemibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
            <p className=" text-gray-700 mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat{" "}
              <span className=" text-blue-500">cupidatat</span> non proident.
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className=" ps-5 mt-[24px]">
              <ul className=" list-disc flex flex-col gap-[10px] text-gray-600">
                {arr.map((a, id) => (
                  <li key={id}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-700 mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
