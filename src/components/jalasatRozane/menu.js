import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import normalFont from "../../Themes/normalFont";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

import "../drawer.css";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    minWidth: 180,

    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function MenuFilter() {
  const [date, setDate] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickDate = () => {
    setDate(true);
  };

  return (
    <ThemeProvider theme={normalFont}>
      <CssBaseline />

      <div>
        <div className="filter">
          <Button
            id="demo-customized-button"
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="text"
            disableElevation
            onClick={handleClick}
            startIcon={<KeyboardArrowDownIcon />}
            style={{ color: "#0F5D7F" }}
          >
            فیلتر
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem disableRipple>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  expandIconWrapper={{ marginRight: "20px" }}
                >
                  <ExpandMoreIcon />
                  <Typography>بر اساس</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <nav>
                    <Link to={`/Jalasat`}>
                      <Typography onClick={onClickDate}>روزانه</Typography>
                    </Link>
                  </nav>
                  <Divider />
                  <nav>
                    <Link to={`/Weekly`}>
                      <Typography>هفتگی</Typography>
                    </Link>
                  </nav>
                </AccordionDetails>
              </Accordion>
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
    </ThemeProvider>
  );
}
