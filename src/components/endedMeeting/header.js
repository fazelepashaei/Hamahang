import React, { useState } from "react";
import data from "../../json/data";
import "./header.css";
import { dateContext } from "../context/ContextDate";

export default function Header() {
  const { selectedMeeting, selectedDate } = React.useContext(dateContext);

  return (
    <div className="header">
      <p>کد: {data[selectedDate].Meeting[selectedMeeting].Code}</p>
      <p>درجه {data[selectedDate].Meeting[selectedMeeting].Degree} - محرمانه</p>
    </div>
  );
}
