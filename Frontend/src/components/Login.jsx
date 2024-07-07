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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost text-red-950 absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
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
            <div className="m-auto md:order-2 w-full  py-1 items-center text-red-950 font-bold text-lg">
              Login to your Account
            </div>

            <div className="flex flex-row">
              <div className="w-full md:w-1/2 space-y-4">
                {/* Email */}
                <div className="mt-4 space-y-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="xyz@gmail.com"
                    className="w-full md:w-50 px-3 py-2 border rounded-md  caret-orange-400 outline-none"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="mt-4 space-y-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="xyz123@"
                    className="w-full md:w-60 px-3 py-2 border rounded-md  caret-orange-400 outline-none"
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

              <div className="order-1 md:order-2 w-full md:w-1/2 h-1/2 flex justify-end items-center ">
                <img
                  src={signin}
                  className="md:w-[200px] md:h-[180px] md:ml-6"
                  alt="signin"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6 m-auto  md:flex flex-col">
              <button className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p className="text-red-950">
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
  );
}

export default Login;
