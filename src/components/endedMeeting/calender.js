import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./calender.css";
import { dateContext } from "../context/ContextDate";
import data from "../../json/data";

export default function Calender() {
  const { selectedMeeting, selectedDate } = React.useContext(dateContext);

  const [selectedDay, setSelectedDay] = useState(data[selectedDate].DateDay);
  const calenderDay = selectedDay.split("/");
  const defaultFrom = {
    year: parseInt(calenderDay[0]),
    month: parseInt(calenderDay[1]),
    day: parseInt(calenderDay[2]),
  };
  console.log("sfsdf", typeof parseInt(calenderDay[0]));
  return (
    <Calendar
      value={defaultFrom}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa" // add this
      colorPrimary="#0fbcf9" // added this
      calendarClassName="calender"
      calendarTodayClassName="custom-today-day"
    />
  );
}
