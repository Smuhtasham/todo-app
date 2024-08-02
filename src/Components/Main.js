import React, { useState } from "react";
import Output from "./Output";
import TaskInput from "./TaskInput";

const Main = () => {

  const [task,setTask]=useState([]);
  return (


    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-[90%] m-auto flex flex-col items-center py-7 gap-6">
          <h3 className="font-bold text-2xl">Todo App</h3>

          <TaskInput setTask={setTask} task={task}/>
            <Output task={task} setTask={setTask}/>
         
        </div>
      </div>
    </>
  );
};

export default Main;
