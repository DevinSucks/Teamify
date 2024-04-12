import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import {fetchData} from "../utils/index.js"


// Importing necessary modules and components

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initializing useForm hook for form handling

  const navigate = useNavigate();   

  const onSubmit = async (data) => { // Define an asynchronous function called onSubmit that takes form data as an argument
    try {
        // Send a POST request to the backend endpoint with the provided data
        const response = await fetchData("POST", "http://localhost:3000/api/user/login", data);
        
        // If the response status is 200 (OK)
        if(response.status !== false){
            console.log(response); // Log the response object
            

            navigate("/dashboard"); // Navigate to the dashboard page
            return
        }
    } catch (error) { // Catch any errors that occur during the request
        console.error('Error fetching data:', error); // Log the error
        navigate("/login"); // Navigate back to the login page
    } 
};

  
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      {/* Container for the login page */}
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* Left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            {/* Heading and description */}
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base bordergray-300 text-gray-600">
              Manage all your task in one place!
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span className="text-slate-700">Cloud-Based</span>
              <span>Task Manager</span>
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
            onSubmit={handleSubmit(onSubmit)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            {/* Login form */}
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Welcome back!
              </p>
              <p className="text-center text-base text-gray-700 ">
                Keep all your credentials safe.
              </p>
            </div>

            {/* Input fields */}
            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
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
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />

              {/* Forgot password link */}
              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                Forget Password?
              </span>

              {/* Submit button */}
              <Button
                type="submit"
                label="Submit"
                className="w-full h-10 bg-blue-700 text-white rounded-full"
              />
              
              {/* Sign up link */}
              <div className="flex gap-2">
                <p>Not Registered Yet?</p>
                <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer" onClick={() => navigate("/signup")} >
                  Sign Up
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
