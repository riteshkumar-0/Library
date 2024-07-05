import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import signup from "../../public/signup.jpeg";
import logo from "../../public/logo.png";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:2001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-auto">
          <div className="modal-box m-auto">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost text-red-950 absolute right-2 top-2"
              >
                ✕
              </Link>

              <div className=" m-auto md:order-2 w-full md:w-1/4 h-1/25 items-center">
                <img
                  src={logo}
                  className="md:w-[200px] md:h-[100px] "
                  alt="Logo"
                />
              </div>
              <div className="m-auto md:order-1 w-full  py-1 items-center text-red-950 font-bold text-lg">
                Create a New Account
              </div>
              <div className="flex mt-4">
                <div className="space-y-4 text-orange-950 flex-grow">
                  <div>
                    <span>Name</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your fullname"
                      className="w-60 px-3 py-1 border caret-orange-400 rounded-md outline-none"
                      {...register("fullname", { required: true })}
                    />
                    <br />
                    {errors.fullname && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <span>Email</span>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-60 px-3 py-1 border caret-orange-400 rounded-md outline-none"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <span>Password</span>
                    <br />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-60 px-3 py-1 border caret-orange-400 rounded-md outline-none"
                      {...register("password", { required: true })}
                    />
                    <br />
                    {errors.password && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="ml-4 py-4  m-auto">
                  <img
                    src={signup}
                    className="w-[250px] h-[180px]  hidden md:block "
                    alt="signup"
                  />
                </div>
              </div>
              <div className="flex justify-around  px-4 mt-4 md:flex flex-col">
                <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className=" m-auto text-xl text-red-950">
                  Have an account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
