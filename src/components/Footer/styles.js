import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    footerBox: {
      boxShadow: "none",
      borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    },
    container: {
      padding: "32px 0",
    },
    title: {
      display: "flex!important",
      alignItems: "center",
      fontSize: "16px!important",
      fontWeight: "600!important",
    },
    image: {
      height: "20px!important",
      marginRight: "5px",
    },
    formNewsletter: {
      position: "relative",
      width: "100%",
      display: "table",
      borderCollapse: "separate",
      borderBottom: "2px solid #eee!important",
    },
    inputNewsletter: {
      color: "#767676",
      backgroundColor: "transparent",
      height: "55px",
      width: "70%",
      borderRadius: 0,
      border: "none",
      padding: "0",
      fontSize: "14px",
      lineHeight: "20px",
      outline: "none",
    },
    buttonNewsletter: {
      background: "transparent",
      color: "#111",
      height: " 55px",
      fontWeight: "600",
      padding: "0",
      minWidth: "auto",
      position: "absolute",
      right: "0",
      margin: "0",
      textTransform: "uppercase",
      outline: "none",
      border: "none",
      cursor: "pointer",
      transition: "ease-in-out 0.3s",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  };
});

export default useStyles;
