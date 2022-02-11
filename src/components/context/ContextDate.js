import * as React from "react";

import { createContext } from "react";

export const dateContext = createContext();

const Context = ({ children }) => {
  let today = new Date()
    .toLocaleDateString("fa-IR")
    .replace(/([۰-۹])/g, (token) =>
      String.fromCharCode(token.charCodeAt(0) - 1728)
    );

  const [selectedDate, setSelectedDate] = React.useState(0);
  const [selectedMeeting, setSelectedMeeting] = React.useState(0);
  const [selectedSecretary, setSelectedSecretary] = React.useState(0);
  const [selectedInforme, setSelectedInforme] = React.useState(0);
  const [toDay, setToDay] = React.useState("");
  const [openModalAdd, setOpenModalAdd] = React.useState(false);
  const [openModalEdit, setOpenModalEdit] = React.useState(false);
  const [openModalPeiro, setOpenModalPeiro] = React.useState(false);
  const [openModalRecordTxt, setOpenModalRecordTxt] = React.useState(false);
  const [openModalRecordVoice, setOpenModalRecordVoice] = React.useState(false);
  const [openModalRecordAttached, setOpenModalRecordAttached] =
    React.useState(false);

  return (
    <dateContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        selectedMeeting,
        setSelectedMeeting,
        toDay,
        setToDay,
        openModalAdd,
        setOpenModalAdd,
        openModalEdit,
        setOpenModalEdit,
        selectedSecretary,
        setSelectedSecretary,
        openModalPeiro,
        setOpenModalPeiro,
        openModalRecordTxt,
        setOpenModalRecordTxt,
        openModalRecordAttached,
        setOpenModalRecordAttached,
        openModalRecordVoice,
        setOpenModalRecordVoice,
        selectedInforme,
        setSelectedInforme,
      }}
    >
      {children}
    </dateContext.Provider>
  );
};
export default Context;
