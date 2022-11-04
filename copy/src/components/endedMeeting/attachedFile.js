import "./attachedFile.css";
import download from "../../img/Iconly-Light-Download.svg";
import { Divider, TextField } from "@mui/material";
function AttachedFile() {
  return (
    <div className="containerAttached">
      <p className="titleAttached">فایل های پیوست</p>
      <div className="attachedRow">
        <p className="pAttached">نام فایل و فرمت</p>
        <img src={download}></img>
      </div>
      <Divider className="dividerAttached" />
      <div className="attachedRow">
        <p className="pAttached">نام فایل و فرمت</p>
        <img src={download}></img>
      </div>
      <Divider className="dividerAttached" />
      <div className="attachedRow">
        <p className="pAttached">نام فایل و فرمت</p>
        <img src={download}></img>
      </div>
      <Divider className="dividerAttached" />
    </div>
  );
}
export default AttachedFile;
