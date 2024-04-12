import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from "../components/BoardView";
import { tasks } from "../assets/data"; // Importing tasks data
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";

// Define tab options for the view selector
const TABS = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

// Define CSS classes for different task types
const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const Tasks = () => {
  // Extract parameters from URL
  const params = useParams();

  // State variables
  const [selected, setSelected] = useState(0); // Selected tab index
  const [open, setOpen] = useState(false); // Modal open state
  const [loading, setLoading] = useState(false); // Loading state

  // Determine the task status from URL params, defaulting to an empty string
  const status = params?.status || "";

  // Render loading spinner if loading is true
  if (loading) {
    return (
      <div className='py-10 '>
        <Loading />
      </div>
    );
  }

  // Render main content if loading is false
  return (
    <div className='w-full'>
      {/* Title and Create Task button */}
      <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Tasks` : "Tasks"} />

        {/* Render Create Task button only if no specific status is selected */}
        {!status && (
          <Button
            onClick={() => setOpen(true)} // Open the modal when clicked
            label='Create Task'
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'
          />
        )}
      </div>

      {/* Tabs for switching between Board View and List View */}
      <Tabs tabs={TABS} setSelected={setSelected}>
        {/* Render task status headers only if no specific status is selected */}
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4 '>
            <TaskTitle label='To Do' className={TASK_TYPE.todo} />
            <TaskTitle
              label='In Progress'
              className={TASK_TYPE["in progress"]}
            />
            <TaskTitle label='completed' className={TASK_TYPE.completed} />
          </div>
        )}

        {/* Render either BoardView or Table based on the selected tab */}
        {selected !== 1 ? (
          <BoardView tasks={tasks} /> // Render BoardView component
        ) : (
          <div className='w-full dark:text-white dark:bg-slate-900'>
            <Table tasks={tasks} /> // Render Table component
          </div>
        )}
      </Tabs>

      {/* Modal for adding new tasks */}
      <AddTask open={open} setOpen={setOpen} /> {/* Pass open state and setOpen function as props */}
    </div>
  );
};

export default Tasks;
