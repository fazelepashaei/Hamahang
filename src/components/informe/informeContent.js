import "./informeContent.css";
import informeData from "../../json/informeData";
import { dateContext } from "../context/ContextDate";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import { ExpandMore } from "@material-ui/icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
function InformeContent(props) {
  const { selectedInforme, setSelectedInforme } = React.useContext(dateContext);

  return (
    <div className="informeMain">
      <div className="informeContainer">
        <p>گزارش گیری</p>
        <div className="informeTop">
          <p>عناوین</p>
          <p>توضیحات</p>
          <p>تاریخ</p>
        </div>
        <div className="informeContent">
          {informeData[props.statusFilter].meeting.map((item) => (
            <Accordion
              sx={{
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="memberRow"
                style={{ height: "50px" }}
              >
                <ExpandMoreIcon sx={{ marginLeft: "10%", marginRight: "1%" }} />
                <Typography
                  sx={{ width: "5%", flexShrink: 0, marginLeft: "5%" }}
                >
                  {item.date}
                </Typography>
                <Typography
                  sx={{ width: "50%", flexShrink: 0, marginLeft: "5%" }}
                >
                  ...{item.description.slice(0, 90)}
                </Typography>
                <Typography
                  sx={{ width: "10%", flexShrink: 0, marginLeft: "6%" }}
                >
                  {item.title}
                </Typography>
                <input type="checkbox" className="checkboxProgram" />
                <p
                  style={{
                    height: "0px",
                    width: "0px",
                    position: "absolute",
                    marginLeft: "98%",
                    marginTop: "0px",
                    borderRight:
                      item.degree == 1
                        ? "20px solid red"
                        : item.degree == 2
                        ? "20px solid yellow"
                        : item.degree == 3
                        ? "20px solid green"
                        : null,
                    borderBottom: "20px solid transparent",
                  }}
                ></p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
export default InformeContent;
