import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { fetchData } from "../utils/index.js";
import {useNavigate} from "react-router-dom"

// Importing necessary modules and components

const SignUp = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initializing useForm hook for form handling

  const submitHandler = async (data) => {
    try {
      const response = await fetchData("POST", "http://localhost:3000/api/user/register", data);
      
        console.log(response)
        navigate("/dashboard"); // Navigate to dashboard page
      
      // Handle response, e.g., show success message or navigate to another page
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, e.g., show error message to the user
    }
   
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      {/* Container for the sign-up page */}
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* Left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            {/* Heading and description */}
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
              Manage all your task in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span className="text-slate-700">Efficiency,</span>
              <span className="text-slate-700">Collaboration</span>
              <span>Success</span>
            </p>

            {/* Animated circle */}
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            {/* Sign-up form */}
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                SignUp to efficiency
              </p>
              <p className="text-center text-base text-gray-700 "></p>
            </div>

            {/* Input fields */}
            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="your name"
                type="string"
                name="name"
                label="Username"
                className="w-full rounded-full"
                register={register("name", {
                  required: "Username is required!",
                })}
                error={errors.Username ? errors.Username.message : ""}
              />
              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address*"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="your password"
                type="password"
                name="password"
                label="Password*"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />
              <Textbox
                placeholder="your Organisation"
                type="string"
                name="organisation"
                label="Organisation"
                className="w-full rounded-full"
                register={register("organisation", {
                  required: "Organisation name is required!",
                })}
                error={errors.Organisation ? errors.Organisation.message : ""}
              />
              <Textbox
                placeholder="your role"
                type="string"
                name="role"
                label="Position*"
                className="w-full rounded-full"
                register={register("role", {
                  required: "Position is required!",
                })}
                error={errors.position ? errors.position.message : ""}
              />

              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                Already Registered? <Link to="/login">Login</Link>
              </span>

              {/* Submit button */}
              <Button
                type="submit"
                label="Signup"
                className="w-full h-10 bg-blue-700 text-white rounded-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
