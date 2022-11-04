import React, { useState } from "react";
import data from "../../json/data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dateContext } from "../context/ContextDate";
import "./member.css";
export default function Member() {
  const { selectedMeeting, selectedDate } = React.useContext(dateContext);

  return (
    <div className="membercontainer">
      <div className="memberTitle">
        <p className="memberTitr">اعضا</p>
      </div>
      {data[selectedDate].Meeting[selectedMeeting].Members.map((item) => (
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            // expandIconWrapper={{ marginRight: "10px" }}
            className="memberRow"
          >
            <ExpandMoreIcon sx={{ marginLeft: "30%", marginRight: "20px" }} />
            <Typography sx={{ width: "15%", flexShrink: 0, marginLeft: "8%" }}>
              {item.Madrak}
            </Typography>
            <Typography sx={{ width: "15%", flexShrink: 0, marginLeft: "8%" }}>
              {item.Position}
            </Typography>

            <Typography sx={{ width: "15%", flexShrink: 0 }}>
              {item.Name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.Caption}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
