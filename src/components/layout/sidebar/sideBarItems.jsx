import {
  BiSolidBarChartAlt2,
  BiSolidArchiveIn,
  BiSolidUser,
  BiSolidCog,
  BiSolidNotepad,
  BiSolidGift,
  BiSolidShoppingBag,
  BiSolidEnvelope,
  BiSolidCollection,
  BiSolidParty,
  BiSolidCategoryAlt,
  BiSolidBookContent,
} from "react-icons/bi";

export const sideBarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <BiSolidBarChartAlt2 size={25} className=" drop-shadow-2xl" />,
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
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 5,
    name: "Category",
    icon: <BiSolidCategoryAlt size={25} className=" drop-shadow-2xl" />,
    link: "/category",
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 5,
    name: "Promotion",
    icon: <BiSolidGift size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 5,
    name: "Giveaway",
    icon: <BiSolidParty size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 5,
    name: "Slide Show",
    icon: <BiSolidCollection size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 6,
    name: "Blog",
    icon: <BiSolidBookContent size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 6,
    name: "Extra Data",
    icon: <BiSolidNotepad size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: "/product/list",
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: "/product/list",
      },
    ],
  },
  {
    id: 3,
    name: "Request",
    icon: <BiSolidEnvelope size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
  {
    id: 7,
    name: "Setting",
    icon: <BiSolidCog size={25} className=" drop-shadow-2xl" />,
    link: "/customer",
  },
];
