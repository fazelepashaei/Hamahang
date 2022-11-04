// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import { Button, TextField } from "@mui/material";
// import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
// import React from "react";
// import { Link } from "react-router-dom";
// import leftBack from "../img/leftBack.png";
// import logo from "../img/logo.png";
// import back from "../img/back.png";

// import "./shomareSerial.css";
// const ShomareTamas = () => {
//   const CustomTextInput = styled(TextField)({
//     "&.MuiTextField-root": {
//       width: "250px",
//       color: "rgb(17, 2, 102)",
//       justifyContent: "center",
//       marginTop: "90px",
//     },
//     "& input:valid:focus + fieldset": {
//       borderColor: "#359DFD",
//     },
//     "& label.Mui-focused": {
//       borderLeftWidth: 5,
//       color: "#359DFD",
//     },
//     "& label": {
//       borderLeftWidth: 5,
//       color: "  rgb(141, 133, 133)",
//     },
//   });
//   const CustomButton = styled(Button)({
//     backgroundColor: "#359DFD",
//   });
//   return (
//     <div className="container" dir="rtl">
//       {/* <img className="logo" src={logo} alt="Logo" /> */}
//       <div className="box">
//         <div className="right">
//           <div className="title">
//             <p className="titr">شماره تماس</p>
//             <img className="back" src={back} alt="Logo" />
//           </div>
//           {/* <ExpandCircleDownIcon sx={{ fontSize: 40 }} /> */}
//           <CustomTextInput
//             className="input"
//             label="شماره تماس"
//             color="info"
//             type={Number}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             size="small"
//           />
//           <nav>
//             <Link
//               to={`/CodeTaeid/`}
//               style={{ color: "inherit", textDecoration: "inherit" }}
//             >
//               <CustomButton
//                 className="btn"
//                 variant="contained"
//                 sx={{ margin: 7 }}
//               >
//                 ارسال کد
//               </CustomButton>
//             </Link>
//           </nav>
//         </div>
//         <div className="left">
//           <img className="image" src={leftBack} alt="Logo" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShomareTamas;
