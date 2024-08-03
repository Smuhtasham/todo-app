import React from "react";

const Completed = ({ completedTask }) => {


  console.log(completedTask)
  return (
    <div>
      
      {
      completedTask.map((completedTask) => (
        <div className="px-3 py-1 text-black bg-slate-200 mt-2 mx-2 flex items-center">
          <span className="pl-2">{completedTask.inputTask}</span>
        </div>
      ))}
    </div>
  );
};

export default Completed;
