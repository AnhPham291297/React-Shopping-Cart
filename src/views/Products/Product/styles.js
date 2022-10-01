import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  console.log("theme", theme);
  return {
    productContainer: {
      padding: "30px 0",
    },
    image: {
      borderRadius: "10px",
      boxShadow: "0 15px 20px rgba(0,0,0,0.1)",
      height: '450px'
    },
    name: {
      textTransform: "capitalize",
      fontWeight: "600!important",
      color: "#324d67",
      marginBottom: "10px",
    },
    details: {
      color: "#324b67",
      fontWeight: "600!important",
    },
    description: {
      color: "#324b67",
      marginBottom: '20px!important'
    },
    price: {
      fontWeight: "600!important",
      color: "#e51515",
    },
    productBtn: {
      fontSize: "14px",
      marginTop: "15px",
      display: "flex",
      gap: "20px",
    },
  };
});

export default useStyles;
