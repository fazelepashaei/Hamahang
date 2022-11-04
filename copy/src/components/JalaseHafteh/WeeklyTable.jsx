import * as React from "react";
import "./WeeklyTable.css";
import DataProject from "../DataHamahang";
import { color } from "@mui/system";
import moment from "jalali-moment";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { utils } from "react-modern-calendar-datepicker";
import * as shamsi from "shamsi-date-converter";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { red } from "@mui/material/colors";

let Times = [
  "صبح ۸",
  "۹ صبح",
  " ۱۰ صبح",
  "۱۱ صبح",
  " ۱۲ صبح",
  "۱ ظهر",
  "۲ ظهر",
  "۳ ظهر",
  "۴ ظهر",
  "۵ ظهر",
  "۶ ظهر",
  "۷ ظهر",
  "۸ ظهر",
];
export default function WeeklyTable() {
  var day = new Date();
  const options = { year: "numeric", month: "long", timeZone: "Asia/Kolkata" };
  const today = day.toLocaleDateString("fa-IR", options);
  const options1 = {
    year: "numeric",
    month: "long",
    timeZone: "Asia/Kolkata",
  };
  const today1 = day.toLocaleDateString("en-IN", options1);
  const optionsDay = { day: "numeric", timeZone: "Asia/Kolkata" };
  const DAYweek = day.toLocaleDateString("fa-IR", optionsDay);
  const sampleday = new Date();
  const sampletime = sampleday.getDate();
  sampleday.setDate(sampletime - 20);
  const mmm = sampleday.getDate();
  var daysample2 = moment().day();
  var m = moment().day();
  var todayDate = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <div className="containerDate">
        <div>
          <p
            className="FontWeek2"
            style={{ fontSize: "25px", marginRight: "10%" }}
          >
            {today}
          </p>
        </div>
        <div>
          <p className="FontWeek2">{today1}</p>
        </div>
      </div>
      <div className="containerTable">
        <div className="containerTableDayName">
          {DataProject.map((item) => (
            <div className="dayPosition">
              {item.DateDayshamssi === DAYweek ? (
                <div>
                  <div className="FontWeek2">
                    {item.Day}
                    <br></br>
                    {item.DateDayshamssi}
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <div className="FontWeek2">
                      {item.Day}
                      <br></br> {item.DateDayshamssi}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="containerChart">
          {DataProject.map((item) => (
            <div className="containerChartItem">
              {item.Meeting.map((Meet) => {
                return (
                  <div className="containerMeet">
                    <div className="meetColumn"></div>

                    <div className="FontWeek2">
                      {Meet === null ? (
                        <div style={{ backgroundColor: "#FAFAFA" }}></div>
                      ) : (
                        <div>
                          {Meet.subject === "جلسه منشی ها" ? (
                            <div
                              className="FontWeek2"
                              style={{
                                backgroundColor: "#EEFFF8",
                                fontSize: "10px",
                              }}
                            >
                              <div>{Meet.subject}</div>
                            </div>
                          ) : Meet.subject === "جلسه هیئت مدیره" ? (
                            <div className="subject2">
                              <div className="subject21" className="FontWeek2">
                                {Meet.subject}
                              </div>
                            </div>
                          ) : (
                            <div
                              style={{
                                backgroundColor: "#E7D2D8",
                              }}
                            >
                              <div
                                className="FontWeek2"
                                style={{ fontSize: "10px" }}
                              >
                                {Meet.subject}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <div>
            {Times.map((item) => {
              return (
                <div>
                  <div
                    style={{
                      backgroundColor: "white",
                      marginBottom: "55px",
                    }}
                  >
                    <p style={{ fontSize: "12px" }}>{item}</p>
                  </div>
                  {/* <div
                    style={{
                      width: "30px",
                      height: "1px",
                      backgroundColor: "gray",
                      // marginTop: "10px",
                    }}
                  ></div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
