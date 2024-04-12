import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import { FaQuestion } from "react-icons/fa";
import ModalWrapper from "./ModalWrapper";
import Button from "./Button";

// Confirmation Dialog Component
export default function ConfirmationDialog({
  open,
  setOpen,
  msg,
  setMsg = () => {},
  onClick = () => {},
  type = "delete",
  setType = () => {},
}) {
  // Function to close the dialog
  const closeDialog = () => {
    setType("delete"); // Reset the type to default
    setMsg(null); // Reset the message
    setOpen(false); // Close the dialog
  };

  return (
    <>
      {/* ModalWrapper for the confirmation dialog */}
      <ModalWrapper open={open} setOpen={closeDialog}>
        <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
          {/* Icon representing the confirmation */}
          <Dialog.Title as="h3" className="">
            <p
              className={clsx(
                "p-3 rounded-full ",
                type === "restore" || type === "restoreAll"
                  ? "text-yellow-600 bg-yellow-100"
                  : "text-red-600 bg-red-200"
              )}
            >
              <FaQuestion size={60} />
            </p>
          </Dialog.Title>
          
          {/* Message for the confirmation */}
          <p className="text-center text-gray-500">
            {msg ?? "Are you sure you want to delete the selected record?"}
          </p>

          {/* Buttons for confirming or canceling the action */}
          <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse gap-4">
            {/* Button for performing the action */}
            <Button
              type="button"
              className={clsx(
                "px-8 text-sm font-semibold text-white sm:w-auto",
                type === "restore" || type === "restoreAll"
                  ? "bg-yellow-600"
                  : "bg-red-600 hover:bg-red-500"
              )}
              onClick={onClick}
              label={type === "restore" ? "Restore" : "Delete"}
            />
            
            {/* Button for canceling the action */}
            <Button
              type="button"
              className="bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border"
              onClick={() => closeDialog()}
              label="Cancel"
            />
          </div>
        </div>
      </ModalWrapper>
    </>
  );
}

// User Action Component
export function UserAction({ open, setOpen, onClick = () => {} }) {
  // Function to close the dialog
  const closeDialog = () => {
    setOpen(false); // Close the dialog
  };

  return (
    <>
      {/* ModalWrapper for the user action dialog */}
      <ModalWrapper open={open} setOpen={closeDialog}>
        <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
          {/* Icon representing the user action */}
          <Dialog.Title as="h3" className="">
            <p className={clsx("p-3 rounded-full ", "text-red-600 bg-red-200")}>
              <FaQuestion size={60} />
            </p>
          </Dialog.Title>

          {/* Message for the user action */}
          <p className="text-center text-gray-500">
            {"Are you sure you want to activate or deactivate this account?"}
          </p>

          {/* Buttons for confirming or canceling the action */}
          <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse gap-4">
            {/* Button for confirming the action */}
            <Button
              type="button"
              className={clsx(
                "px-8 text-sm font-semibold text-white sm:w-auto",
                "bg-red-600 hover:bg-red-500"
              )}
              onClick={onClick}
              label={"Yes"}
            />
            
            {/* Button for canceling the action */}
            <Button
              type="button"
              className="bg-white px-8 text-sm font-semibold text-gray-900 sm:w-auto border"
              onClick={() => closeDialog()}
              label="No"
            />
          </div>
        </div>
      </ModalWrapper>
    </>
  );
}
