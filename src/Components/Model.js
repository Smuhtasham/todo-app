import React from "react";
import TaskInput from "./TaskInput";
import Output from "./Output";

const Model = ({task,setTask}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
          <div className="bg-white p-2 rounded flex flex-col">
            <div className=" flex justify-between">
              <div>Model</div>{" "}
              <div>
                <button className="text-black text-lg">X</button>
              </div>
            </div>
            <div className="w-[90%]"><TaskInput setTask={setTask} task={task}/></div>
            <div><Output task={task} setTask={setTask}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
