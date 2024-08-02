import React, { useEffect, useState } from "react";
import Output from "./Output";
import TaskInput from "./TaskInput";
import Model from "./Model";
import Calender from "./Calender";

const Main = () => {
  const [task, setTask] = useState([]);
  const [model, setModel] = useState(false);

const pen="Pending";

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[100vh]">
        <div className="w-[90%] m-auto flex items-center py-7">
          <div className="bg-black w-[30%] pl-2s text-white min-h-[90vh]">
            <div className=" px-4 pt-4 flex">
              <div className="text-7xl">29</div>
              <div className="flex flex-col pt-3 text-xl">
                <div>Month</div>
                <div>Year</div>
              </div>
            </div>

            <div className="pl-4 pt-2 w-[95%] flex flex-col gap-2  !min-h-[30vh] overflow-y-auto ">
              <div className="text-3xl pt-2">Todo</div>
              <div className="flex flex-col gap-1 min-h-[30vh] overflow-y-auto">
                <div>
                  {task.map((task, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 bg-slate-500 mt-2 mx-2 flex items-center"
                    >
                  
                      <span className="pl-2">
                        {task.status == pen && task.inputTask}
                      </span>
                    
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2  px-4 ">
              <div className="text-3xl pt-2">Shedule</div>
              <div className="bg-slate-500 pl-2 py-1">data</div>
            </div>
          </div>

          <div className="flex flex-col  w-[70%] min-h-[90vh] bg-gray-900 text-white">
            <div>
              <Calender setModel={setModel} />
            </div>
          </div>
        </div>
      </div>

      <Model
        task={task}
        setTask={setTask}
        isVisible={model}
        setModel={setModel}
      />
    </>
  );
};

export default Main;
