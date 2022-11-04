import * as React from "react";
import Modal from "@mui/material/Modal";
import { dateContext } from "../context/ContextDate";
import "./modalRecordVoice.css";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Divider, TextField } from "@mui/material";
import active from "../../img/microphone-active.png";
import inactive from "../../img/microphone-disactive.png";
import MicRecorder from "mic-recorder-to-mp3";
import { useEffect, useState, useRef } from "react";

export default function ModalRecordVoice() {
  const { openModalRecordVoice, setOpenModalRecordVoice } =
    React.useContext(dateContext);
  const handleClose = () => setOpenModalRecordVoice(false);
  const recorder = useRef(null); //Recorder
  const audioPlayer = useRef(null); //Ref for HTML Audio tag
  const timer = useRef(null); //Ref for interval object
  const time = useRef(0); //Stores the value of time
  const displayTime = useRef(null); //Stores dom ref for div to be used to display time

  const [blobURL, setBlobUrl] = useState(null);
  const [isRecording, setIsRecording] = useState(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    //Declares the recorder object and stores it in ref
    recorder.current = new MicRecorder({ bitRate: 128 });
  }, []);

  const startRecording = () => {
    setStatus("inActive");

    //start() returns a promise incase if audio is not blocked by browser
    recorder.current.start().then(() => {
      setIsRecording(true);
    });
  };

  const stopRecording = () => {
    setStatus("active");
    recorder.current
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const newBlobUrl = URL.createObjectURL(blob); //generates url from blob
        setBlobUrl(newBlobUrl); //refreshes the page
        setIsRecording(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    //start/stops timer depending on recording state
    if (isRecording) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [isRecording]);

  const startTimer = () => {
    //sets interval that updates time on UI every second
    time.current = 0;
    timer.current = setInterval(() => {
      time.current = time.current + 1;
      displayTime.current.innerText = time.current;
      //Displays time by updating the DOM directly
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timer.current);
  };

  const setTime = () => {
    if (audioPlayer.current) {
      displayTime.current.innerText = Math.floor(audioPlayer.current.duration);
      //Displays time by updating the DOM directly
      //Note: Math.floor is used since audio time is in decimal and player only displays floor values
      //eg 3.86 will be displayed as 3 seconds in player
    }
  };

  const [status, setStatus] = useState("active");

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div>
        <Modal
          open={openModalRecordVoice}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="mainModalRecord">
            <div className="modalRecord">
              <p className="recordTitle">فایل ضمیمه</p>
              {status == "active" ? (
                <img
                  src={active}
                  onClick={startRecording}
                  className="voiceIcon"
                ></img>
              ) : status == "inActive" ? (
                <img
                  src={inactive}
                  onClick={stopRecording}
                  className="voiceIcon"
                ></img>
              ) : null}
              <p ref={displayTime} style={{ color: "white" }}>
                {" "}
                {timer.current}
              </p>
              <audio
                ref={audioPlayer}
                src={blobURL}
                className="audio"
                controls="controls"
                onLoadedMetadata={setTime} //fethches metadata info like duration
                onTimeUpdate={setTime} //event handler whenever time progresses on player
                onEnded={() => setPlay(false)} //event handler when audio has stopped playing
              />
              {/*handle previous*/}
              <button className="submitModalPeiro" onClick={handleClose}>
                ثبت
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
