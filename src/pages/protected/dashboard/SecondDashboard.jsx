import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image1 from "../../../assets/image/Image1.png";
import { Avatar, Typography, Card, Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Chart } from "react-google-charts";
// import 'react-google-charts/dist/react-google-charts.css';

const columnChartData = [
  ["Month", "Sales"],
  ["Jan", 3000],
  ["Feb", 5000],
  ["Mar", 4000],
  ["Apri", 5500],
  ["May", 3500],
  ["June", 5500],
  ["July", 5500],
  ["Aug", 4500],
  ["Sep", 3500],
  ["Oct", 5500],
  ["Nov", 4530],
];

const columnChartOptions = {
  hAxis: { title: "Month", minValue: 2016, maxValue: 2019 },
  vAxis: { title: "Amount", minValue: 0, maxValue: 6000 },
  bars: "vertical", // To create a column chart, use 'vertical'.
  colors: ["#a307ae"], // Custom colors for the columns.
  // isStacked: true,   // To stack the columns.
};

const SecondDashboard = () => {
  const chartEvents = [
    {
      eventName: "ready",
      callback: ({ chartWrapper }) => {
        // Get the chart container element
        const chartContainer = chartWrapper.getContainer();

        // Customize the background color
        chartContainer.style.backgroundColor = "#333";
      },
    },
  ];
  const arr = Array(10).fill("");

  return (
    <div className="  flex  gap-3 flex-col  mx-5  md:gap-5  lg:mx-0 lg:flex-row shadow-md rounded-md">
      <div className=" p-5  bg-gray-50 dark:bg-gray-900 lg:w-4/12 overflow-y-scroll lg:h-[500px]">
        <div className=" flex justify-between items-center">
          <div className=" text-tint_blue uppercase text-[18px] font-psemibold dark:text-gray-400">
            Recent Orders
          </div>
          <div className="dark:text-gray-200 ">
            <HiOutlineDotsVertical size={18} />
          </div>
        </div>

        <div className="">
          <table className="mt-4 w-full table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100  py-3   w-7/12  ">
                  <div className="font-normal leading-none opacity-70  dark:text-gray-200 ">
                    From
                  </div>
                </th>
                <th className="border-b border-blue-gray-100  py-3    w-2/12 ">
                  <div className="font-normal leading-none opacity-70 dark:text-gray-200">
                    price
                  </div>
                </th>
                <th className="border-b border-blue-gray-100  py-3   w-3/12  text-end ">
                  <div className="font-normal leading-none opacity-70  dark:text-gray-200">
                    Status
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {arr?.map((index,a) => (
                <tr
                  key={a}
                  className=" border-y py-4 dark:border-y-blue-gray-600"
                >
                  <td>
                    <div className="flex items-center gap-1">
                      <img src={Image1} alt=" image"  className="" />
                      <div className="flex flex-col">
                        <div
                          // variant="medium"

                          className=" font-psemibold dark:text-gray-200"
                        >
                          Maxmia Smalls
                        </div>
                        <div
                         
                          className="font-normal opacity-70 dark:text-gray-400 text-[14px]"
                        >
                          4minutes ago
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div
                    
                      className=" font-pbold text-tint_blue dark:text-gray-200"
                    >
                      $124323
                    </div>
                  </td>
                  <td className="">
                    <div className=" text-center bg-blue-100  h-6 rounded-lg ">
                      <div  className=" text-[15px]">inprogress</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" flex items-center justify-between border-t border-blue-gray-50 py-3 dark:border-blue-gray-700">
          <div
            
            className="font-normal dark:text-gray-200"
          >
            Page 1 of 10
          </div>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
      {/* bar */}
      <div className=" p-5  bg-gray-50 dark:bg-gray-900 lg:w-8/12 shadow-md rounded-md lg:h-[500px] overflow-y-scoll">
        <div className=" flex justify-between items-center">
          <div className=" text-tint_blue uppercase text-[18px] font-psemibold dark:text-gray-400">
            Sales
          </div>

          <div className=" flex gap-3">
            <div className="flex items-center ">
              <Checkbox
                // defaultChecked
                ripple={false}
                className="w-4 h-4  lg:h-6 lg:w-6 rounded-full border-violet-500/50 bg-[violet] transition-all hover:scale-105 hover:before:opacity-0"
              />
              <span className=" text-tint_blue dark:text-gray-200">Actual</span>
            </div>
            <div className="flex items-center ">
              <Checkbox
                // defaultChecked
                ripple={false}
                className="w-4 h-4  lg:h-6 lg:w-6 rounded-full border-blue-500/50 bg-gray-50 transition-all hover:scale-105 hover:before:opacity-0"
              />
              <span className=" text-tint_blue dark:text-gray-200">
                Projections
              </span>
            </div>
          </div>
        </div>

        {/* bar cahrt */}
        <div className="w-[100%] h-[100%] lg:h-[90%]">
          <Chart
            chartType="ColumnChart"
            data={columnChartData}
            options={columnChartOptions}
            width="100%"
            height="100%"
            className=" bg-white dark:bg-gray-900"
            chartEvents={chartEvents}
            // Add the chartEvents prop here
          />
        </div>
      </div>
    </div>
  );
};

export default SecondDashboard;
