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
      .post("http://localhost:1001/user/signup", userInfo)
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
      <div className="flex h-screen m-auto items-center justify-center sm:items-center   dark:text-slate-50 dark:bg-slate-400">
        <div className="w-3/4 h-auto">
          <div className="modal-box w-11/12  h-2/4 mx-auto bg-slate-50 dark:bg-slate-400 dark:text-slate-50">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost text-red-950 absolute right-2 top-2"
              >
                ✕
              </Link>

              <div className="flex justify-center items-center mt-4">
                <img
                  src={logo}
                  className="w-[150px] h-[75px] md:w-[200px] md:h-[100px]"
                  alt="Logo"
                />
              </div>
              <div className="text-center text-red-950 font-bold text-lg mt-4">
                Create a New Account
              </div>

              <div className="flex flex-col md:flex-row mt-2">
                <div className="w-full md:w-1/2 space-y-4">
              
                  <div className="mt-4 text-black dark:text-slate-50 space-y-2">
                    <span>Name</span>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter your fullname"
                      className="w-full px-3 py-2 border rounded-md  bg-slate-50 dark:text-slate-50 dark:bg-slate-400  caret-orange-400 outline-none"
                      {...register("fullname", { required: true })}
                    />
                    <br />
                    {errors.fullname && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                 
                  <div className="mt-4 text-black dark:text-slate-50 space-y-2">
                    <span>Email</span>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border rounded-md  bg-slate-50 dark:text-slate-50 dark:bg-slate-400  caret-orange-400 outline-none"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

               
                  <div className="mt-4 text-black dark:text-slate-50 space-y-2">
                    <span>Password</span>
                    <br />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border rounded-md bg-slate-50 dark:bg-slate-400 caret-orange-400 outline-none"
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

                <div className="hidden md:flex md:w-1/2 h-1/2 mt-16 justify-end items-center">
                  <img
                    src={signup}
                    className="w-[200px] h-[180px] md:ml-6"
                    alt="signup"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-around mt-6 flex-col">
                <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-center text-red-950 mt-4">
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
