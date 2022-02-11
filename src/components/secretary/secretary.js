import React, { useState } from "react";
import DrawerPage from "../drawer";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./secretary.css";
import { Button } from "@mui/material";
import plus from "../../img/plus.png";
import ContentSecretary from "./contentSecretary";
import { dateContext } from "../context/ContextDate";
import ModalAddSecretary from "./modalAddSecretary";
import ModalEditSecretary from "./modalEditSecretary";
export default function Secretary() {
  const { openModalAdd, setOpenModalAdd } = React.useContext(dateContext);

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div className="containerSecretry">
        <DrawerPage className="drawerSecretary" />
        <div className="contentSecretry">
          <p className="titleSecretary">مدیریت منشی ها</p>
          <div className="contentMain">
            <div className="contentSec">
              <button
                className="addSecretary"
                onClick={() => setOpenModalAdd(true)}
              >
                {" "}
                <img className="plus" src={plus} />
                <p> اضافه کردن منشی</p>
              </button>
              <ContentSecretary />
            </div>
            <button className="submitSecretary">ثبت</button>
            <ModalAddSecretary className="modaladdSec" />
            <ModalEditSecretary />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
