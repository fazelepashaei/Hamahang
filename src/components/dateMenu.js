import data from "../json/data";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import "./dateMenu.css";
import { dateContext } from "./context/ContextDate";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../Themes/normalFont";
export default function DateMenu() {
  const { selectedDate, setSelectedDate, toDay, setToDay } =
    React.useContext(dateContext);
  let today = new Date()
    .toLocaleDateString("fa-IR")
    .replace(/([۰-۹])/g, (token) =>
      String.fromCharCode(token.charCodeAt(0) - 1728)
    );
  const CurentDate = () => {
    data.map((item, index) => (
      <>
        {item.DateDay == today
          ? setSelectedDate(index) + setToDay(item.Day)
          : null}
      </>
    ));
  };

  React.useEffect(() => {
    setTimeout(() => {
      CurentDate();
    }, 500);
  }, []);

  return (
    <Box className="menuContainer">
      <ThemeProvider theme={normalFont}>
        <CssBaseline />
        {console.log("todayyyyyyyyyy", toDay)}
        {data.map((item, index) => (
          <div>
            {" "}
            <button
              disablePadding
              className="dayButton"
              onClick={() => {
                setSelectedDate(index);
              }}
              style={{ color: item.DateDay == today ? "#97C9F8" : "gray" }}
            >
              {item.Day} {item.DateDay}
            </button>
          </div>
        ))}

        <Divider />
      </ThemeProvider>
    </Box>
  );
}
