import React from "react";
import { GrAddCircle } from "react-icons/gr";


const TaskInput = () => {
  return (
    <div className="flex w-[35%]">
      <input
        className="w-[85%] rounded-md p-2 border-2 border-black"
        type="text"
        placeholder="Enter your task..."
      />
      <GrAddCircle className="pl-3" size="4rem" />
    </div>
  );
};

export default TaskInput;
