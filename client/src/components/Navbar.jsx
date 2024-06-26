import React, { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
// import { HiBellAlert } from "react-icons/hi2";
import { IoMdFlame } from "react-icons/io";
import { GiTwoCoins } from "react-icons/gi";
import UserAvatar from "./UserAvatar";
import DarkMode from "./DarkMode";
// import { FaCoins } from "react-icons/fa";

// Navbar Component
const Navbar = () => {
  // Redux state and dispatch hooks
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // State for current time
  const [time, setTime] = useState("00:00:00");

  // Effect hook to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 2xl:py-4 sticky z-10 top-0 dark:text-white dark:bg-slate-900">
      <div className="flex gap-4">
        {/* Sidebar toggle button */}
        <button
          onClick={() => dispatch(setOpenSidebar(true))}
          className="text-2xl text-gray-500 block md:hidden"
        >
          ☰
        </button>

        {/* Search input */}
        <div className="w-[200px] 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6] opacity-90">
          <MdOutlineSearch className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search...."
            className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
          />
        </div>

        {/* Current time */}
        <div>
          <span className="text-3xl h-[40px] font-extralight text-black dark:text-red-600">{time}</span>
        </div>
      </div>

      {/* Dark mode toggle */}
      <div>
        <DarkMode />
      </div>

      {/* Additional actions */}
      <div className="flex gap-4 items-center">
        {/* Action 1 */}
        <div className="flex gap-[4px] bg-slate-400 border rounded-lg w-[45px] justify-center hover:bg-slate-300 ">
          <span>0</span>
          <IoMdFlame className="h-[24px]" />
        </div>
        {/* Action 2 */}
        <div className="flex gap-[4px] bg-slate-400  border rounded-lg w-[45px] justify-center  hover:bg-slate-300">
          <span>0</span>
          <GiTwoCoins className="h-[24px]" />
        </div>
        {/* Action 3 */}
        {/* <HiBellAlert className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" /> */}
        {/* User avatar */}
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
