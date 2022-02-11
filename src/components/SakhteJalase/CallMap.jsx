import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import DisplayMap from "./DisplayMap";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const style = {
  // position: "relative",
  // top: "80%",
  // left: "50%",
  marginTop: "30%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "hidden",
};

export default function CallMap() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [location, setlocation] = useState("");
  function Getlocation(valueAddress) {
    setlocation(valueAddress);
  }
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Button onClick={handleOpen}>آدرس</Button>
      <div
        style={{ width: "200px", height: "40px", backgroundColor: "#FAFAFA" }}
      >
        <p>{location}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DisplayMap Getlocation={Getlocation}></DisplayMap>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
          {/* <Map3></Map3> */}
          {/* </Typography> */}
        </Box>
        {/* </div> */}
      </Modal>
    </div>
  );
}

// import React, { useState } from "react";
// // import "./style.css";
// import Mapir from "mapir-react-component";
// // import "./api-key";

// const Map = Mapir.setToken({
//   transformRequest: (url) => {
//     return {
//       url: url,
//       headers: {
//         "x-api-key":
//           "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2In0.eyJhdWQiOiIxNjU1OCIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2IiwiaWF0IjoxNjQxMjk0MDMyLCJuYmYiOjE2NDEyOTQwMzIsImV4cCI6MTY0Mzc5OTYzMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.tx-5p48ra4ZOGLDX4KojUsXKOwFqHCajnLfhC-yvDS8qxblShCbB05bty-RRbSAXYGjzOQcpbAp6fUibqFe7w-MK5FgZ825kYocW6Q2thTD1YxqG4sZeV59i_orzSmuk3vxdyF18vBr-CeOABDaleWRaqaYfiKG2IwYwGmPI_ifSdcFWywa5E4qqhIir0Zd7c89ro_HvMjgzuYxHNjILsT8S4gxIxlLxY_icQKFPCeZG9Urep_E-MFrPUZ8tk0_OjJyZmxXP7kEHJ8zyimSI5dtdH5Gs2w4F2krsPRBPy0W4rGl0H9-3s8_pD3Oah1gC4z9Zi5OkLLDEQmBIO1Bspw", //Mapir api key, //Mapir api key
//         "Mapir-SDK": "reactjs",
//       },
//     };
//   },
// });

// const CallMap = () => {
//   const [markerArray, setMarkerArray] = useState([]);
//   const [coord, setCoord] = useState([51.42, 35.72]);
//   function reverseFunction(map, e) {
//     var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
//     fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//         "x-api-key":
//           "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2In0.eyJhdWQiOiIxNjU1OCIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2IiwiaWF0IjoxNjQxMjk0MDMyLCJuYmYiOjE2NDEyOTQwMzIsImV4cCI6MTY0Mzc5OTYzMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.tx-5p48ra4ZOGLDX4KojUsXKOwFqHCajnLfhC-yvDS8qxblShCbB05bty-RRbSAXYGjzOQcpbAp6fUibqFe7w-MK5FgZ825kYocW6Q2thTD1YxqG4sZeV59i_orzSmuk3vxdyF18vBr-CeOABDaleWRaqaYfiKG2IwYwGmPI_ifSdcFWywa5E4qqhIir0Zd7c89ro_HvMjgzuYxHNjILsT8S4gxIxlLxY_icQKFPCeZG9Urep_E-MFrPUZ8tk0_OjJyZmxXP7kEHJ8zyimSI5dtdH5Gs2w4F2krsPRBPy0W4rGl0H9-3s8_pD3Oah1gC4z9Zi5OkLLDEQmBIO1Bspw", //Mapir api key
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//     const array = [];
//     array.push(
//       <Mapir.Marker
//         coordinates={[e.lngLat.lng, e.lngLat.lat]}
//         anchor="bottom"
//       />
//     );
//     setMarkerArray(array);
//   }
//   return (
//     <div className="App">
//       <Mapir center={coord} Map={Map} onClick={reverseFunction}>
//         {markerArray}
//       </Mapir>
//     </div>
//   );
// };

// export default CallMap;
