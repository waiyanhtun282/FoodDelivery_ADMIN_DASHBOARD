import {
  BiSolidDashboard,
  BiSolidArchiveIn,
  BiSolidUser,
  BiSolidCog,
  BiSolidNotepad,
  BiSolidGift,
  BiSolidShoppingBag,
} from "react-icons/bi";

export const sideBarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <BiSolidDashboard size={25} className=" drop-shadow-2xl" />,
    link: "/",
  },
  {
    id: 2,
    name: "Order",
    icon: <BiSolidArchiveIn size={25} className=" drop-shadow-2xl" />,
    link: "/order",
  },
  {
    id: 3,
    name: "Customer",
    icon: <BiSolidUser size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
  {
    id: 4,
    name: "Product",
    icon: <BiSolidShoppingBag size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
  {
    id: 5,
    name: "Promotion",
    icon: <BiSolidGift size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
  {
    id: 6,
    name: "Extra Data",
    icon: <BiSolidNotepad size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
  {
    id: 7,
    name: "Setting",
    icon: <BiSolidCog size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
];
