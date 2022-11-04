import * as React from "react";
import Modal from "@mui/material/Modal";
import { dateContext } from "../context/ContextDate";
import { createTheme, styled } from "@mui/material/styles";
import "./modalPeiroFile.css";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import secretaryData from "../../json/secretaryData";
import download from "../../img/Iconly-Light-Download.svg";
import { Divider, TextField } from "@mui/material";

export default function ModalPeiroFile() {
  const { openModalPeiro, setOpenModalPeiro } = React.useContext(dateContext);

  const handleClose = () => setOpenModalPeiro(false);

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div>
        <Modal
          open={openModalPeiro}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mainModalPeiro">
            <div className="modalPeiro">
              <p className="PeiroTitle">فایل های ضمیمه</p>
              <div className="peiroRow">
                <p className="pPeiro">نام فایل و فرمت</p>
                <img src={download}></img>
              </div>
              <Divider className="dividerPeiro" />
              <div className="peiroRow">
                <p className="pPeiro">نام فایل و فرمت</p>
                <img src={download}></img>
              </div>
              <Divider className="dividerPeiro" />
              <div className="peiroRow">
                <p className="pPeiro">نام فایل و فرمت</p>
                <img src={download}></img>
              </div>
              <Divider className="dividerPeiro" />
              <div className="peiroRow">
                <p className="pPeiro">نام فایل و فرمت</p>
                <img src={download}></img>
              </div>
              <Divider className="dividerPeiro" />
              <button className="submitModalPeiro" onClick={handleClose}>
                ثبت
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
