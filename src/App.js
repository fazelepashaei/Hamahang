import DrawerPage from "./components/drawer";
import { CacheProvider } from "@emotion/react";
// import ShomareSerial from "./components/shomareSerial";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
// import LocalStorage from "./components/localStorage";
// import ShomareTamas from "./components/shomareTamas";
// import CodeTaeid from "./components/codeTaeid";
// import TaeinRamz from "./components/taeinRamz";
// import MenuFilter from "./components/menu";
// import EndedMeeting from "./components/endedMeeting/endedMeeting";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Jalasat from "./components/jalasat";
// import Tasks from "./components/tasks/tasks";
import Secretary from "./components/secretary/secretary";
// import AppTestt from "./test";
import Informe from "./components/informe/informe";

////////////////////////////////////////////////////////////////
// import WeeklyTable from "./components/WeeklyTable";
// import CallMap from "./components/SakhteJalase/CallMap";
// import ContentTopMeeting from "./components/SakhteJalase/ContentTopMeeting";
// import UploadMeetingFile from "./components/SakhteJalase/UploadMeetingFile";
// import AddMemberMeeting from "./components/SakhteJalase/AddMemberMeeting";
// import MemberMeeting from "./components/MemberMeeting";
// import ContentAttachFileMeeting from "./components/ContentAttachFileMeeting";

import Welcome from "./components/logIn/Welcome";
import SerialNumberPage from "./components/logIn/SerialNumber";
import CallNumber from "./components/logIn/CallNumber";
import NotificationAlarm from "./components/NotiFicationAlarmManager/NotificationAlarm";
// import NotificationAlarmClock from "./components/NotiFicationAlarmManager/NotificationAlarmClock";
import MackeMeeting from "./components/SakhteJalase/MakeMeeting";
// import AlaramManagement from "./components/AlaramManagement";
import Weekly from "./components/JalaseHafteh/Weekly";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});
function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Jalasat />} />
            <Route path="EndedMeeting" element={<EndedMeeting />} />
            <Route path="Tasks" element={<Tasks />} />
            <Route path="Secretary" element={<Secretary />} />
            <Route path="Informe" element={<Informe />} /> */}
            {/* <Route path="/" element={<WeeklyTable />} /> */}

            {/* <Route path="/" element={<NotificationAlarm />} /> */}
            {/* <Route path="/" element={<NotificationAlarmClock />} /> */}
            {/* <Route path="/" element={<Welcome />} />
            <Route path="Serial" element={<SerialNumberPage />} />
            <Route path="Call" element={<CallNumber />} /> */}
            <Route path="/" element={<Weekly />} />
            {/* <Route path="/" element={<MackeMeeting />} /> */}
            {/* <Route path="/" element={<NotificationAlarm />} /> */}
            {/* <Route path="/" element={<Josh1 />} /> */}
          </Routes>
        </BrowserRouter>
        {/* <AppTestt /> */}
      </div>
    </CacheProvider>
  );
}
// import WeeklyTable from "./components/WeeklyTable";
// import CallMap from "./components/CallMap";
// import ContentTopMeeting from "./components/ContentTopMeeting";
// import UploadMeetingFile from "./components/UploadMeetingFile";
// import AddMemberMeeting from "./components/AddMemberMeeting";
// import MemberMeeting from "./components/MemberMeeting";
// import ContentAttachFileMeeting from "./components/ContentAttachFileMeeting";
// import NotificationAlarm from "./components/NotificationAlarm";
// import NotificationAlarmClock from "./components/NotificationAlarmClock";

// import Josh1 from "./components/Josh1";
// function App() {
//   const cacheRtl = createCache({
//     key: "muirtl",
//     stylisPlugins: [rtlPlugin],
//   });
//   return (
//     <CacheProvider value={cacheRtl}>
//       <div>
//         {/* <WeeklyTable></WeeklyTable> */}
//         {/* <CallMap></CallMap> */}
//         {/* <ContentTopMeeting></ContentTopMeeting> */}
//         {/* <UploadMeetingFile></UploadMeetingFile> */}
//         {/* <ContentAttachFileMeeting></ContentAttachFileMeeting> */}
//         {/* <AddMemberMeeting></AddMemberMeeting> */}
//         {/* <MemberMeeting></MemberMeeting> */}
//         {/* <NotificationAlarm></NotificationAlarm> */}
//         {/* <NotificationAlarmClock></NotificationAlarmClock> */}
//         <Josh1></Josh1>
//       </div>
//     </CacheProvider>
//   );
// }
export default App;
