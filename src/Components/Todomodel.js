import React from 'react'
import TodoInput from './TodoInput';

const Todomodel = ({task,setTask,setTodoModel,isVisible}) => {
    if(!isVisible) return null;
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[620px]">
          <div className="bg-slate-700 text-white  rounded-2xl flex flex-col py-2 gap-2 pb-6 px-4">
            
            <div className='flex justify-end'>
                <button className="text-lg" onClick={()=>setTodoModel(false)}>X</button>
              </div>
              <div className='text-lg font-semibold px-1'>Please add your task:</div>{" "}
              
            
            <div className=""><TodoInput setTodoModel={setTodoModel} setTask={setTask} task={task}/></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todomodel