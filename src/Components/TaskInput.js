import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";

const TaskInput = ({ task, setTask }) => {
  const [inputTask, setInputTask] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const submit = () => {
    setTask([...task, { id: task.length + 1, status: "Pending" , inputTask , time , date }]);
    
    setInputTask("");
    setTime("");
    setDate("");
  };
  
  return (
    <div className="flex w-[500px]">
      <input
        className=" rounded-md border-2 p-2 w-64 border-black"
        type="text"
        placeholder="Enter your task..."
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <div className="flex flex-col px-6 gap-2">
        <input
          className="border-2 border-black rounded-md p-1"
          type="time"
          name=""
          onChange={(e) => setTime(e.target.value)}
          id=""
          value={time}
        />
        <input
          className="border-2 border-black rounded-md p-1"
          type="date"
          name=""
          onChange={(e) => setDate(e.target.value)}
          id=""
          value={date}
        />
      </div>
      <GrAddCircle className="cursor-pointer" size="5rem" onClick={submit} />
    </div>
  );
};

export default TaskInput;
