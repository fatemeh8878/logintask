import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    background:
      "linear-gradient(156deg, rgba(120,88,166,1) 27%, rgba(97,0,148,1) 100%)",
    height: "100vh",
  },
  body: {
    width: "30% ",
    background: "#fff",
    height: "80%",
    marginTop: "5%",
    borderRadius: "5px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    "@media (max-width:770px)": {
      height: "80vh",
      width: "37vw",
    },
    "@media (max-width:430px)": {
      height: "80vh",
      marginTop: "10%",
      width: "85vw",
    },
  },
  tab: {
    background: "#8d9aa6",
    borderRadius: "5px",
    "& button": {
      width: "30%",
      fontSize: 15,
      color: "#000",
      "&.Mui-selected": {
        background: "#fff !important",
        color: "#8E05C2",
      },
      "@media (max-width:1025px)": {
        width: "auto",
      },
    },
    "& span": {
      display: "none",
    },
  },
  buttonSubmit: {
    background: "#4E9F3D !important",
    color: "#fff !important",
    width: "100% !important",
    marginTop: 10,
    textShadow: "4px 4px 4px  #0B4619",
  },
  input: {
    "& .MuiOutlinedInput-root": {
      // - The Input-root, inside the TextField-root
      borderRadius: 10,
      "&:hover fieldset": {
        border: "2px solid #8E05C2", // - Set the Input border when parent has :hover
      },
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        border: "2px solid #8E05C2",
      },
    },
  },
}));

export default useStyles;
