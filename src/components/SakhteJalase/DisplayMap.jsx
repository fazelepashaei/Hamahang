import React, { useState } from "react";
import "./DisplayMap.css";
import Mapir from "mapir-react-component";
//import "mapir-react-component/dist/index.css";
import TextField from "@mui/material/TextField";
let place;

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2In0.eyJhdWQiOiIxNjU1OCIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2IiwiaWF0IjoxNjQxMjk0MDMyLCJuYmYiOjE2NDEyOTQwMzIsImV4cCI6MTY0Mzc5OTYzMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.tx-5p48ra4ZOGLDX4KojUsXKOwFqHCajnLfhC-yvDS8qxblShCbB05bty-RRbSAXYGjzOQcpbAp6fUibqFe7w-MK5FgZ825kYocW6Q2thTD1YxqG4sZeV59i_orzSmuk3vxdyF18vBr-CeOABDaleWRaqaYfiKG2IwYwGmPI_ifSdcFWywa5E4qqhIir0Zd7c89ro_HvMjgzuYxHNjILsT8S4gxIxlLxY_icQKFPCeZG9Urep_E-MFrPUZ8tk0_OjJyZmxXP7kEHJ8zyimSI5dtdH5Gs2w4F2krsPRBPy0W4rGl0H9-3s8_pD3Oah1gC4z9Zi5OkLLDEQmBIO1Bspw", //Mapir api key
        "Mapir-SDK": "reactjs",
      },
    };
  },
});
const DisplayMap = (props) => {
  const [markerArray, setMarkerArray] = useState([]);
  const [address, setaddress] = useState("");
  const [coord, setCoord] = useState([51.42, 35.72]);
  const [value, setValue] = React.useState("Controlled");
  function reverseFunction(map, e) {
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2In0.eyJhdWQiOiIxNjU1OCIsImp0aSI6IjVhOTZjN2YzMTcwNTkwOWNiYmE3YWRlYTU1YmZlZDQ0NjFlNTkyNDc0NTY2NTFhY2E2YzUyYjc3MzlhYWVmYzhiYThhZjkyMzEzOTA0ZWY2IiwiaWF0IjoxNjQxMjk0MDMyLCJuYmYiOjE2NDEyOTQwMzIsImV4cCI6MTY0Mzc5OTYzMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.tx-5p48ra4ZOGLDX4KojUsXKOwFqHCajnLfhC-yvDS8qxblShCbB05bty-RRbSAXYGjzOQcpbAp6fUibqFe7w-MK5FgZ825kYocW6Q2thTD1YxqG4sZeV59i_orzSmuk3vxdyF18vBr-CeOABDaleWRaqaYfiKG2IwYwGmPI_ifSdcFWywa5E4qqhIir0Zd7c89ro_HvMjgzuYxHNjILsT8S4gxIxlLxY_icQKFPCeZG9Urep_E-MFrPUZ8tk0_OjJyZmxXP7kEHJ8zyimSI5dtdH5Gs2w4F2krsPRBPy0W4rGl0H9-3s8_pD3Oah1gC4z9Zi5OkLLDEQmBIO1Bspw",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        place = data.address;
        console.log(data.address);
      });

    //  console.log('address',data.address);
    const array = [];
    array.push(
      <Mapir.Marker
        coordinates={[e.lngLat.lng, e.lngLat.lat]}
        anchor="bottom"
      />
    );
    setMarkerArray(array);
  }
  //   function DisplayAddress() {
  //     setaddress(place)
  // }
  function DisplayAddress() {
    // setaddress(place)

    // setValue(place);
    // const [value, setValue] = React.useState("Controlled");
    // console.log("address", place);
    // console.log('valueaddresschild',valueaddress)
    props.Getlocation(place);

    // setValue(place);
  }
  ///////////////////////////    textfeild   /////////////////////////////////////////////////////////////////////

  // const handleChange = () => {
  //   setValue();

  // };
  return (
    <div>
      <div>
        {/* <div> */}

        {/* <p>{address}</p> */}
        {/* </div> */}
        <button onClick={DisplayAddress}>ثبت</button>
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="آدرس"
          multiline
          rows={4}
          defaultValue={place}
          // onChange={place}
          sx={{ width: "400px", fontSize: "5px" }}
        />
      </div>

      <div className="app">
        <div
          style={{
            position: "relative",
            width: "500px",
            height: "400px",
            // width: "100px",
            // height: "200px",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              // opacity: 0.3,
              width: "10px",
              height: "10px",
              position: "absolute",
              top: "50%",
              left: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
            }}
          ></div>
          <Mapir center={coord} Map={Map} onClick={reverseFunction}>
            {markerArray}
          </Mapir>
        </div>
      </div>
    </div>
  );
};
export default DisplayMap;
