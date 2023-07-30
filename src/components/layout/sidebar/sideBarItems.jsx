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
import { paths } from "../../../routes/paths";

export const sideBarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <BiSolidBarChartAlt2 size={25} className=" drop-shadow-2xl" />,
    link: paths.dashboard,
  },
  {
    id: 2,
    name: "Order",
    icon: <BiSolidArchiveIn size={25} className=" drop-shadow-2xl" />,
    link: paths.order,
  },
  {
    id: 3,
    name: "Customer",
    icon: <BiSolidUser size={25} className=" drop-shadow-2xl" />,
    link: paths.customer,
  },
  {
    id: 4,
    name: "Product",
    icon: <BiSolidShoppingBag size={25} className=" drop-shadow-2xl" />,
    link: paths.product,
    subLinks: [
      {
        id: 41,
        name: "Lists",
        icon: null,
        link: paths.product,
      },
      {
        id: 42,
        name: "Create",
        icon: null,
        link: paths.createProduct,
      },
    ],
  },
  {
    id: 5,
    name: "Category",
    icon: <BiSolidCategoryAlt size={25} className=" drop-shadow-2xl" />,
    link: paths.category,
    subLinks: [
      {
        id: 51,
        name: "Lists",
        icon: null,
        link: paths.category,
      },
      {
        id: 52,
        name: "Create",
        icon: null,
        link: paths.createCategory,
      },
    ],
  },
  {
    id: 6,
    name: "Promotion",
    icon: <BiSolidGift size={25} className=" drop-shadow-2xl" />,
    link: paths.promotion,
    subLinks: [
      {
        id: 61,
        name: "Lists",
        icon: null,
        link: paths.promotion,
      },
      {
        id: 62,
        name: "Create",
        icon: null,
        link: paths.createPromotion,
      },
    ],
  },
  {
    id: 7,
    name: "Giveaway",
    icon: <BiSolidParty size={25} className=" drop-shadow-2xl" />,
    link: paths.giveaway,
    subLinks: [
      {
        id: 71,
        name: "Lists",
        icon: null,
        link: paths.giveaway,
      },
      {
        id: 72,
        name: "Create",
        icon: null,
        link: paths.createGiveaway,
      },
    ],
  },
  {
    id: 8,
    name: "Slide Show",
    icon: <BiSolidCollection size={25} className=" drop-shadow-2xl" />,
    link: paths.slidShow,
    subLinks: [
      {
        id: 81,
        name: "Lists",
        icon: null,
        link: paths.slidShow,
      },
      {
        id: 82,
        name: "Create",
        icon: null,
        link: paths.createSlideShow,
      },
    ],
  },
  {
    id: 9,
    name: "Blog",
    icon: <BiSolidBookContent size={25} className=" drop-shadow-2xl" />,
    link: paths.blog,
    subLinks: [
      {
        id: 91,
        name: "Lists",
        icon: null,
        link: paths.blog,
      },
      {
        id: 92,
        name: "Create",
        icon: null,
        link: paths.createBlog,
      },
    ],
  },
  {
    id: 10,
    name: "Extra Data",
    icon: <BiSolidNotepad size={25} className=" drop-shadow-2xl" />,
    link: paths.extraData,
    subLinks: [
      {
        id: 11,
        name: "Lists",
        icon: null,
        link: paths.extraData,
      },
      {
        id: 12,
        name: "Create",
        icon: null,
        link: paths.createExtraData,
      },
    ],
  },
  {
    id: 13,
    name: "Request",
    icon: <BiSolidEnvelope size={25} className=" drop-shadow-2xl" />,
    link: paths.request,
  },
  {
    id: 14,
    name: "Setting",
    icon: <BiSolidCog size={25} className=" drop-shadow-2xl" />,
    link: paths.setting,
  },
];
