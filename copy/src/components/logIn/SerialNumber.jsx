import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import leftBack from "../../img/leftBack.png";
import logo from "../../img/logo.png";
import Data from "./LoginData";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
export default function SerialNumberPage() {
  const location = useLocation();
  const [value, setvalue] = React.useState("");

  const CustomTextInput = styled(TextField)({
    "&.MuiTextField-root": {
      width: "350px",
      color: "rgb(17, 2, 102)",
      marginBottom: "20px",
      paddingRight: "15px",
      paddingLeft: "5px",
      fontSize: "25px",
      Animation,
    },
    "&.Muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input ": {
      height: "450px",
    },
    "&.MuiInputBase": {
      root: {
        height: "200px",
        width: "50vmin",
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
    },
  });
  const handlechangeSerialNumber = (event) => {
    setvalue(event.target.value);
  };
  const navigate = useNavigate();
  const Oncheck = () => {
    if (Data[location.state.props].serial_number == value) {
      const indexserial = location.state.props;

      console.log("movafagh");
      alert("شماره سریال وارد شده صحیح است");
      navigate("/call");
    } else console.log("not moafagh");
  };

  return (
    <div
      style={{
        backgroundColor: "#fcfcfc",
        height: "900px",
        width: "1500px",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <div style={{ flexDirection: "column" }}>
        <div
          style={{
            backgroundColor: "#fcfcfc",
            height: "100px",
            width: "600px",
            marginTop: "150px",
            marginLeft: "300px",
          }}
        >
          <img src={logo} />
        </div>
        <div
          style={{
            backgroundColor: "#fcfcfc",
            height: "50px",
            width: "50px",
            marginLeft: "500px",
            marginTop: "50px",
          }}
        >
          <img src={leftBack} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: 400,
            height: 400,
            backgroundColor: "white",
            marginLeft: "800px",
            marginTop: "160px",
          }}
        >
          <div style={{ marginLeft: "30px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                شماره سریال
              </span>
              <span>شماره سریال خریداری شده خود را وارد کنید</span>
            </div>

            <div style={{ marginBottom: "20px", marginTop: "40px" }}>
              <ThemeProvider theme={theme}>
                <div dir="rtl">
                  {/* <TextField
                    id="outlined-number"
                    label="شماره سریال"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={value}
                    onChange={handlechangeSerialNumber}
                  /> */}
                  <CustomTextInput
                    className="heightTexInput"
                    dir="rtl"
                    label="شماره سریال"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={value}
                    onChange={handlechangeSerialNumber}
                  />
                </div>
              </ThemeProvider>
            </div>
            <Button onClick={Oncheck} variant="contained">
              تایید
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
