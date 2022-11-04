import DrawerPage from "../drawer";
import { Link } from "react-router-dom";
import "./Weekly.css";
import WeeklyTable from "./WeeklyTable";
import MenuFilter from "../jalasatRozane/menu";

function Weekly() {
  return (
    <div className="containermeeting1">
      <div className="contentmeeting1">
        <WeeklyTable />
        <MenuFilter className="MenuFilter" />
        <nav className="addMeetingweekly">
          <Link to={`/MackeMeeting`}>
            <button className="addMeetingweekly"> + ساخت جلسه</button>
          </Link>
        </nav>
      </div>
      <DrawerPage />
    </div>
  );
}

export default Weekly;
