import React, { useState } from 'react'
import { GrAddCircle } from "react-icons/gr";

const TodoInput = ({ task, setTask }) => {
    const [inputTask, setInputTask] = useState("");
    const submit = () => {
        setTask([...task, { id: task.length + 1, status: "Pending" , inputTask }]);}
  return (
    <>
    <div className="flex ">
      <input
        className=" rounded-md border-2 w-[550px] border-black"
        type="text"
        placeholder="Enter your task..."
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <GrAddCircle className="cursor-pointer" size="3rem" onClick={submit} />
    </div>
    </>
  )
}

export default TodoInput