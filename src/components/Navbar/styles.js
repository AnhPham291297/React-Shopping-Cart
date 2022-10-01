import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
      // [theme.breakpoints.up('sm')]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
      // },
    },
    title: {
      display: "flex!important",
      alignItems: "center",
    },
    image: {
      height: "20px!important",
      marginRight: "5px",
    },
    navItem: {
      flexGrow: 1,
      display: "flex!important",
      gap: "30px",
    },
    navLink: {
      display: "inline-flex",
      fontSize: "16px",
      fontWeight: "500!important",
      color: "#484848!important",
      position: "relative",
      "&:hover": {
        color: "#cd8f5c!important",
      },
      "&::before": {
        content: '""',
        width: "0%",
        height: "2px",
        backgroundColor: "#cd8f5c",
        display: "inline-block",
        position: "absolute",
        bottom: "-5px",
        left: "0",
        margin: "auto",
        transition: "all 0.4s",
      },
      "&:hover::before": {
        width: "100%",
      },
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    search: {
      border: "1px solid #eaeaea",
      borderRadius: "3px",
      display: "flex",
      alignItems: "center",
      marginRight: "10px",
    },
    searchIconWrapper: {
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px !important",
    },
    inputBase: {
      border: "none",
      padding: "0 10px",
      height: "35px",
      width: "100%",
      background: "transparent",
      color: "#8d8d8d",
      fontWeight: "300",
      marginBottom: "0",
      fontSize: "16px",
      borderRadius: " 0",
    },
  };
});

export default useStyles;
