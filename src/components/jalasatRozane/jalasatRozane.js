import { Link } from "react-router-dom";
import "./jalasatRozane.css";
import DrawerPage from "../drawer";
import MenuFilter from "./menu";
import TimeLine from "./timeLine";
import DateMenu from "./dateMenu";
import { Divider } from "@mui/material";
import ContentJalasat from "./contentJalasat.js";

function JalasaRozane() {
  return (
    <div className="jalasat2">
      <div className="containerRozane">
        <div className="topRozane">
          <MenuFilter className="MenuFilter" />

          <DateMenu className="dateMenu" />
        </div>
        <Divider style={{ width: "100%", height: "6px" }} />
        <div className="contentRozane">
          <TimeLine />
          <ContentJalasat />
          <nav className="addMeeting">
            <Link to={`/MackeMeeting`}>
              <button className="addMeeting"> + ساخت جلسه</button>
            </Link>
          </nav>
        </div>
      </div>
      <DrawerPage />
    </div>
  );
}

export default JalasaRozane;
