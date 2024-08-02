import React from 'react'
import { IoIosCheckbox } from "react-icons/io";


const Deleted = ({deletedTask}) => {
  return (
    <div>
      {deletedTask.map((deletedTask)=>(
        <div className='px-3 py-1 bg-slate-200 mt-2 mx-2 flex items-center'>
         <span> <IoIosCheckbox  /> </span>
          <span className='pl-2'>{deletedTask.inputTask }</span>
          <span></span>
          </div> 
        
      ))}
    </div>
  )
}

export default Deleted