import React, { useState } from "react";
import data from "../../json/data";
import "./title.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dateContext } from "../context/ContextDate";
import ModalPeiroFile from "./modalPeiroFile";

export default function Title() {
  const { selectedMeeting, selectedDate, setOpenModalPeiro } =
    React.useContext(dateContext);

  return (
    <div className="mainTitle">
      <div className="titleContainer">
        <div className="tContent">
          <p className="titleEndMeeting"> : عنوان </p>
          <p className="subTitle">
            {" "}
            {data[selectedDate].Meeting[selectedMeeting].subject}{" "}
          </p>
        </div>
        <button className="peiro" onClick={() => setOpenModalPeiro(true)}>
          فایل های پیرو
        </button>
      </div>
      <ModalPeiroFile />

      <div className="descriptionEndMeeting">
        <p className="titleDescription"> : توضیحات</p>
        <p className="contentDescription">
          {" "}
          {data[selectedDate].Meeting[selectedMeeting].description}
        </p>
        {/* <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIconWrapper={{ marginRight: "20px" }}
          >
            <ExpandMoreIcon />
            <Typography>بیشتر</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {data[selectedDate].Meeting[selectedMeeting].description}
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}
