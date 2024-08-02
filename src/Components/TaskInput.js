import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";


const TaskInput = ({task, setTask}) => {

  const [inputTask,setInputTask]=useState("")
  

  const submit=()=>{
    setTask([...task , { id:task.length+1 ,inputTask,status:"Pending"} ])
    setInputTask("");
  }
  return (
    <div className="flex w-[500px]">
      <input
        className=" rounded-md p-2 border-2 w-64 border-black"
        type="text"
        placeholder="Enter your task..."
        onChange={(e)=>setInputTask(e.target.value)}
        value={inputTask}
      />
      <GrAddCircle className="pl-3" size="4rem" onClick={submit} />
    </div>
  );
};

export default TaskInput;
