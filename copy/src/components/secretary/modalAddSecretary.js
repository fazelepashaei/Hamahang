import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { dateContext } from "../context/ContextDate";
import { createTheme, styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import "./modalAddSecretary.css";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function ModalAddSecretary() {
  const { openModalAdd, setOpenModalAdd } = React.useContext(dateContext);

  const handleOpen = () => setOpenModalAdd(true);
  const handleClose = () => setOpenModalAdd(false);
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
          open={openModalAdd}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="main">
            <div className="modalAddContent">
              <p className="secretaryTitle">اضافه کردن منشی</p>
              <CustomTextInput
                className="inputTitle"
                dir="rtl"
                label="نام و نام خانوادگی"
                color="info"
                // defaultValue={}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />

              <CustomTextInput
                className="inputTitle"
                label="شماره تماس"
                color="info"
                dir="rtl"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
              <div className="SecretaryContent">
                <input type="checkbox" className="checkboxContent" />
                <p>منشی محتوا</p>
              </div>
              <div className="SecretaryMeeting">
                <input type="checkbox" className="checkboxMeeting" />
                <p>منشی جلسات</p>
              </div>
              <div className="SecretaryProgram">
                <input type="checkbox" className="checkboxProgram" />
                <p>منشی برنامه ها</p>
              </div>
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
