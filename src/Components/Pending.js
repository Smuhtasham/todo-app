import React, { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Pending = ({
  task,
  setTask,
  setDeletedTask,
  setCompletedTask,
  filter,
}) => {
  const [check, setCheak] = useState("false");
  console.log(typeof filter);

  const pen = "Pending";
  // const del="Deleted"
  // const com="Completed"
  const Delete = (id) => {
    const deleted = task.filter((val) => val.id == id);
    setDeletedTask(deleted);

    const filtered = task.filter((val) => val.id !== id);
    setTask(filtered);
  };
  const Completed = (id) => {
    const completed = task.filter((val) => val.id == id);
    console.log(completed);
    setCompletedTask(completed);

    const filtered = task.filter((val) => val.id !== id);
    setTask(filtered);
  };

  const filterdate = task.filter(
    (val) =>
      new Date(val.timeDate) > new Date(filter) &&
      new Date(val.timeDate) <
        new Date(new Date(filter).setDate(new Date(filter).getDate() + 1))
  );
  console.log({ filter, task });
  return (
    <div>
      {filterdate.map((task, index) => (
        <div
          key={index}
          className={`px-3 py-1 bg-slate-200 text-black mt-2 mx-2 flex justify-between flex-wrap
      ${filter ? "" : "hidden"}`}
        >
          <div className="flex items-center">
            <span>
              <MdOutlineCheckBoxOutlineBlank
                onClick={() => Completed(task.id)}
              />{" "}
            </span>
            <span className="pl-2">{task.status == pen && task.inputTask}</span>
          </div>
          <div className="flex items-center">
            <span className="p-2 ">{task.time}</span>{" "}
            <span className="px-2">{task.date}</span>
            <span>
              <MdDelete className="" onClick={() => Delete(task.id)} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pending;
