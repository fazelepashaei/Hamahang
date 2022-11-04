// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import { Button, TextField } from "@mui/material";
// import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
// import leftBack from "../img/leftBack.png";
// import logo from "../img/logo.png";
// import { Link } from "react-router-dom";
// import back from "../img/back.png";

// import React from "react";
// import "./shomareSerial.css";
// const TaeinRamz = () => {
//   const CustomTextInput = styled(TextField)({
//     "&.MuiTextField-root": {
//       width: "250px",
//       color: "rgb(17, 2, 102)",
//       justifyContent: "center",
//       marginTop: "30px",
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
//       {/* <img className="logo    " src={logo} alt="Logo" /> */}

//       <div className="box">
//         <div className="right">
//           <div className="title">
//             <p className="titr">تعیین رمز</p>
//             <nav>
//               <Link to={`/CodeTaeid/`}>
//                 <img className="back" src={back} alt="Logo" />
//               </Link>
//             </nav>
//           </div>
//           <CustomTextInput
//             className="input"
//             label="رمز ثابت"
//             color="info"
//             type={Number}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             size="small"
//           />
//           <CustomTextInput
//             className="input"
//             label=" تکرار رمز ثابت"
//             color="info"
//             type={Number}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             size="small"
//           />
//           <nav>
//             <Link
//               to={`/ShomareTamas/`}
//               style={{ color: "inherit", textDecoration: "inherit" }}
//             >
//               <CustomButton
//                 className="btn"
//                 variant="contained"
//                 sx={{ margin: 4 }}
//               >
//                 تایید
//               </CustomButton>
//             </Link>
//           </nav>
//         </div>
//         <div className="left">
//           {" "}
//           <img className="image" src={leftBack} alt="Logo" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaeinRamz;
