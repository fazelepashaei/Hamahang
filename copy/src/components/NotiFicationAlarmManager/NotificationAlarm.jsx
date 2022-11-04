import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MemberData from "../../json/MemberData";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import deleteIcon from "../../src/img/delete.svg";
import DeleteIcon from "../../img/delete.svg";
import "./NotificationAlarmAccordion.css";
import CheckBoxAlarm from "./CheckBoxAlarm";
// import "./NotificationAlarm.css";
// import ClockTimePicker from "./NotificationAlarmClock";
import NotificationAlarmClock from "./NotificationAlarmClock";
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="conatinerpage">
      {MemberData.map((item, i) => (
        <div
          className="containeraccordion"
          dir="rtl"
          style={{
            backgroundColor:
              item.id === "۱"
                ? "#E01E5A"
                : item.id === "۲"
                ? "#FFD633"
                : "#3BE64C",
          }}
        >
          <Accordion
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              // width="100px"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  marginRight: "800px",
                  width: "100px",
                  fontSize: 13,
                  paddingLeft: "1px",
                }}
              >
                رده بندی درجه {item.id}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                // className="accordionDetail"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <NotificationAlarmClock />

                {/* <ClockTimePicker /> */}
                <div className="containNotif">
                  <CheckBoxAlarm />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    ۳۰ دقیقه قبل جلسه
                  </Typography>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CheckBoxAlarm />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "gray",
                    }}
                  >
                    دریافت sms
                  </Typography>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
