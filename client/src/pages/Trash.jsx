import clsx from "clsx";
import React, { useState } from "react";
import {
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdOutlineRestore,
} from "react-icons/md";
import Title from "../components/Title";
import Button from "../components/Button";
import { PRIOTITYSTYELS, TASK_TYPE } from "../utils";
import { tasks } from "../assets/data"; // Importing tasks data

// Define icons for different priority levels
const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const Trash = () => {
  // State variables
  const [openDialog, setOpenDialog] = useState(false); // Dialog open state
  const [open, setOpen] = useState(false); // Modal open state
  const [msg, setMsg] = useState(null); // Message state
  const [type, setType] = useState("delete"); // Type state
  const [selected, setSelected] = useState(""); // Selected task state

  // Render table header
  const TableHeader = () => (
    <thead className='border-b border-gray-300'>
      <tr className='text-black  text-left'>
        <th className='py-2'>Task Title</th>
        <th className='py-2'>Priority</th>
        <th className='py-2'>Stage</th>
        <th className='py-2 line-clamp-1'>Modified On</th>
      </tr>
    </thead>
  );

  // Render table row for each task
  const TableRow = ({ item }) => (
    <tr className='border-b border-gray-200 text-gray-600 hover:bg-gray-400/10'>
      <td className='py-2'>
        <div className='flex items-center gap-2'>
          {/* Task type icon */}
          <div
            className={clsx("w-4 h-4 rounded-full", TASK_TYPE[item.stage])}
          />
          {/* Task title */}
          <p className='w-full line-clamp-2 text-base text-black'>
            {item?.title}
          </p>
        </div>
      </td>

      <td className='py-2 capitalize'>
        {/* Priority level */}
        <div className={"flex gap-1 items-center"}>
          <span className={clsx("text-lg", PRIOTITYSTYELS[item?.priority])}>
            {ICONS[item?.priority]} {/* Priority icon */}
          </span>
          <span className=''>{item?.priority}</span> {/* Priority label */}
        </div>
      </td>

      <td className='py-2 capitalize text-center md:text-start'>
        {item?.stage} {/* Task stage */}
      </td>
      <td className='py-2 text-sm'>
        {new Date(item?.date).toDateString()} {/* Modified date */}
      </td>

      <td className='py-2 flex gap-1 justify-end'>
        {/* Restore button */}
        <Button
          icon={<MdOutlineRestore className='text-xl text-gray-500' />}
          // onClick={() => restoreClick(item._id)}
        />
        {/* Delete button */}
        <Button
          icon={<MdDelete className='text-xl text-red-600' />}
          // onClick={() => deleteClick(item._id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      {/* Main content */}
      <div className='w-full md:px-1 px-0 mb-6'>
        <div className='flex items-center justify-between mb-8'>
          {/* Title */}
          <Title title='Trashed Tasks' />

          <div className='flex gap-2 md:gap-4 items-center'>
            {/* Restore All button */}
            <Button
              label='Restore All'
              icon={<MdOutlineRestore className='text-lg hidden md:flex' />}
              className='flex flex-row-reverse gap-1 items-center  text-black text-sm md:text-base rounded-md 2xl:py-2.5'
              // onClick={() => restoreAllClick()}
            />
            {/* Delete All button */}
            <Button
              label='Delete All'
              icon={<MdDelete className='text-lg hidden md:flex' />}
              className='flex flex-row-reverse gap-1 items-center  text-red-600 text-sm md:text-base rounded-md 2xl:py-2.5'
              // onClick={() => deleteAllClick()}
            />
          </div>
        </div>
        {/* Table container */}
        <div className='bg-white px-2 md:px-6 py-4 shadow-md rounded'>
          <div className='overflow-x-auto'>
            <table className='w-full mb-5'>
              <TableHeader /> {/* Render table header */}
              <tbody>
                {/* Render table rows for each task */}
                {tasks?.map((tk, id) => (
                  <TableRow key={id} item={tk} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trash;
