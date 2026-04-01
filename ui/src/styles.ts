import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.7),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const HeaderContainer = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(5),
  backgroundColor: theme.palette.ocean.main,
  color: theme.palette.common.white,
}));

export const H1Container = styled("h1")(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.ocean.dark,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.ocean.contrastText,
}));
export const PContainer = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.common.white,
}));
export const LinkContainer = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",  
  alignItems: "center",
  gap: theme.spacing(2),
  fontSize: "1rem",
  
  transition: "color 0.3s ease, transform 0.3s ease", 
  cursor: "pointer",

  "&:hover": {
    color: theme.palette.primary.main,   
  },
}));

export const Logo = styled(LinkContainer)(() => ({
  fontSize: "1.5rem",
}));

export const FlexContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const FlexColumnContainer = styled(FlexContainer)(() => ({
  flexDirection: "column",
}));
export const PageBackground = styled("div")<{ backdrop?: string }>(({ theme, backdrop }) => ({
  backgroundImage: backdrop 
    ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.25)), url(${backdrop})`
    : 'none',
  backgroundColor: theme.palette.ocean.dark,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
}));
