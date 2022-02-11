import React, { useState, useContext } from "react";
import secretaryData from "../../json/secretaryData";
import "./contentSecretary.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import { dateContext } from "../context/ContextDate";
import ModalEditSecretary from "./modalEditSecretary";

function ContentSecretary() {
  const { setOpenModalEdit, setSelectedSecretary } =
    React.useContext(dateContext);

  function onCLickEdit(index) {
    setOpenModalEdit(true);
    setSelectedSecretary(index);
  }

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      {secretaryData.map((item, index) => (
        <div className="contentSecretary">
          <p>{index + 1}</p>
          <div className="firstSecretary">
            <p>{item.name}</p>
          </div>
          <div className="secondSecretary">
            <p>{item.phoneNumber}</p>
          </div>

          <div className="thirdSecretary">
            {item.availability.map((i, j) => (
              <p className="availability">{i}</p>
            ))}
          </div>
          <p className="dot" onClick={() => onCLickEdit(index)}>
            ...
          </p>
          {/* <ModalEditSecretary /> */}
        </div>
      ))}
    </ThemeProvider>
  );
}

export default ContentSecretary;
