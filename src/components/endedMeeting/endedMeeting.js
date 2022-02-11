import React, { useState } from "react";
import Calender from "./calender";
import "./endedMeeting.css";
import location from "../../img/location.svg";
import Header from "./header";
import { Divider } from "@mui/material";
import Title from "./title";
import Member from "./member";
import DrawerPage from "../drawer";
import { dateContext } from "../context/ContextDate";
import data from "../../json/data";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import ModalPeiroFile from "./modalPeiroFile";
import AttachedFile from "./attachedFile";
import Record from "./record";

export default function EndedMeeting() {
  const { selectedMeeting, selectedDate } = React.useContext(dateContext);
  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div className="containerEndedMeeting">
        <DrawerPage />
        <div className="rightContent">
          <div className="rightTop">
            <p className="title">جلسه خاتمه یافته</p>
          </div>
          <Calender />
          <div className="clock">
            <p className="clockTitle">ساعت</p>
            <p className="clockText" style={{ textAlign: "center" }}>
              {data[selectedDate].Meeting[selectedMeeting].Time}{" "}
            </p>
          </div>
          <div className="location">
            <img src={location} className="locationImg" />
            <p className="locationText">تهرانپارس - فلکه اول - خیابان بهار</p>
          </div>
          <button className="print">نسخه چاپی</button>
        </div>
        <div className="left">
          <Header />
          <Divider className="dividarEndMeeting" />
          <Title />
          <Divider className="dividarEndMeeting" />
          <AttachedFile />
          <Divider className="dividarEndMeeting3" />
          <Member />
          <Divider className="dividarEndMeeting" />

          <Record />
          <div className="footer">
            <p className="maker">
              ایجادکننده : {data[selectedDate].Meeting[selectedMeeting].Maker}
            </p>
            <p>{data[selectedDate].Meeting[selectedMeeting].DateDay}</p>
          </div>
          <ModalPeiroFile />
        </div>
      </div>
    </ThemeProvider>
  );
}
