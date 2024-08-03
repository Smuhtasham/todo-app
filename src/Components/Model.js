import React from "react";
import TaskInput from "./TaskInput";
import Output from "./Output";

const Model = ({task,setTask,setModel,isVisible}) => {
if(!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[550px]">
          <div className="bg-white pl-6  rounded flex flex-col py-4">
            <div className=" flex justify-between pr-2">
              <div>Please enter your scheduled task:</div>{" "}
              <div>
                <button className="text-black text-lg" onClick={()=>setModel(false)}>X</button>
              </div>
            </div>
            <div className="w-[90%] "><TaskInput setTask={setTask} task={task}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
