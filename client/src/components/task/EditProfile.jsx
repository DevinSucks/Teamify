import React, { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import { Dialog } from "@headlessui/react";
import Textbox from "../Textbox";
import { useForm } from "react-hook-form";
import { BiImages } from "react-icons/bi";
import Button from "../Button";

const EditProfile = ({ open, setOpen }) => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [assets, setAssets] = useState([]);
  const [uploading, setUploading] = useState(false);

  const submitHandler = () => {};

  const handleSelect = (e) => {
    setAssets(e.target.files);
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Dialog.Title
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            {"UPDATE PROFILE"}
          </Dialog.Title>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Name"
              type="text"
              name="name"
              label="Name"
              className="w-full rounded"
              register={register("name", { required: "Title is required" })}
              error={errors.title ? errors.title.message : ""}
            />

            <div className="flex gap-4">
              <Textbox
                placeholder="Organisation"
                type="text"
                name="organisation"
                label="Organisation"
                className="w-full rounded"
                register={register("organisation", {
                  required: "Title is required",
                })}
                error={errors.title ? errors.title.message : ""}
              />
            </div>
            <div className="flex gap-4">
              <Textbox
                placeholder="Role"
                type="text"
                name="role"
                label="Role"
                className="w-full rounded"
                register={register("role", { required: "Title is required" })}
                error={errors.title ? errors.title.message : ""}
              />
            </div>

            <div className="bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4">
              {
                <Button
                  label="Submit"
                  type="submit"
                  className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto"
                />
              }

              <Button
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
                label="Cancel"
              />
            </div>
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default EditProfile;
