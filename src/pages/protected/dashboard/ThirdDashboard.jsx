import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Products", "Price", "Quantity", "Amount", "Sales"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    
   quantity:908,
   amount:"$12344",
    price:"$123243",    
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
   quantity:908,
   amount:"$12344",
    job: "Programator",
    price:"$123243",    
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    
    job: "Executive",
   quantity:908,
   amount:"$12344",
    price:"$123243",    
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
   quantity:908,
   amount:"$12344",
    job: "Programator",
    price:"$123243",    
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    
   quantity:908,
   amount:"$12344",
    price:"$123243",    
    online: false,
    date: "04/10/21",
  },
];
 
export function ThirdDashboard() {
  return (
    <Card className="h-full w-full bg-gray-50 dark:bg-gray-900">
      <CardHeader floated={false} shadow={false} className="rounded-none dark:bg-gray-900 bg-gray-50">
        <div className=" flex items-center justify-between gap-8">
         
            <Typography variant="h5"  className="text-[blue-gray] dark:text-gray-400">
              Top Selling
            </Typography>
          
          
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row dark:text-gray-200">
            <HiOutlineDotsVertical size={20}/>
          </div>
        </div>
        
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-b border-blue-gray-100 p-4 transition-colors dark:border-blue-gray-700"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center  gap-2 font-normal leading-none opacity-70 dark:text-gray-200"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, name, quantity,price, amount, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 dark:border-blue-gray-700";
 
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={img} alt={name} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="large" color="blue-gray" className="font-psemibold dark:text-gray-400">
                          {name}
                        </Typography>
                        {/* <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography> */}
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col ">
                      <Typography variant="small" color="blue-gray" className="font-normal dark:text-gray-400">
                        {price}
                      </Typography>
                    
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="">
                      <Typography className="dark:text-gray-400">
                           {quantity}
                      </Typography>

                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal dark:text-gray-200">
                      {amount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
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
      </CardFooter> */}
    </Card>
  );
}