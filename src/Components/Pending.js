import React, { useState } from 'react'
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const Pending = ({task,setTask,setDeletedTask,setCompletedTask}) => {


  const [check,setCheak]=useState("false");

const pen="Pending";
// const del="Deleted"
// const com="Completed"
const Delete=(id)=>{

  const deleted=task.filter((val)=>val.id == id);
  setDeletedTask(deleted);

  const filtered = task.filter((val) => val.id !== id);
  setTask(filtered); 
}
const Completed=(id)=>{

  const completed =task.filter((val)=>val.id == id);
  console.log(completed)
  setCompletedTask(completed);

  const filtered = task.filter((val) => val.id !== id);
  setTask(filtered); 
}


  return (
    <div>
      {task.map((task,index)=>(
        <div key={index}  className='px-3 py-1 bg-slate-200 mt-2 mx-2 flex items-center'>
         <span><MdOutlineCheckBoxOutlineBlank onClick={()=> Completed(task.id)}/> </span>
          <span className='pl-2'>{task.status==pen && task.inputTask }</span>
          <span><MdDelete className='' onClick={()=> Delete(task.id)} /></span>
          </div> 
        
      ))}
    </div>
  )
}

export default Pending