import DrawerPage from "../drawer";

import "./Weekly.css";
import WeeklyTable from "./WeeklyTable";

function Weekly() {
  return (
    <div className="containermeeting1">
      <div className="contentmeeting1">
        <WeeklyTable />

        <button className="addMeetingweekly"> + ساخت جلسه</button>
      </div>
      <DrawerPage />
    </div>
  );
}

export default Weekly;
