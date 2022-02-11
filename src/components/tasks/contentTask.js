import React, { useState, useContext } from "react";

import taskData from "../../json/taskData";
import "./contentTask.css";
import { dateContext } from "../context/ContextDate";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import deleteIcon from "../../img/delete.svg";
import { from } from "stylis";
import zIndex from "@mui/material/styles/zIndex";
function ContentTask() {
  const { selectedDate } = useContext(dateContext);
  const [selectedTask, setSelectedTask] = useState([]);
  const handleChange = (e, i) => {
    selectedTask.push(i);
    console.log("index", selectedTask);
  };

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      {taskData[selectedDate].tasks.map((item, index) => (
        <div
          className="contentTask"
          // style={{
          //   backgroundColor:
          //     selectedTask == true && selectedIndex == index ? "#e0e4e6" : null,
          // }}
        >
          <div className="first">
            <p>{item.title}</p>
            <p className="desTask">{item.description}</p>
          </div>
          <div className="second">
            <p>{item.time}</p>
          </div>

          <div className="third">
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) => handleChange(e, index)}
            />
            <img src={deleteIcon} className="deleteIcon"></img>
          </div>
        </div>
      ))}
    </ThemeProvider>
  );
}

export default ContentTask;
