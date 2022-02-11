import data from "../json/data";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { dateContext } from "./context/ContextDate";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../Themes/normalFont";
import "./contentJalasat.css";
import { borderRadius } from "@mui/system";
export default function ContentJalasat() {
  const { selectedMeeting, setSelectedMeeting, selectedDate } =
    React.useContext(dateContext);
  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />

      <Box
        style={{
          flexDirection: "column",
          display: "flex",
          paddingLeft: "1%",
          marginRight: "1%",
        }}
      >
        {/* {date[selectedMeeting].Meeting.filter(
          (j) =>
            j !=
            null.map((i) => ( */}
        {data[selectedDate].Meeting.map((item, index) => (
          <div>
            {item == null ? (
              <div className="meetingRowNull">
                <p style={{ color: "#366A3A" }}></p>
              </div>
            ) : (
              <div className="meetingRow">
                <div
                  style={{
                    backgroundColor:
                      item.Degree == "1"
                        ? "#E01E5A"
                        : item.Degree == "2"
                        ? "#FFD633"
                        : "#3BE64C",
                    height: "34px",

                    padding: "2px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                ></div>

                <p style={{ width: "4%", color: "#366A3A" }}>{item.Degree}</p>
                <p style={{ width: "30%", color: "#366A3A" }}>{item.subject}</p>
                <p style={{ width: "80%", color: "#366A3A" }}>{item.caption}</p>
                <nav>
                  <Link
                    to={`/EndedMeeting/`}
                    style={{ textDecoration: "inherit" }}
                  >
                    <p
                      style={{
                        marginRight: "260px",
                        marginLeft: "30px",
                        marginBottom: "35px",
                        fontSize: "24px",
                      }}
                      onClick={() => {
                        setSelectedMeeting(index);
                      }}
                    >
                      ...
                    </p>
                  </Link>
                </nav>
              </div>
            )}
          </div>
        ))}

        <Divider />
      </Box>
    </ThemeProvider>
  );
}
