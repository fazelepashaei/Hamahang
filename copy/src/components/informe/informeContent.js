import "./informeContent.css";
import informeData from "../../json/informeData";
import { dateContext } from "../context/ContextDate";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function InformeContent() {
  const { selectedInforme, setSelectedInforme } = React.useContext(dateContext);
  return (
    <div>
      {informeData[selectedInforme].meeting.map((item) => (
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            // expandIconWrapper={{ marginRight: "10px" }}
            className="informeRow"
          >
            <ExpandMoreIcon sx={{ marginLeft: "30%", marginRight: "20px" }} />
            <Typography sx={{ width: "15%", flexShrink: 0 }}>
              {item.date}
            </Typography>
            <Typography sx={{ width: "15%", flexShrink: 0, marginLeft: "8%" }}>
              {item.description}
            </Typography>
            <Typography sx={{ width: "15%", flexShrink: 0, marginLeft: "8%" }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
export default InformeContent;
