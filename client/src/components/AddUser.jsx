import React, { useState } from "react";
import { useForm } from "react-hook-form"; // Importing useForm hook from react-hook-form for form handling
import { useSelector } from "react-redux"; // Importing useSelector from react-redux for Redux integration
import ModalWrapper from "./ModalWrapper"; // Importing ModalWrapper component
import { Dialog } from "@headlessui/react"; // Importing Dialog component from @headlessui/react
import Textbox from "./Textbox"; // Importing Textbox component
import Loading from "./Loader"; // Importing Loading component
import Button from "./Button"; // Importing Button component
import UserList from "./task/UserList"; // Importing UserList component
import { tasks } from "../assets/data"; // Importing tasks data

// AddUser component
const AddUser = ({ open, setOpen, userData }) => {
  // Initializing defaultValues with userData or empty object
  let defaultValues = userData ?? {};
  // Accessing the user state from Redux store
  const { user } = useSelector((state) => state.auth);
  // State to store team data
  const [team, setTeam] = useState(tasks?.team || []);

  // Setting loading and updating states to false
  const isLoading = false,
    isUpdating = false;

  // useForm hook for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  // Function to handle form submission
  const handleOnSubmit = () => {};

  // Rendering the AddUser component
  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        {/* Form for adding user */}
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          {/* Title of the modal */}
          <Dialog.Title
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            {"Create Team"}
          </Dialog.Title>
          {/* Form fields */}
          <div className="mt-2 flex flex-col gap-6">
            {/* Textbox for team name */}
            <Textbox
              placeholder="Team name"
              type="text"
              name="name"
              label="Team name"
              className="w-full rounded"
              register={register("name", {
                required: "Full name is required!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            {/* Textbox for date */}
            <Textbox
              placeholder="mm/dd/yy"
              type="Date"
              name="title"
              label="Date Created"
              className="w-full rounded"
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            {/* UserList component */}
            <UserList setTeam={setTeam} team={team} />
          </div>

          {/* Loading indicator or action buttons */}
          {isLoading || isUpdating ? (
            <div className="py-5">
              <Loading />
            </div>
          ) : (
            <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
              {/* Submit button */}
              <Button
                type="submit"
                className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto"
                label="Submit"
              />

              {/* Cancel button */}
              <Button
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
                label="Cancel"
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

// Exporting the AddUser component as default
export default AddUser;
