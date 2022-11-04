import * as React from "react";
import Modal from "@mui/material/Modal";
import { dateContext } from "../context/ContextDate";
import { createTheme, styled } from "@mui/material/styles";
import "./modalRecordAttached.css";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import secretaryData from "../../json/secretaryData";
import deleteIcon from "../../img/delete.svg";
import { Divider, TextField } from "@mui/material";

export default function ModalRecordAttached() {
  const { openModalRecordAttached, setOpenModalRecordAttached } =
    React.useContext(dateContext);

  const handleClose = () => setOpenModalRecordAttached(false);

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div>
        <Modal
          open={openModalRecordAttached}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mainModalRecord">
            <div className="modalRecord">
              <p className="recordTitle">فایل ضمیمه</p>
              <p className="recordSubTitle">فایل های ضمیمه</p>
              <div className="recordRow">
                <p className="pRecord">powerpoint.ppxt</p>
                <img src={deleteIcon} className="deleteRecord"></img>
              </div>
              <Divider className="dividerRecord" />
              <div className="recordRow">
                <p className="pRecord">voice.mp3</p>
                <img src={deleteIcon} className="deleteRecord"></img>
              </div>
              <Divider className="dividerRecord" />
              <div className="recordRow">
                <p className="pRecord">document.txt</p>
                <img src={deleteIcon} className="deleteRecord"></img>
              </div>
              <Divider className="dividerRecord" />
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
