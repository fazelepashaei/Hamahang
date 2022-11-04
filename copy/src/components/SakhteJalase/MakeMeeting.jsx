import DrawerPage from "../drawer";
import "./MackeMeeting.css";
import CallMap from "./CallMap";
import Clock from "../tasks/clock";
import ContentTopMeeting from "./ContentTopMeeting";
import NotificationAlarmClock from "../NotiFicationAlarmManager/NotificationAlarmClock";
import UploadMeetingFile from "./UploadMeetingFile";
import AddMemberMeeting from "./AddMemberMeeting";
import ModernCalender from "./ModernCalender";
import Bluekadr from "./Bluekdr";
function MackeMeeting() {
  return (
    <div className="containerfirst">
      <div className="contenttwo">
        <ContentTopMeeting></ContentTopMeeting>
        <UploadMeetingFile></UploadMeetingFile>
        <AddMemberMeeting></AddMemberMeeting>
      </div>
      <div className="content">
        <Bluekadr></Bluekadr>
        <div className="calendrdiv">
          <ModernCalender></ModernCalender>
        </div>
        <Clock />
        <CallMap />
      </div>

      <DrawerPage />
    </div>
  );
}

export default MackeMeeting;
