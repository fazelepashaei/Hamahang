import React, { useState } from "react";
import {
  Button,
  Input,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import { TimePicker } from "material-ui-time-picker";
//import TimePicker from "@mui/lab/TimePicker";
import AccessTime from "@material-ui/icons/AccessTime";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import "./NotificationAlarmClock.css";
// let NotificationArray = [];
function NotificationAlarmClock() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("10:10");
  const [notifarray, setnotifarray] = useState([]);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => {
    setIsOpen(false);
    console.log("v", value);
    setnotifarray([...notifarray, value]);
    console.log("notif", notifarray);
    // NotificationArray.push(value);
    // console.log("array", NotificationArray);
    return (
      <div>
        <p>{notifarray[0]}</p>
      </div>
    );
  };

  const handleDialogTimeChange = (newValue) => {
    const hours = newValue.getHours().toString().padStart(2, "0");
    const minutes = newValue.getMinutes().toString().padStart(2, "0");
    const textValue = hours + ":" + minutes;
    setValue(textValue);
    console.log("v", newValue);
  };
  const handleKeyboardTimeChange = (event) => setValue(event.target.value);

  const createDateFromTextValue = (value) => {
    const splitParts = value.split(":");
    return new Date(1970, 1, 1, splitParts[0], splitParts[1]);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#11cb5f",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <div
          className="containdiv"
          style={{
            flexdirection: "row",
            display: "flex",
          }}
        >
          {notifarray.map((item) => {
            return (
              <div>
                <div
                  style={{
                    color: "black",
                    backgroundColor: "gray",
                    width: "50px",
                    height: "30px",
                    borderRadius: 5,
                    marginLeft: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <div style={{ textAlign: "center", paddingTop: "5px" }}>
                    {item}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button
          className="BU"
          onClick={openDialog}
          // color="white"
          variant="contained"
        >
          اضافه کردن اعلان
        </Button>

        <Dialog open={isOpen}>
          <TimePicker
            className="TimePicker-header"
            mode="24h"
            value={createDateFromTextValue(value)}
            onChange={handleDialogTimeChange}
          />
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              ثبت
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default NotificationAlarmClock;
