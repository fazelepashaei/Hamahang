import * as React from "react";
import Modal from "@mui/material/Modal";
import { dateContext } from "../context/ContextDate";
import { createTheme, styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import "./modalEditSecretary.css";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import secretaryData from "../../json/secretaryData";

export default function ModalEditSecretary() {
  const { openModalEdit, setOpenModalEdit, selectedSecretary } =
    React.useContext(dateContext);

  const handleClose = () => setOpenModalEdit(false);
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
          open={openModalEdit}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mainEdit">
            <div className="modalEditContent">
              <p className="secretaryTitle">ویرایش منشی</p>
              <CustomTextInput
                dir="rtl"
                className="inputTitle"
                label="نام و نام خانوادگی"
                color="info"
                defaultValue={secretaryData[selectedSecretary].name}
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />

              <CustomTextInput
                className="inputTitle"
                label="شماره تماس"
                dir="rtl"
                defaultValue={secretaryData[selectedSecretary].phoneNumber}
                color="info"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
              <div className="SecretaryContent">
                <input
                  type="checkbox"
                  className="checkboxContent"
                  checked={secretaryData[selectedSecretary].contentSecretary}
                />
                <p>منشی محتوا</p>
              </div>
              <div className="SecretaryMeeting">
                <input
                  type="checkbox"
                  className="checkboxMeeting"
                  checked={secretaryData[selectedSecretary].meetingSecretary}
                />
                {console.log(
                  "checkkkkk",
                  secretaryData[selectedSecretary].meetingSecretary
                )}
                <p>منشی جلسات</p>
              </div>
              <div className="SecretaryProgram">
                <input
                  type="checkbox"
                  className="checkboxProgram"
                  checked={secretaryData[selectedSecretary].programSecretary}
                />
                <p>منشی برنامه ها</p>
              </div>
              <button className="submitModalEdit" onClick={handleClose}>
                ثبت
              </button>
              <div className="bottomModal">
                <button className="inactive">غیرفعال سازی</button>
                <button className="delete">حذف</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
