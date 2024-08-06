import React, { useEffect, useState } from "react";

const Calendar = ({ task, setTaskModel, setFilter }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const highlightedDates = task.map(task => new Date(task.date).getDate());
  
  const d = new Date();
  let g = d.getDate();

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(new Date(year, month, i));
    }
    setDays(daysArray);
  };

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getMonthName = (monthIndex) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthIndex];
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };
console.log({days})
  return (
    <>
      <h1 className="font-bold p-3 mb-4">CALENDAR</h1>
      <div className="text-center">
        <div className="flex items-center justify-between px-14">
          <button
            className="border-2 border-white text-white px-2 py-1 rounded"
            onClick={handlePrevMonth}
          >
            Previous
          </button>
          <div>
            <h2 className="text-3xl font-bold">
              {getMonthName(currentDate.getMonth())}
            </h2>
            <h3 className="text-2xl">{currentDate.getFullYear()}</h3>
          </div>
          <button
            className="border-2 border-white text-white px-6 py-1 rounded"
            onClick={handleNextMonth}
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-6 pt-6">
          {daysOfWeek.map((day, i) => (
            <div key={i} className="text-sm font-bold">
              {day}
            </div>
          ))}
          {days.map((date, i) => (
            <div
              key={i}
              className={`h-8 mr-3 flex items-center justify-center rounded-full cursor-pointer ${
                date && highlightedDates.includes(date.getDate())
                  ? 'bg-red-400'
                  : 'bg-transparent'
              } ${date && g === date.getDate() ? "border border-slate-100" : ""}`}
              onClick={() => {
                if (date) {
                  setTaskModel(true);
                  setFilter(date);
                }
              }}
            >
              {date ? date.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
