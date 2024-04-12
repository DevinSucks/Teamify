import React from "react";
import TaskCard from "./TaskCard"; // Importing TaskCard component

// BoardView component to display tasks in a grid layout
const BoardView = ({ tasks }) => {
  return (
    // Grid container
    <div className='w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10 '>
      {/* Mapping over tasks array and rendering TaskCard for each task */}
      {tasks.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};

// Exporting the BoardView component
export default BoardView;
