import React, { useEffect } from "react";
import Images from "../../assets/images/index";
import Icons from "../../assets/icons/index";
import { Button, Input, Spinner } from "@material-tailwind/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginFun } from "../../services/api/authApi";
import Cookies from "js-cookie";
import useAuth from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is require !"),
  password: Yup.string()
    .min(6, "Password at least must be 6 characters !")
    .required("Password is required !"),
});

const Login = () => {
  const loginMutation = useMutation(loginFun);
  const navigate = useNavigate();
  const { token } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      loginMutation.mutate(formData);
    },
  });

  if (token) {
    return <Navigate to={"/"} />;
  }

  useEffect(() => {
    if (loginMutation.isSuccess && loginMutation.data) {
      const { token, userData: user } = loginMutation.data;
      Cookies.set("user", JSON.stringify(user), { expires: 7 });
      Cookies.set("token", token, { expires: 7 });
      navigate("/");
    }
  }, [loginMutation.isSuccess, loginMutation.data, token, navigate]);

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
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="mt-2 w-[300px] md:w-[350px]">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  label="Email"
                  className=""
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className=" text-red-500 text-sm">
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>

              <div className="mt-2 w-[300px] md:w-[350px]">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  label="Password"
                  className=""
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className=" text-red-500 text-sm">
                    {formik.errors.password}
                  </span>
                ) : null}
              </div>

              <div className=" grid place-items-center">
                <Button
                  type="submit"
                  className=" w-[110px] rounded-md py-3 bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center"
                >
                  {loginMutation.isLoading ? (
                    <Spinner className=" w-4 h-4" />
                  ) : (
                    "Sign in"
                  )}
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
