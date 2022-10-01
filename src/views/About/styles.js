import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    aboutPage: {
      display: 'flex',
      alignItems: 'center',
      padding: '60px 0',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '40px'
      },
    },
    aboutLeft: {
      height: '100%',
      flex: "45%",
    },
    imageAbout: {
      width: '100%',
      height: '500px',
      display: 'block'
    },
    aboutRight: {
      padding: '0 50px',
      flex: "45%"
    }
  };
});

export default useStyles;
