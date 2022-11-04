import * as React from "react";
import Typography from "@mui/material/Typography";
import MemberData from "../json/MemberData";
import { ThemeProvider } from "@material-ui/core/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import deleteIcon from "../../src/img/delete.svg";
import "./ContetnAttachFileMeeting.css";
export default function ContentAttachFileMeeting() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
  return (
    <ThemeProvider>
      {/* <CssBaseline /> */}
      {MemberData.map((item, index) => (
        <div className="content_main">
          {/* <div> */}
          <p>{index + 1}</p>
          <div className="content_name">
            <p>{item.organization}</p>
          </div>
          <div className="content_icon">
            <img src={deleteIcon} className="deleteIcon"></img>
          </div>
        </div>
      ))}
    </ThemeProvider>
  );
}
