import React from "react";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import ContentAttachFileMeeting from "../ContentAttachFileMeeting";
import "../SakhteJalase/UploadMeetingFile.css";
const UploadMeetingFile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      {/* <div style={{ width: "100%" }}></div> */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <div>
          <Button
            className="button"
            variant="outlined"
            component="span"
            onClick={handleOpen}
            // color="palette.text.primary"
          >
            + فایل پیوست
          </Button>
        </div>
      </label>
      <div>{open === true ? <ContentAttachFileMeeting /> : null}</div>
      {/* <ContentAttachFileMeeting /> */}
    </div>
  );
};

export default UploadMeetingFile;
