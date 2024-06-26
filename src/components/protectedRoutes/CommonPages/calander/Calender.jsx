import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className="flex items-center justify-between p-2 bg-yellow-700 text-white">
      <button
        onClick={prevMonth}
        className="text-base md:text-lg font-bold focus:outline-none"
      >
        {"<"}
      </button>
      <div>{format(currentMonth, "MMMM yyyy")}</div>
      <button
        onClick={nextMonth}
        className="text-base md:text-lg font-bold focus:outline-none"
      >
        {">"}
      </button>
    </div>
  );

  const renderDays = () => (
    <div className="grid grid-cols-7 bg-gray-300 text-gray-800 font-semibold">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
        <div key={index} className="text-center p-2">
          {day}
        </div>
      ))}
    </div>
  );

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-full ${
              !isSameMonth(date, monthStart)
                ? "text-gray-400"
                : "text-gray-900 font-semibold"
            } ${isSameDay(date, new Date()) ? "bg-blue-500 text-white" : ""}`}
          >
            {format(date, "d")}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="text-[14px] lg:text-base max-w-[400px]  mx-auto mb-5 bg-white rounded shadow">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
