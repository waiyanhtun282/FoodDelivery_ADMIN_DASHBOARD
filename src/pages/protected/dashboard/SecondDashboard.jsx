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
  const arr = Array(5).fill("");

  return (
    <div className="  flex  gap-5">
      <Card className=" p-5 w-4/12 bg-gray-50 dark:bg-gray-900">
        <div className=" flex justify-between items-center">
          <Typography className=" text-tint_blue uppercase text-[18px] font-psemibold dark:text-gray-400">
            Recent Orders
          </Typography>
          <Typography className="dark:text-gray-200 ">
            <HiOutlineDotsVertical size={18} />
          </Typography>
        </div>

        <div className="">
          <table className="mt-4 w-full table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100  py-3   w-7/12  ">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70  dark:text-gray-200"
                  >
                    From
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100  py-3    w-2/12 ">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 dark:text-gray-200"
                  >
                    price
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100  py-3   w-3/12  text-end ">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70  dark:text-gray-200"
                  >
                    Status
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {arr?.map((index, a) => (
                <tr
                  key={index}
                  className=" border-y py-4 dark:border-y-blue-gray-600"
                >
                  <td key={a}>
                    <div className="flex items-center gap-1">
                      <Avatar src={Image1} alt=" image" size="sm" />
                      <div className="flex flex-col">
                        <Typography
                          // variant="medium"
                          color="blue-gray"
                          className=" font-psemibold dark:text-gray-200"
                        >
                          Maxmia Smalls
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70 dark:text-gray-400"
                        >
                          4minutes ago
                        </Typography>
                      </div>
                    </div>
                  </td>

                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=" font-pbold text-tint_blue dark:text-gray-200"
                    >
                      $124323
                    </Typography>
                  </td>
                  <td className="">
                    <div className=" text-center bg-blue-100 h-6 rounded-lg ">
                      <Typography size="small">inprogress</Typography>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" flex items-center justify-between border-t border-blue-gray-50 py-3 dark:border-blue-gray-700">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal dark:text-gray-200"
          >
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
      {/* bar */}
      <Card className=" p-5 w-8/12 bg-gray-50 dark:bg-gray-900">
        <div className=" flex justify-between items-center">
          <Typography className=" text-tint_blue uppercase text-[18px] font-psemibold dark:text-gray-400">
            Sales
          </Typography>

          <div className=" flex gap-3">
            <Typography className="flex items-center ">
              <Checkbox
                // defaultChecked
                ripple={false}
                className="h-6 w-6 rounded-full border-violet-500/50 bg-[violet] transition-all hover:scale-105 hover:before:opacity-0"
              />
              <span className=" text-tint_blue dark:text-gray-200">Actual</span>
            </Typography>
            <Typography className="flex items-center ">
              <Checkbox
                // defaultChecked
                ripple={false}
                className="h-6 w-6 rounded-full border-blue-500/50 bg-gray-50 transition-all hover:scale-105 hover:before:opacity-0"
              />
              <span className=" text-tint_blue dark:text-gray-200">
                Projections
              </span>
            </Typography>
          </div>
        </div>

        {/* bar cahrt */}
        <div className="w-full h-full dark:bg-gray-900">
          <Chart
            chartType="ColumnChart"
            data={columnChartData}
            options={columnChartOptions}
            width="100%"
            height="100%"
            className=" chart"
            chartEvents={chartEvents} // Add the chartEvents prop here
          />
        </div>
      </Card>
    </div>
  );
};

export default SecondDashboard;
