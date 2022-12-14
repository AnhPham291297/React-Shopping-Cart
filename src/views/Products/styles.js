import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      // maxWidth: 345, original width style
      maxWidth: "100%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    cardActions: {
      display: "flex",
      justifyContent: "space-between",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
      textTransform: 'capitalize'
    },
  };
});

export default useStyles;
