import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import SerialNumber from "./SerialNumber";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import leftBack from "../../img/leftBack.png";
import logo from "../../img/logo.png";
import Data from "./LoginData";
import "../logIn/Welcome.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
export default function Welcome() {
  const [value, setvalue] = React.useState();
  const [pass, setpass] = React.useState();
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

  const handlechangeNumber = (event) => {
    setvalue(event.target.value);
    // localStorage.setItem('myCallNumber', value);
  };
  const handlechangePassword = (event) => {
    setpass(event.target.value);
    // localStorage.setItem('myPass', pass);
  };
  const navigate = useNavigate();
  const Onsave = () => {
    alert("save");
  };
  const Onclick = () => {
    Data.map((item, i) => {
      if (Data[i].phone_number == parseInt(value)) {
        const index = i;

        if (Data[index].password == pass) {
          localStorage.setItem("myPass", pass);
          localStorage.setItem("myCallNumber", value);

          navigate("Serial", {
            state: { props: index },
          });
        } else console.log("not rotate");
      } else console.log("erroe");
    });
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
            height: 500,
            backgroundColor: "#FFFFFF",
            marginTop: "80px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "35px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              خوش آمدید
            </p>

            <div style={{ marginBottom: "20px", marginTop: "40px" }}>
              <ThemeProvider theme={theme}>
                <div dir="rtl">
                  {/* <TextField
                    id="outlined-number"
                    label="شماره تماس"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={value}
                    onChange={handlechangeNumber}
                  /> */}
                  <CustomTextInput
                    className="heightTexInput"
                    dir="rtl"
                    label="شماره تماس"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={value}
                    onChange={handlechangeNumber}
                  />
                </div>
              </ThemeProvider>
            </div>
            <div>
              <ThemeProvider theme={theme}>
                <div dir="rtl">
                  {/* <TextField
                    id="outlined-number"
                    label="رمز ثابت"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={pass}
                    onChange={handlechangePassword}
                  /> */}
                  <CustomTextInput
                    className="heightTexInput"
                    dir="rtl"
                    label="رمز ثابت"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={pass}
                    onChange={handlechangePassword}
                  />
                </div>
              </ThemeProvider>
            </div>
            <Stack
              style={{
                marginTop: "20px",
                marginRight: "10px",
                paddingRight: "30px",
              }}
              direction="row-reverse"
              spacing={2}
            >
              <span style={{ fontSize: "12px" }}>
                ? رمز خود را فراموش کرده اید
              </span>
              <nav>
                <Link to={"/Serial/"}>
                  <span style={{ fontSize: "12px" }}> اینحا کلیک کنید </span>
                </Link>
              </nav>
            </Stack>
            <Stack
              style={{ marginTop: "50px", marginLeft: "90px" }}
              direction="row"
              spacing={2}
            >
              <Button onClick={Onclick}>ساخت اکانت</Button>
              <Button component={Link} to="/Serial/" variant="contained">
                ورود
              </Button>
            </Stack>
          </div>
        </Box>
      </div>
    </div>
  );
}
