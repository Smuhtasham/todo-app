import React, { useState } from "react";
import Output from "./Output";
import TaskInput from "./TaskInput";
import Model from "./Model";

const Main = () => {
  const [task, setTask] = useState([]);

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[100vh]">
        <div className="w-[90%] m-auto flex items-center py-7">
          <div className="bg-black w-[30%] pl-3 text-white min-h-[90vh]">
            
            <div className=" px-4 pt-4 flex">
              <div className="text-7xl">29</div>
              <div className="flex flex-col pt-3 text-xl">
                <div>Month</div>
                <div>Year</div>
              </div>
            </div>
            
            <div className="pl-4 pt-2 w-[95%] flex flex-col gap-2 border-2 border-white !min-h-[30vh] overflow-y-auto ">
              <div className="text-3xl pt-2">Todo</div>
              <div className="flex flex-col gap-1 min-h-[30vh] overflow-y-auto">
              <div className="px-2">Data</div>          
              
              </div>
            </div>

            <div className="flex flex-col gap-2  px-4 ">
              <div className="text-3xl pt-2">Shedule</div>
              <div>data</div>
              <div>data</div>
              <div>data</div>
              </div>
          </div>

          <div className="bg-slate-600 w-[70%] min-h-[90vh] text-white">
            <div className="p-4 text-sm">CALENDAR</div>
            </div>
        </div>
      </div>

      {/* <Model task={task} setTask={setTask}/> */}
    </>
  );
};

export default Main;
