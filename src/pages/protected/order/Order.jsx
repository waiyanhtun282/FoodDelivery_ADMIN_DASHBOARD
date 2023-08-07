import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import OrderTable from "./OrderTable";


const Order = () => {
  return (
    <div className=" dark:text-gray-200 my-5 bg-[#fbeff1] p-5 rounded-md">
      <h1 className=" text-2xl  font-psemibold">Order History</h1>
      {/* order header and date */}
      <div className=" my-5 flex  items-center  justify-between flex-row">
        <div className=" ">
          <ul className=" flex items-center  lg:gap-5 gap-2">
            <li className=" text-[red] font-psemibold">All Ordered</li>
            <li className=" text-gray-400 hidden lg:block ">Summary</li>
            <li className=" text-gray-400 hidden lg:block ">Completed</li>
            <li className=" text-gray-400 hidden lg:block ">Cancelled</li>
          </ul>
        </div>

        <div className=" flex items-center  flex-col md:flex-row lg:gap-5 gap-2">
          <div className=" bg-[#fcfafa] px-2 py-3 rounded-md border flex items-center gap-2">
            <BsCalendar3 size={18} />
            <input
              type="date"
              name=""
              id=""
              className=" outline-none  bg-transparent"
            />
          </div>
          <span className="hidden md:block">To</span>
          <div className=" bg-[#fcfafa]  px-2 py-3  rounded-md flex items-center gap-2">
            <BsCalendar3 size={18} />
            <input
              type="date"
              name=""
              id=""
              className=" outline-none  bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* order header and date  end*/}

      {/* OrderTable */}
      <div className="relative overflow-x-auto">
       <OrderTable />
      </div>
    </div>
  );
};

export default Order;
