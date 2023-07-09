import React from "react";

const TemplateThree = () => {
  return (
    <>
      <div className="sm:h-[400px]  flex items-center my-8 sm:my-0">
        <div className="container mx-auto">
          <div
            className=" flex justify-center  items-center "
            data-aos="zoom-in"
          >
            <div className=" sm:h-[308px] sm:w-[730px] text-center sm:space-y-5 space-y-3 max-w-md sm:max-w-none">
              <h1 className=" sm:h2 h3 ">
                Let's build something great together
              </h1>
              <p className="para sm:h-[56px] text-gray-600">
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                ultricies nec dolor sit amet, scelerisque cursus purus.
              </p>
              <div className=" sm:w-[230px] sm:h-[64px] w-[120px] h-[46px] mx-auto">
                <button className=" w-[100%] h-[100%] sm:rounded-[41px] rounded-3xl bg-c_yellow">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateThree;
