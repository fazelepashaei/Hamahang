import DrawerPage from "./drawer";
import MenuFilter from "./menu";
import "./AddMemberMeeting.css";
import TimeLine from "./timeLine";
import DateMenu from "./dateMenu";
import { Divider } from "@mui/material";
import ContentJalasat from "./contentJalasat.js";
import WeeklyTable from "./WeeklyTable";
import NotificationAlarm from "./NotiFicationAlarmManager/NotificationAlarm";
import NotificationAlarmClock from "./NotiFicationAlarmManager/NotificationAlarmClock";

import EndedMeeting from "./endedMeeting/endedMeeting";

function AlaramManagement() {
  return (
    <div className="page">
      <div className="content2">
        <NotificationAlarm />
        {/* <NotificationAlarmClock /> */}
      </div>
      {/* <DrawerPage /> */}
    </div>
  );
}

export default AlaramManagement;
