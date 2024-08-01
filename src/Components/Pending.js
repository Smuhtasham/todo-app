import React from 'react'
import { IoIosCheckbox } from "react-icons/io";


const Pending = ({task,setTask}) => {




  return (
    <div>
      {task.map((task)=>(
        <div className='px-3 py-1 bg-slate-200 mt-2 mx-2 flex items-center'>
         <span> <IoIosCheckbox /> </span>
          <span className='pl-2'>{task.inputTask}</span>
          </div> 
        
      ))}
    </div>
  )
}

export default Pending