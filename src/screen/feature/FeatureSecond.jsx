import React from "react";
import Icons from "../../assets/icons/index";

const brands = [
  { id: 1, icon: Icons.brand1 },
  { id: 1, icon: Icons.brand2 },
  { id: 1, icon: Icons.brand3 },
  { id: 1, icon: Icons.brand4 },
  { id: 1, icon: Icons.brand5 },
];

const FeatureSecond = () => {
  
  return (
    <div className=" flex items-center py-[40px] lg:py-[20px]">
      <div className=" container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[20px] gap-y-[30px] md:gap-[30px] lg:gap-0 mt-[48px]">
          <div className="">
            <h4 className=" h4 font-psemibold">100.000+</h4>
            <p>Finsweet Users</p>
          </div>
          {brands.map((brand, id) => (
            <div className=" h-full flex items-center" key={id}>
              <img src={brand.icon} alt="" className=" w-[120px] md:w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSecond;
