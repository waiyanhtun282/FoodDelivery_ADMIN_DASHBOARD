import React from "react";
import Images from "../../assets/images/index";
import Icons from "../../assets/icons/index";
import { Button } from "@material-tailwind/react";

const Login = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-5 w-full h-screen">
      <div className=" hidden lg:grid place-items-center bg-blue-400 col-span-3">
        <img src={Images.LoginImg} alt="" className=" w-[60%]" />
      </div>
      <div className=" grid place-items-center col-span-2 ">
        <div className="flex min-h-full flex-1 flex-col md:justify-center px-6 py-12 lg:px-8 pt-[20%] md:pt-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto w-[130px]"
              src={Icons.Logo}
              alt="Your Company"
            />
            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Foodie Market
            </h2>
            <p className=" text-center text-gray-600">
              Sign in to your dashboard
            </p>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div className="mt-2 w-[300px] md:w-[350px]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  required
                  className="block w-full rounded-r-md border-[1px] border-l-[5px] border-l-blue-600 border-gray-600 py-2 ps-2 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400"
                />
              </div>

              <div className="mt-2 w-[300px] md:w-[350px]">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  required
                  className="block w-full rounded-r-md border-[1px] border-l-[5px] border-l-blue-600 border-gray-600 py-2 ps-2 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400"
                />
              </div>

              <div className=" grid place-items-center">
                <Button
                  type="submit"
                  className=" w-fit px-[30px] rounded-md py-3 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
