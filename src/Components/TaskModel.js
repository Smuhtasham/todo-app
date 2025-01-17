import React from 'react'
import Output from './Output'

const TaskModel = ({task,setTask,setTaskModel,isVisible,filter}) => {
    if(!isVisible) return null;
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div className="w-[550px]">
          <div className="bg-slate-600 text-white pl-6  rounded flex flex-col py-4">
            <div className=" flex justify-between  pl-1 pr-6">
              <div>Your Tasks:</div>{" "}
              <div>
                <button className=" text-lg" onClick={()=>setTaskModel(false)}>X</button>
              </div>
            </div>
            <div className=" "><Output setTask={setTask} task={task} filter={filter}/></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default TaskModel;