import * as React from "react";
import { useNavigate } from "react-router-dom";
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
import leftBack from "../../img/leftBack.png";
import logo from "../../img/logo.png";
import Data from "./LoginData";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
export default function CallNumber() {
  const [value, setvalue] = React.useState();
  const [pass, setpass] = React.useState();
  const handlechangeNumber = (event) => {
    setvalue(event.target.value);
  };
  const handlechangePassword = (event) => {
    setpass(event.target.value);
  };
  const navigate = useNavigate();
  const Oncheck = () => {
    navigate("/Jalasat");
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
            backgroundColor: "#FFFFFF",
            marginTop: "200px",
          }}
        >
          <div style={{ marginLeft: "30px" }}>
            <div style={{ marginBottom: "20px", marginTop: "40px" }}>
              <ThemeProvider theme={theme}>
                <div dir="rtl">
                  <TextField
                    id="outlined-number"
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

            <Stack
              style={{ marginTop: "50px", marginLeft: "90px" }}
              direction="row"
              spacing={2}
            >
              <Button onClick={Oncheck} variant="contained">
                ورود
              </Button>
            </Stack>
          </div>
        </Box>
      </div>
    </div>
  );
}
