import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { dateContext } from "../context/ContextDate";
import { createTheme, styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import "./modalRecordTxt.css";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function ModalRecordTxt() {
  const { openModalRecordTxt, setOpenModalRecordTxt } =
    React.useContext(dateContext);

  const handleClose = () => setOpenModalRecordTxt(false);
  const CustomTextInput = styled(TextField)({
    "&.MuiTextField-root": {
      width: "250px",
      color: "rgb(17, 2, 102)",
      justifyContent: "center",
      //   marginTop: "20px",
      marginBottom: "20px",
      Animation,
    },
    "&.MuiInputBase": {
      root: {
        height: "200px",
      },
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#359DFD",
    },
    "& label.Mui-focused": {
      borderLeftWidth: 5,
      color: "#359DFD",
    },
    "& label": {
      borderLeftWidth: 5,
      color: "  rgb(141, 133, 133)",
    },
  });
  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div>
        <Modal
          open={openModalRecordTxt}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mainRecordTxt">
            <div className="modalAddTxt">
              <p className="RecordTitle">یادداشت صورت جلسه</p>
              <CustomTextInput
                className="inputTitle"
                dir="rtl"
                label="یادداشت"
                color="info"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                inputProps={{
                  style: {
                    height: 150,
                  },
                }}
              />

              <button className="submitModalAdd" onClick={handleClose}>
                {" "}
                ثبت
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
