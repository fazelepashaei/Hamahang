import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import book from "../img/book.svg";
import document from "../img/document-text.svg";
import activity from "../img/activity.svg";
import task from "../img/task-square.svg";
import user from "../img/user-edit.svg";
import notification from "../img/notification.svg";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { dateContext } from "./context/ContextDate";
import "./drawer.css";
import { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../Themes/normalFont";

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const IconButton2 = styled(IconButton, {
  //   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",

  color: "pink",
  "&.MuiButtonBase-root-MuiListItem-root": {
    backgroundColor: "pink",
  },
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function DrawerPage() {
  const [activeButton, setَActiveButton] = useState(0);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  const { toDay } = React.useContext(dateContext);

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />
      <div
        className="App22"
        dir="rtl"
        style={{ flexDirection: "row", alignItems: "start" }}
      >
        <Box>
          <Drawer variant="permanent" open={open} anchor="left">
            <DrawerHeader>
              <IconButton2
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                open={open}
                sx={{
                  marginLeft: "30px",
                  ...(open && { display: "none" }),
                }}
              >
                <img src={logo} className="logo" />

                <ChevronLeftIcon
                  sx={{
                    paddingBottom: "5px",
                    height: "25px",
                    width: "25px",
                  }}
                />
              </IconButton2>
              <IconButton
                onClick={handleDrawerClose}
                sx={{
                  marginRight: "10px",
                  ...(!open && { display: "none" }),
                }}
              >
                <img src={logo} className="logoOpen" />

                <ChevronRightIcon
                  sx={{
                    height: "25px",
                    width: "25px",
                  }}
                />
              </IconButton>
            </DrawerHeader>
            {open == 1 ? (
              <p>
                {" "}
                {time} {toDay}
              </p>
            ) : (
              <p>{time}</p>
            )}

            <List>
              {[
                { txt: "جلسات", img: document, location: `/` },
                { txt: "تسک های روزانه  ", img: task, location: `/Tasks` },
                { txt: "گزارش گیری", img: activity, location: `/Informe` },
                { txt: "مدیریت اعلان ها", img: notification, location: `/` },
                { txt: "مدیریت منشی ها", img: user, location: `/Secretary` },
                { txt: "اخبار", img: book, location: `/` },
              ].map((item, index) => (
                <ListItem button key={item} className="listItemDrawer">
                  <nav>
                    <Link
                      to={item.location}
                      style={{ textDecoration: "inherit" }}
                    >
                      {/* <Link to={`/`} style={{ textDecoration: "inherit" }}> */}
                      {console.log("locatioon", item.location)}
                      {open == 1 ? (
                        <div
                          style={{
                            flexDirection: "row",
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor:
                              activeButton == index ? "#0F5D7F" : "white",
                            width: "200px",
                          }}
                          onClick={() => {
                            setَActiveButton(index);
                          }}
                        >
                          {" "}
                          <ListItemIcon
                            style={{
                              flexDirection: "column",
                              display: "flex",
                              justifyContent: "flex-start",
                              marginRight: "10px",
                              color: activeButton == index ? "white" : "gray",
                            }}
                          >
                            <img src={item.img} className="icon" />
                          </ListItemIcon>
                          <ListItemText
                            primary={item.txt}
                            className="ItemText"
                            style={{
                              // paddingLeft: "30px",
                              marginTop: "10px",
                              color: activeButton == index ? "white" : "gray",
                            }}
                          />
                        </div>
                      ) : (
                        <div>
                          <ListItemIcon
                            onClick={() => {
                              setَActiveButton(index);
                            }}
                            style={{
                              backgroundColor:
                                activeButton == index ? "#0F5D7F" : "white",
                              width: "100px",
                            }}
                          >
                            <img src={item.img} className="icon2" />
                          </ListItemIcon>
                        </div>
                      )}
                    </Link>
                  </nav>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default DrawerPage;
