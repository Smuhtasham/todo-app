import React, { useState } from "react";
import Model from "./Model";
import Calender from "./Calender";
import { GrAddCircle } from "react-icons/gr";
import Todomodel from "./Todomodel";
import TaskModel from "./TaskModel";

const Main = () => {
  const [task, setTask] = useState([]);
  const [model, setModel] = useState(false);
  const [todoModel, setTodoModel] = useState(false);
  const [taskModel, setTaskModel] = useState(false);


  const pen = "Pending";
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[100vh]">
        <div className="w-[90%] m-auto flex items-center py-7">
          <div className="bg-black w-[30%] pl-2s text-white min-h-[90vh]">
            <div className=" px-4 pt-4 flex">
              <div className="text-7xl">{date}</div>
              <div className="flex flex-col pt-3 text-xl">
                <div>{month}</div>
                <div>{year}</div>
              </div>
            </div>

            <div className="pl-4 pt-2 w-[95%] flex flex-col gap-2  min-h-[30vh] overflow-y-auto ">
              <div className=" flex items-center justify-between text-3xl pt-2">
                <div>Todo</div>
                <div>
                  <GrAddCircle
                    className="cursor-pointer"
                    size="2rem"
                    onClick={() => setTodoModel(true)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 max-h-[28vh] overflow-y-auto">
                <div>
                  {task.map((task, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1 bg-slate-500 mt-2 mx-2 flex items-center ${
                         task.date === undefined 
                        
                          ? `bg-slate-500`
                          : `hidden`
                      }`}
                    >
                      <span className="pl-2">
                        {task.status == pen && task.inputTask}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2 px-4 ">
              <div className="text-2xl flex items-center justify-between">
                <div>Schedule Tasks</div>
                <div>
                  <GrAddCircle
                    className="cursor-pointer"
                    size="2rem"
                    onClick={() => setModel(true)}
                  />
                </div>
              </div>
              <div className="flex gap-1 flex-col max-h-[23vh] overflow-y-auto ">
                {task.map((task, index) => (
                  <div
                    key={index}
                    className={`w-[100%] px-1 flex flex-wrap  justify-between ${
                     task.data !== "" && task.date !== undefined ? `bg-slate-500` : `hidden`
                    }`}
                  >
                    {" "}
                    <div>
                      <span>
                        {task.status == pen && task.date !== "" && task.id}
                        {")"}
                      </span>

                      <span className="pl-2">
                        {task.status == pen &&
                          task.date !== "" &&
                          task.inputTask}
                      </span>
                    </div>
                    <div>
                      <span className="px-1 text-sm">
                        {"Time:"}
                        {task.time}
                      </span>
                      <span className="px-1 text-sm">
                        {"Date:"}
                        {task.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-[70%] min-h-[90vh] bg-gray-900 text-white">
            <div>
              <Calender
                setTaskModel={setTaskModel}
                task={task}
                isVisible={taskModel}
              />
            </div>
          </div>
        </div>
      </div>


      <Todomodel
        task={task}
        setTask={setTask}
        isVisible={todoModel}
        setTodoModel={setTodoModel}
      />

      <TaskModel
        task={task}
        setTask={setTask}
        isVisible={taskModel}
        setTaskModel={setTaskModel}
      />

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
