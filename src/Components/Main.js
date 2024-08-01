import React from "react";
import Output from "./Output";
import TaskInput from "./TaskInput";

const Main = () => {
  return (


    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-[90%] m-auto flex flex-col items-center py-7 gap-6">
          <h3 className="font-bold text-2xl">Todo App</h3>

          <TaskInput/>
            <Output/>
         
        </div>
      </div>
    </>
  );
};

export default Main;
