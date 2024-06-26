import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import { teams } from "../assets/data"; // Importing teams data
import { getInitials } from "../utils"; // Importing utility function
import UserInfo from "../components/UserInfo";
import clsx from "clsx";
import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
import AddUser from "../components/AddUser";
import DatePicker from "react-datepicker"; // Importing Datepicker component

const Users = () => {
  // State variables
  const [openDialog, setOpenDialog] = useState(false); // Dialog open state
  const [open, setOpen] = useState(false); // Modal open state
  const [openAction, setOpenAction] = useState(false); // User action modal open state
  const [selected, setSelected] = useState(null); // Selected team state
  const [date, setDate] = useState(new Date()); // Date state

  // Function to handle user action
  const userActionHandler = () => {};

  // Function to handle deletion
  const deleteHandler = () => {};

  // Function to handle delete button click
  const deleteClick = (id) => {
    setSelected(id);
    setOpenDialog(true);
  };

  // Function to handle edit button click
  const editClick = (el) => {
    setSelected(el);
    setOpen(true);
  };

  // Render table header
  const TableHeader = () => (
    <thead className="border-b border-gray-300">
      <tr className="text-black text-left">
        <th className="py-2 dark:text-white">Team Name</th>
        <th className="py-2 dark:text-white">Date-Created</th>
        <th className="py-2 dark:text-white">Members</th>
        <th className="py-2 dark:text-white">Tasks</th>
        <th className="py-2 dark:text-white">Status</th>
      </tr>
    </thead>
  );

  // Render table row for each team
  const TableRow = ({ team }) => (
    <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-400/10">
      <td className="p-2 dark:text-white">{team.name}</td>
      <td className="p-2 dark:text-white">{team.dateCreated}</td>
      <td className="p-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-700">
            <span className="text-xs md:text-sm text-center">
              {/* Render user info */}
              {/* {teams.map((m, index) => {
                return <div>{UserInfo(m)}</div>;
              })} */}
            </span>
          </div>
        </div>
      </td>

      {/* <td className="p-2">{user.title}</td> */}

      <td>
        <button
          // onClick={() => userStatusClick(user)}
          className={clsx(
            "w-fit px-4 py-1 rounded-full"
            // user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {/* {user?.isActive ? "Active" : "Disabled"} */}
        </button>
      </td>

      <td className="p-2 flex gap-4 justify-end">
        {/* Edit button */}
        <Button
          className="text-blue-600 hover:text-blue-500 font-semibold sm:px-0"
          label="Edit"
          type="button"
          // onClick={() => editClick(user)}
        />

        {/* Delete button */}
        <Button
          className="text-red-700 hover:text-red-500 font-semibold sm:px-0"
          label="Delete"
          type="button"
          // onClick={() => deleteClick(user?._id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      {/* Main content */}
      <div className="w-full md:px-1 px-0 mb-6">
        <div className="flex items-center justify-between mb-8 ">
          {/* Title */}
          <Title title="  Teams" />

          {/* Create Team button */}
          <Button
            label="Create Team"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md 2xl:py-2.5"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Table container */}
        <div className="bg-white px-2 md:px-4 py-4 shadow-md rounded dark:text-white dark:bg-slate-900">
          <div className="overflow-x-auto dark:text-white ">
            <table className="w-full mb-5">
              <TableHeader /> {/* Render table header */}
              <tbody>
                {/* Render table rows for each team */}
                {teams.map((team, index) => (
                  <TableRow key={index} team={team} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add user modal */}
      <AddUser
        open={open}
        setOpen={setOpen}
        userData={selected}
        key={new Date().getTime().toString()}
      />

      {/* Delete confirmation dialog */}
      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      />

      {/* User action modal */}
      <UserAction
        open={openAction}
        setOpen={setOpenAction}
        onClick={userActionHandler}
      />
    </>
  );
};

export default Users;
