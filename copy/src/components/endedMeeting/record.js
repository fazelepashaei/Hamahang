import "./record.css";
import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import deleteIcon from "../../img/delete.svg";
import download from "../../img/Iconly-Light-Download.svg";
import ModalRecordTxt from "./modalRecordTxt";
import { dateContext } from "../context/ContextDate";
import ModalRecordAttached from "./modalRecordAttached";
import ModalRecordVoice from "./modalRecordVoice";
import Progress from "react-progressbar";
// import { Progress } from "react-sweet-progress";
function Record() {
  const {
    setOpenModalRecordTxt,
    setOpenModalRecordAttached,
    setOpenModalRecordVoice,
  } = React.useContext(dateContext);
  return (
    <div className="recordContainer">
      <Accordion className="menuAccordion">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="menuAccordionSummary"
          sx={{ backgroundColor: "#97C9F8" }}
        >
          <ExpandMoreIcon sx={{ marginLeft: "30%", color: "white" }} />
          <Typography className="accordionContent">ثبت صورت جلسه</Typography>
        </AccordionSummary>
        <AccordionDetails
          className="AccordionDetailsMenu"
          sx={{
            backgroundColor: "#97C9F8",
            marginTop: "5px",
            borderColor: "#0f5d7f",
            borderStyle: "solid",
            borderRadius: "3px",
            borderWidth: "1px",
            padding: "0px",
          }}
        >
          <Typography
            className="accordionContent"
            onClick={() => setOpenModalRecordTxt(true)}
          >
            متن
          </Typography>
          <Divider className="dividerAccordion" />
          <Typography
            className="accordionContent"
            onClick={() => setOpenModalRecordVoice(true)}
          >
            صوت
          </Typography>
          <Divider className="dividerAccordion" />

          <Typography
            className="accordionContent"
            onClick={() => setOpenModalRecordAttached(true)}
          >
            پیوست
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="recordAccordion">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="recordRow"
        >
          <img src={deleteIcon} style={{ marginLeft: "20px" }}></img>

          <ExpandMoreIcon
            sx={{ marginTop: "10px", marginLeft: "50px", marginRight: "20px" }}
          />

          <Typography sx={{ marginLeft: "20px", marginRight: "10px" }}>
            به گزارش خبرنگار قضائی خبرگزاری تسنیم علی بهادری جهرمی رئیس مرکز
            وکلا و کارشناسان رسمی
          </Typography>
          <Typography>1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            به گزارش خبرنگار قضائی خبرگزاری تسنیم علی بهادری جهرمی رئیس مرکز به
            گزارش خبرنگار قضائی خبرگزاری تسنیم علی بهادری جهرمی رئیس مرکز وکلا و
            کارشناسان رسمی وکلا و کارشناسان رسمی
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="recordAccordion">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="recordRow"
        >
          <img src={deleteIcon} style={{ marginLeft: "20px" }}></img>

          <img
            src={download}
            style={{
              marginTop: "10px",
              marginLeft: "20px",
              //   marginRight: "500px",
            }}
          />
          <Typography sx={{ marginLeft: "20px", marginRight: "500px" }}>
            document.Txt
          </Typography>
          <Typography sx={{ marginLeft: "20px" }}>3</Typography>
        </AccordionSummary>
      </Accordion>
      {/* <Progress percent={88} status="success" /> */}
      <ModalRecordTxt />
      <ModalRecordAttached />
      <ModalRecordVoice />
    </div>
  );
}
export default Record;
