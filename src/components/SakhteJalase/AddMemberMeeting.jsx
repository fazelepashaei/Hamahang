import "../SakhteJalase/AddMemberMeeting.css";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddMemberMeeting() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const CustomTextInput = styled(TextField)({
    "&.MuiTextField-root": {
      width: "150px",
      color: "rgb(17, 2, 102)",
      marginBottom: "20px",
      paddingRight: "10px",
      Animation,
    },
    "&.muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
      height: "300px",
    },
    "&.MuiInputBase": {
      root: {
        height: "200px",
        width: "50vmin",
      },
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#359DFD",
    },
    "& label.Mui-focused": {
      borderLeftWidth: 5,
      color: "#359DFD",
    },
    "& label": {
      borderLeftWidth: 5,
    },
  });
  const CustomTextInputSecondType = styled(TextField)({
    "&.MuiTextField-root": {
      width: "290px",
      marginBottom: "20px",
      marginRight: "10px",
    },
  });

  const CustomTextInputThirdType = styled(TextField)({
    root: {
      width: "300px",
      "& .MuiInputBase-root": {
        height: "560px",
      },
    },
  });

  const styles = (theme) => ({
    input: {
      height: 140,
      width: 280,
    },
  });

  const TirdTypeTextFeild = withStyles(styles)((props) => {
    const { classes } = props;

    return (
      <div style={{ marginLeft: "15px" }}>
        <TextField
          dir="rtl"
          variant="outlined"
          label="توضیحات"
          multiline
          rows={8}
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    );
  });
  return (
    <div>
      <div className="memberbutton">
        <Button dir="rtl" variant="outlined" onClick={handleClickOpen}>
          + اعضا
        </Button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* <BootstrapDialogTitle>اضافه کردن اعضا</BootstrapDialogTitle> */}
        <typography
          style={{
            marginLeft: "70%",
            marginTop: "5%",
            marginBottom: "10%",
            fontSize: "12px",
          }}
        >
          اضافه کردن اعضا
        </typography>
        <div
          style={{
            padding: "5px",
            backgroundColor: "white",
            flexdirection: "column",
            height: "300px",
            display: "block",
            width: "350px",
            marginBottom: "5px",
            justifyContent: "space-between",
          }}
        >
          {/* <div className="main1"> */}
          <div className="modalAddContent1">
            <div
              style={{
                flexdirection: "row",
                display: "flex",
                // marginLeft: "70px",
              }}
            >
              <CustomTextInput
                //   className="inputTitle"
                dir="rtl"
                label="شماره تماس"
                //   color="info"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />

              <CustomTextInput
                className="inputTitle"
                label="نام و نام خانوادگی"
                //   color="info"
                dir="rtl"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
            </div>

            <div style={{ marginLeft: "2px" }}>
              <CustomTextInputSecondType
                // className="inputTitle"
                label="سازمان"
                //   color="info"
                dir="rtl"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
              />
              <TirdTypeTextFeild></TirdTypeTextFeild>
            </div>
          </div>
        </div>

        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            ثبت
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <div className="buttonpage">
        <Button dir="rtl" variant="contained">
          ثبت
        </Button>
      </div>
    </div>
  );
}
