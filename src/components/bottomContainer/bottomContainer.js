import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap:'12px',
  },
  applyButton:{
    padding:'12px',
    backgroundColor:'rgb(85, 239, 196)'
  },
  expContainer:{
    display:'flex',
    flexDirection:'column',
    gap:4,
    marginTop:12,
    marginBottom:12
  },
  view:{
    textAlign:'center'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
});

const BottomContainer = (props) => {
  const {minExp} = props
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box>
          <Typography variant="subtitle1" color="primary" className={classes.view}>
            View Job
          </Typography>
          <div className={classes.expContainer}>
          <Typography variant="body2" color="secondary">
            Minimum Experience
          </Typography>
          <Typography variant="body2" color="secondary">
            {minExp ? `${minExp} Years` : "NA"}
          </Typography>
          </div>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.applyButton}
          >
            Easy Apply
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BottomContainer;
