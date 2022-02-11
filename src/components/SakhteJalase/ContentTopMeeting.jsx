import * as React from "react";
import { TextField } from "@mui/material";
import "./ContentTopMeeting.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  input1: {
    height: "45px",
    width: "260px",
    fontSize: "14px",
  },
  input2: {
    height: "130px",
    width: "550px",
    fontSize: "14px",
  },
  container: {
    flexdirection: "column",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    height: "260px",
    width: "800px",
    marginLeft: "30%",
    marginTop: "5%",
    borderRadius: "5px",

    // backgroundColor: "#EFEAEB",
    dir: "rtl",
  },
  first: {
    display: "flex",
    flexdirection: "row",
    width: "800px",
    // fontSize: "14px",
  },
  first_one: {
    display: "block",
    marginRight: "16%",
    marginTop: "5%",
    marginBottom: "5%",
    paddingLeft: "20px",
    fontSize: "14px",
  },
  first_two: {
    display: "block",
    marginLeft: "15%",
    marginBottom: "5%",
    marginTop: "5%",
    height: "50px",
    width: "300px",
    fontSize: "14px",
  },
  two: {
    marginRight: "0%",
    display: "block",
    marginTop: "-20px",
    marginBottom: "20px",
  },
});

const ContentTopMeeting = withStyles(styles)((props) => {
  const { classes } = props;
  return (
    <ThemeProvider>
      <CssBaseline />
      <div dir="rtl" className={classes.container}>
        <div className={classes.first}>
          <div className={classes.first_one}>
            <TextField
              variant="outlined"
              label="عنوان"
              multiline
              rows={1}
              InputProps={{
                className: classes.input1,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.first_two}>
            <TextField
              variant="outlined"
              label="کد جلسه پیرو"
              multiline
              rows={1}
              InputProps={{
                className: classes.input1,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </div>
        </div>
        <div className={classes.two}>
          <TextField
            variant="outlined"
            label="توضیحات"
            multiline
            rows={8}
            InputProps={{
              className: classes.input2,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
});
export default ContentTopMeeting;
