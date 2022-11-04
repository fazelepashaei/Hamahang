// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MemberData from "../json/MemberData";
// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import deleteIcon from "../../src/img/delete.svg";
// import "./tasks/Accordion1.css";
// // import DeleteIcon from "@mui/icons-material/Delete";
// export default function ControlledAccordions() {
//   const [expanded, setExpanded] = React.useState(false);
//   const [index, setindex] = React.useState(1);
//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };
//   // const [list, updateList] = React.useState(MemberData);
//   // const handleRemoveItem = (e) => {
//   //   const id = e.target.getAttribute(id);
//   //   updateList(list.filter((item) => item.id !== id));
//   // };
//   return (
//     <ThemeProvider>
//       <div
//         style={{
//           width: "50%",
//           flexShrink: 0,
//           marginTop: "20PX",
//           marginLeft: "25%",
//         }}
//       >
//         {/* <CssBaseline /> */}
//         {MemberData.map((item, i) => (
//           <div
//             style={{
//               flexdirection: "column",
//             }}
//             dir="rtl"
//           >
//             <Accordion
//               sx={{
//                 // width: "50%",
//                 // flexShrink: 0,
//                 marginBottom: "30px",
//                 // marginLeft: "25%",
//               }}
//               expanded={expanded === item.id}
//               onChange={handleChange(item.id)}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography sx={{ color: "text.secondary", marginRight: "2%" }}>
//                   {i}
//                 </Typography>
//                 <Typography sx={{ width: "80%", flexShrink: 0 }}>
//                   {item.name}
//                 </Typography>
//                 <Typography sx={{ width: "100%", flexShrink: 0, color: "red" }}>
//                   <img src={deleteIcon} className="deleteIcon"></img>
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography sx={{ width: "100%", flexShrink: 0 }}>
//                   {item.information}
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           </div>
//         ))}
//       </div>
//     </ThemeProvider>
//   );
// }
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import deleteIcon from "../../src/img/delete.svg";
import MemberData from "../json/MemberData";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MemberMeeting = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [index, setindex] = React.useState(1);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [list, updateList] = useState(MemberData);
  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    updateList(list.filter((item) => item.name !== name));
  };

  return (
    <ThemeProvider>
      <div
        style={{
          width: "50%",
          flexShrink: 0,
          marginTop: "20PX",
          marginLeft: "25%",
        }}
      >
        {list.map((item, i) => (
          <div
            style={{
              flexdirection: "column",
            }}
            dir="rtl"
          >
            <Accordion
              sx={{
                marginBottom: "30px",
              }}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ color: "text.secondary", marginRight: "2%" }}>
                  {item.id}
                </Typography>
                <Typography sx={{ width: "40%", flexShrink: 0 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ width: "40%", flexShrink: 0 }}>
                  {item.position}
                </Typography>
                <Typography
                  name={item.name}
                  onClick={handleRemoveItem}
                  sx={{ width: "40%", flexShrink: 0, color: "red" }}
                >
                  <img
                    name={item.name}
                    onClick={handleRemoveItem}
                    src={deleteIcon}
                  ></img>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  {item.information}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};
export default MemberMeeting;
