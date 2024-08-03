import React from "react";
import TaskInput from "./TaskInput";
import Output from "./Output";

const Model = ({task,setTask,setModel,isVisible}) => {
if(!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[450px]">
          <div className="bg-slate-600 text-white pl-6 gap-2  rounded-xl flex flex-col pt-2 pb-4">
            <div className=" flex flex-col justify-between pr-4">
            <div className="flex justify-end">
                <button className="  text-lg" onClick={()=>setModel(false)}>X</button>
              </div>
              <div className='text-lg font-semibold'>Please enter your scheduled task:</div>{" "}
              
            </div>
            <div className=""><TaskInput setModel={setModel} setTask={setTask} task={task}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
