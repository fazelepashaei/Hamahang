import DrawerPage from "./drawer";
import MenuFilter from "./menu";
import "./jalasat.css";
import TimeLine from "./timeLine";
import DateMenu from "./dateMenu";
import { Divider } from "@mui/material";
import ContentJalasat from "./contentJalasat.js";
import WeeklyTable from "./JalaseHafteh/WeeklyTable";
import NotificationAlarm from "./NotiFicationAlarmManager/NotificationAlarm";
import EndedMeeting from "./endedMeeting/endedMeeting";

function Jalase() {
  return (
    <div className="jalasat2">
      <div className="container">
        <div className="top">
          {/* <DateMenu className="dateMenu" /> */}

          <MenuFilter className="MenuFilter" />
        </div>
        <Divider style={{ width: "100%", height: "6px" }} />

        <div className="content">
          {/* <ContentJalasat /> */}
          <WeeklyTable />
          {/* <NotificationAlarm /> */}
          {/* <TimeLine /> */}
          <button className="addMeeting"> + ساخت جلسه</button>
        </div>
      </div>
      <DrawerPage />
    </div>
  );
}

export default Jalase;
