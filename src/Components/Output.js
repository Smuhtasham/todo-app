import React, { useState } from 'react'
import Pending from './Pending';
import Completed from './Completed';
import Deleted from './Deleted';

const Output = ({task,setTask}) => {

  const[deletedTask,setDeletedTask]= useState([]);
  const[completedTask,setCompletedTask]= useState([]);
  const [toggle, setToggle] = useState("Pending");


  return (
    <>
     <div className="flex flex-col h-[398px] w-[90%] bg-white rounded-lg">
            <div className='flex  pl-5 pr-5 justify-between pt-2 border-b-2 cursor-pointer'>
              <div  onClick={() => setToggle("Pending")}>Pending</div>
              <div onClick={() => setToggle("Completed")}>Completed</div>
              <div onClick={() => setToggle("Deleted")}>Deleted</div>
            </div>
            <div className='min-h-[30vh] overflow-y-auto'>
          {toggle === "Pending" &&
           <Pending 
           task={task} 
           setTask={setTask}
          setDeletedTask={setDeletedTask}
          setCompletedTask={setCompletedTask}
            />}

          {toggle === "Completed" && 
          <Completed 
          task={task} 
          setTask={setTask} 
          completedTask={completedTask}
          />}

          {toggle === "Deleted" &&
           <Deleted
            deletedTask={deletedTask} 
             task={task} 
             setTask={setTask} />}
        </div>
    </div>
    </>
  )
}

export default Output