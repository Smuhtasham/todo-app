import React from 'react'
import TodoInput from './TodoInput';

const Todomodel = ({task,setTask,setTodoModel,isVisible}) => {
    if(!isVisible) return null;
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
          <div className="bg-white  rounded flex flex-col py-8 px-4">
            <div className=" flex justify-between px-2 pb-2 ">
              <div>Please add your task:</div>{" "}
              <div>
                <button className="text-black text-lg" onClick={()=>setTodoModel(false)}>X</button>
              </div>
            </div>
            <div className="px-2"><TodoInput setTask={setTask} task={task}/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todomodel