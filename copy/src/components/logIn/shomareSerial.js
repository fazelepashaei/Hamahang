import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import React from "react";
import "./shomareSerial.css";
const ShomareSerial = () => {
  const CustomTextInput = styled(TextField)({
    "&.MuiTextField-root": {
      width: "250px",
      color: "rgb(17, 2, 102)",
      justifyContent: "center",
      marginTop: "30px",
      Animation,
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
  const CustomButton = styled(Button)({
    backgroundColor: "#359DFD",
  });
  return (
    <div className="container" dir="rtl">
      <div className="box">
        <div className="right">
          <p className="titr">شماره سریال</p>
          {/* <ExpandCircleDownOutlinedIcon
            sx={{
              fontSize: 40,
              color: "gray",

            }}
          /> */}
          <p className="content">شماره سریال خریداری شده را وارد کنید</p>
          <CustomTextInput
            className="input"
            label="شماره سریال"
            color="info"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
          />
          <CustomButton className="btn" variant="contained" sx={{ margin: 7 }}>
            تایید
          </CustomButton>
        </div>
        <div className="left"></div>
      </div>
    </div>
  );
};

export default ShomareSerial;
