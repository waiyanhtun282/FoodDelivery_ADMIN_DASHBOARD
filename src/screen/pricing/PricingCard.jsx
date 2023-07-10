import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { HiMiniPlay } from "react-icons/hi2";

export default function PricingCard({ price }) {
  return (
    <Card
      variant="gradient"
      className={`w-full lg:max-w-[20rem] md:max-w-[70%] z-[-10] p-8 ${
        price?.id === 2 ? " bg-tint_blue" : " bg-c_gray"
      }`}
      key={price?.id}
      data-aos="zoom-in"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          className={`font-normal uppercase ${
            price?.id === 2 ? " text-c_yellow" : " text-c_blue"
          }`}
        >
          {price?.design}
        </Typography>
        <Typography
          variant="h1"
          className={`mt-6 flex justify-center gap-1 text-7xl font-normal ${
            price?.id === 2 ? "text-white" : "text-black"
          }`}
        >
          <span className="mt-2 text-2xl">$</span>
          {price?.dollar}
          <span className="self-end text-4xl">+/mo</span>
        </Typography>
        <Typography className="text-left mt-5">
          <h3
            className={`text-[20px] ${
              price?.id === 2 ? "text-white" : "text-balck"
            }`}
          >
            {price?.title}
          </h3>
          <p className="para">{price?.para}</p>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul
          className={`flex flex-col gap-4 ${
            price?.id == 2 ? "text-white" : "text-black"
          }`}
        >
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <HiMiniPlay size={16} className="h-3 w-3 text-c_green" />
            </span>
            <Typography className="font-normal"> All limited links</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <HiMiniPlay size={16} className="h-3 w-3 text-c_green" />
            </span>
            <Typography className="font-normal">
              Own analytics platform
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <HiMiniPlay size={16} className="h-3 w-3 text-c_green" />
            </span>
            <Typography className="font-normal">Chat support</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <HiMiniPlay size={16} className="h-3 w-3 text-c_green" />
            </span>
            <Typography className="font-normal">Optimize hashtags</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <HiMiniPlay size={16} className="h-3 w-3 text-c_green" />
            </span>
            <Typography className="font-normal">Unlimited users</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          className={`${
            price?.id === 2 ? "bg-c_yellow text-balck" : "bg-tint_blue"
          } hover:scale-[1.02] focus:scale-[1.02] active:scale-100`}
          ripple={false}
          fullWidth={true}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
