import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import signin from "../../public/signin.jpeg";
import logo from "../../public/logo.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:1001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            localStorage.setItem("loginTimestamp", Date.now());
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-8/12 h-auto md:h-auto md:w-3/4 lg:w-1/2 bg-slate-50 dark:text-slate-50 dark:bg-slate-400">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost text-red-950 absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  className="w-[150px] h-[75px] md:w-[200px] md:h-[100px]"
                  alt="Logo"
                />
              </div>
              <div className=" text-red-950 font-bold text-lg mt-4">
                Login to your Account
              </div>

              <div className="flex flex-col md:flex-row mt-2">
                <div className="w-full md:w-1/2 space-y-2">
            
                  <div className="mt-4 text-black space-y-2">
                    <span>Email</span>
                    <br />
                    <input
                      type="email"
                      placeholder="xyz@gmail.com"
                      className="w-full px-3 py-2 border rounded-md bg-slate-50 dark:text-slate-50 dark:bg-slate-400 caret-orange-400 outline-none"
                      {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>

                 
                  <div className="mt-4 text-black space-y-2">
                    <span>Password</span>
                    <br />
                    <input
                      type="password"
                      placeholder="xyz123@"
                      className="w-full px-3 py-2 border rounded-md caret-orange-400 bg-slate-50 dark:text-slate-50 dark:bg-slate-400 outline-none"
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

                <div className="hidden md:flex md:w-1/2 h-1/2 justify-end items-center">
                  <img
                    src={signin}
                    className="w-[200px] h-[180px] md:ml-6"
                    alt="signin"
                  />
                </div>
              </div>

         
              <div className="flex justify-around mt-6 flex-col">
                <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p className="text-center text-red-950 mt-4">
                  Not registered?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Login;
