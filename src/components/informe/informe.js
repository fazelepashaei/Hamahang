import DrawerPage from "../drawer";
import "./informe.css";
import InformeContent from "./informeContent";

import { Divider } from "@mui/material";
import { ExpandMore } from "@material-ui/icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

function Informe() {
  const [statusFilter, setStatusFilter] = useState(0);
  const onClickDate = () => {
    setStatusFilter(0);
    console.log("informe filter item selected", statusFilter);
  };
  const onClickMonth = () => {
    setStatusFilter(1);
    console.log("informe filter item selected", statusFilter);
  };
  const onClickYear = () => {
    setStatusFilter(2);
    console.log("informe filter item selected", statusFilter);
  };

  return (
    <div className="containerInforme">
      <DrawerPage className="drawerPage" />
      <div className="leftContent">
        <div
          className="informeHeader"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Accordion style={{ marginRight: "50px", width: "100px" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              style={{
                flexDirection: "row-reverse",
                backgroundColor: "#fff",
                borderColor: "#97C9F8",
                borderStyle: "solid",
                borderRadius: "3px",
                borderWidth: "1px",
              }}
            >
              فیلتر روزانه
            </AccordionSummary>

            <AccordionDetails
              style={{
                flexDirection: "column",
                backgroundColor: "#fff",
                borderColor: "#97C9F8",
                borderStyle: "solid",
                borderRadius: "3px",
                borderWidth: "1px",
                padding: "0px",
              }}
            >
              <Typography
                className="accordionContent"
                style={{ color: "black" }}
                onClick={onClickDate}
              >
                روزانه
              </Typography>
              <Divider
                className="dividerAccordion"
                style={{ backgroundColor: "#97C9F8" }}
              />
              <Typography
                className="accordionContent"
                style={{ color: "black" }}
                onClick={onClickMonth}
              >
                ماهانه
              </Typography>
              <Divider
                className="dividerAccordion"
                style={{ backgroundColor: "#97C9F8" }}
              />

              <Typography
                className="accordionContent"
                style={{ color: "black" }}
                onClick={onClickYear}
              >
                سالانه
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginRight: "30px", width: "100px" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              style={{
                flexDirection: "row-reverse",
                backgroundColor: "#fff",
                borderColor: "#97C9F8",
                borderStyle: "solid",
                borderRadius: "3px",
                borderWidth: "1px",
              }}
            >
              مرتب سازی
            </AccordionSummary>

            <AccordionDetails
              style={{
                flexDirection: "column",
                backgroundColor: "#fff",
                borderColor: "#97C9F8",
                borderStyle: "solid",
                borderRadius: "3px",
                borderWidth: "1px",
                padding: "0px",
              }}
            >
              <Typography
                className="accordionContent"
                style={{ color: "black" }}
              >
                زمان
              </Typography>
              <Divider
                className="dividerAccordion"
                style={{ backgroundColor: "#97C9F8" }}
              />

              <Typography
                className="accordionContent"
                style={{ color: "black" }}
              >
                درجه بندی
              </Typography>
            </AccordionDetails>
          </Accordion>
          <button className="excel">دریافت فایل اکسل</button>
          <button className="pdf"> pdf دریافت فایل </button>
        </div>
        <InformeContent statusFilter={statusFilter} />
      </div>
    </div>
  );
}

export default Informe;
