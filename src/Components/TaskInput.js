import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";


const TaskInput = ({task, setTask}) => {

  const [inputTask,setInputTask]=useState()
  

  const submit=()=>{
    setTask([...task , {inputTask,status:"Pending"} ])
  }
  return (
    <div className="flex w-[35%]">
      <input
        className="w-[85%] rounded-md p-2 border-2 border-black"
        type="text"
        placeholder="Enter your task..."
        onChange={(e)=>setInputTask(e.target.value)}
      />
      <GrAddCircle className="pl-3" size="4rem" onClick={submit} />
    </div>
  );
};

export default TaskInput;
