import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Divider } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../Themes/normalFont";
import "./timeLine.css";
function TimeLine() {
  const time = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
  let today = new Date()
    .toLocaleDateString("fa-IR")
    .replace(/([۰-۹])/g, (token) =>
      String.fromCharCode(token.charCodeAt(0) - 1728)
    );
  console.log(today);
  if (today == "1400/9/25") {
    console.log("triiiiiiiiiiiii");
  }
  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div>
        <Timeline position="left" className="timeline">
          {time.map((t) => (
            <TimelineItem>
              <TimelineContent color="text.secondary">{t}</TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </ThemeProvider>
  );
}
export default TimeLine;
