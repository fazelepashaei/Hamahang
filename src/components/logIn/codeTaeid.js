// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import { Button, TextField } from "@mui/material";
// import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
// import React from "react";
// import "./shomareSerial.css";
// import leftBack from "../img/leftBack.png";
// import logo from "../img/logo.png";
// import { Link } from "react-router-dom";
// import back from "../img/back.png";
// const CodeTaeid = () => {
//   const CustomTextInput = styled(TextField)({
//     "&.MuiTextField-root": {
//       width: "250px",
//       color: "rgb(17, 2, 102)",
//       justifyContent: "center",
//       marginTop: "50px",
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
//             <p className="titr">کد تایید</p>
//             <nav>
//               <Link to={`/ShomareTamas/`}>
//                 <img className="back" src={back} alt="Logo" />
//               </Link>
//             </nav>
//           </div>
//           <CustomTextInput
//             className="input"
//             label="کد تایید"
//             color="info"
//             type={Number}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             size="small"
//           />
//           <div className="edit">
//             <BorderColorTwoToneIcon sx={{ fontSize: 15, color: "#97c9f8" }} />
//             <p className="number">98000000000+</p>
//           </div>
//           <nav>
//             <Link
//               to={`/TaeinRamz/`}
//               style={{ color: "inherit", textDecoration: "inherit" }}
//             >
//               <CustomButton
//                 className="btn"
//                 variant="contained"
//                 sx={{ margin: 3 }}
//               >
//                 ارسال مجدد کد
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

// export default CodeTaeid;
