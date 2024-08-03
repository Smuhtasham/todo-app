import React, { useState } from 'react'
import { GrAddCircle } from "react-icons/gr";

const TodoInput = ({ task, setTask,setTodoModel }) => {
    const [inputTask, setInputTask] = useState("");
    const submit = () => {
      setTodoModel(false)
        setTask([...task, { id: task.length + 1, status: "Pending" , inputTask }]);}
  return (
    <><div className='flex gap-4 content-center items-center'>
    <div className="flex ">
      <input
        className=" rounded-md border-2 px-2 py-1 text-black w-[500px] border-black"
        type="text"
        placeholder="Enter your task..."
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      /> </div>
      <div className=''>
        <span className='border-2 border-white px-4 py-1 rounded-lg cursor-pointer' onClick={submit}>Add</span>
        </div>
    </div>
    </>
  )
}

export default TodoInput