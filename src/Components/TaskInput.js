import React, { useState } from "react";

const TaskInput = ({ task, setTask, setModel }) => {
  const [inputTask, setInputTask] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const submit = () => {
    setModel(false)
    const [year, month, day] = date.split('-').map(Number);
    const [hours, minutes] = time.split(':').map(Number);
    const timeDate = new Date(year, month - 1, day, hours, minutes);
    setTask([
      ...task,
      { id: task.length + 1, status: "Pending", inputTask, time, date, timeDate },
    ]);

    setInputTask("");
    setTime("");
    setDate("");
  };

  return (
    <div className="flex flex-col ">
      <div>
        <input
          className=" rounded-md border-2 p-2 w-96 text-black border-black"
          type="text"
          placeholder="Enter your task..."
          onChange={(e) => setInputTask(e.target.value)}
          value={inputTask}
        />
      </div>
      <div className="flex  gap-6 items-center py-2">
        <div>
          <input
            className="border-2 text-black border-black rounded-md p-1"
            type="time"
            name=""
            onChange={(e) => setTime(e.target.value)}
            id=""
            value={time}
          />
        </div>
        <div>
          <input
            className="border-2 text-black border-black rounded-md p-1"
            type="date"
            name=""
            onChange={(e) => setDate(e.target.value)}
            id=""
            value={date}
          />
        </div>
        <div className="">
          <span
            className="border-2 border-white px-4 py-1 rounded-lg cursor-pointer"
            onClick={submit}
          >
            Add
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
