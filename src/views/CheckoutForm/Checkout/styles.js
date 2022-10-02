import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
    layout: {
      marginTop: '5%',
      width: 'auto',
      maxWidth: '700px',
      margin: '5% auto 0',
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 60,
      },
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
  };
});

export default useStyles;
