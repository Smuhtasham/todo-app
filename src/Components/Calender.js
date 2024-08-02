import React, { useEffect, useState } from 'react'

const Calender = ({setModel}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push("");
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
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
                      className={` h-8 flex items-center justify-center rounded-full cursor-pointer
                      }`}
                      onClick={() => setModel(true)}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              </div>
    </>
  )
}

export default Calender