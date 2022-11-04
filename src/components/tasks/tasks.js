import React, { useState } from "react";
import { Divider } from "@mui/material";
import DrawerPage from "../drawer";
import { dateContext } from "../context/ContextDate";
import data from "../../json/data";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import DateMenu from "../jalasatRozane/dateMenu";
import "./tasks.css";
import { createTheme, styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { height } from "@mui/system";
import ContentTask from "./contentTask";
import Clock from "./clock";
export default function Tasks() {
  const { selectedMeeting, selectedDate } = React.useContext(dateContext);
  const CustomTextInput = styled(TextField)({
    "&.MuiTextField-root": {
      width: "250px",
      color: "rgb(17, 2, 102)",
      justifyContent: "center",
      marginTop: "30px",
      Animation,
    },
    "&.MuiInputBase": {
      root: {
        height: "200px",
      },
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#359DFD",
    },
    "& label.Mui-focused": {
      borderLeftWidth: 5,
      color: "#359DFD",
    },
    "& label": {
      borderLeftWidth: 5,
      color: "  rgb(141, 133, 133)",
    },
  });
  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div className="containerTasks">
        <DrawerPage />
        <div className="rightContentTasks">
          <div className="rightTopTasks">
            {" "}
            <p className="title">تسک ها</p>
          </div>
          <CustomTextInput
            className="inputTitle"
            dir="rtl"
            label="عنوان"
            color="info"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
          />
          <CustomTextInput
            className="inputTitle"
            dir="rtl"
            label="توضیحات"
            color="info"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              style: {
                height: 150,
              },
            }}
          />
          <Clock />
          <button className="submitTask"> ثبت</button>
        </div>
        <div className="leftTasks">
          <DateMenu className="dateMenuTasks" />
          <ContentTask style={{ color: "blue" }} />
        </div>
      </div>
    </ThemeProvider>
  );
}
