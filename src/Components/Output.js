import React, { useState } from 'react'
import Pending from './Pending';
import Completed from './Completed';
import Deleted from './Deleted';

const Output = () => {
  const [toggle, setToggle] = useState("Pending");


  return (
    <>
     <div className="flex flex-col h-[398px] w-[35%] bg-white rounded-lg">
            <div className='flex  pl-5 pr-5 justify-between pt-2 border-b-2 cursor-pointer'>
              <div  onClick={() => setToggle("Pending")}>Pending</div>
              <div onClick={() => setToggle("Completed")}>Completed</div>
              <div onClick={() => setToggle("Deleted")}>Deleted</div>
            </div>
            <div>
          {toggle === "Pending" && <Pending   />}
          {toggle === "Completed" && <Completed  />}
          {toggle === "Deleted" && <Deleted   />}
        </div>
    </div>
    </>
  )
}

export default Output