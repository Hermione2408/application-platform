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
    paddingTop: theme.spacing(0), 
    paddingRight: theme.spacing(2), 
    paddingBottom: theme.spacing(2), 
    paddingLeft: theme.spacing(2), 
    borderRadius: theme.spacing(1),
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap:'12px',
  },
  applyButton:{
    padding:'12px',
    backgroundColor:'rgb(85, 239, 196)',
    fontSize:14
  },
  btmText:{
    fontSize:13
  },
  btmText2:{
    fontSize:14,
    fontWeight:300
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
          <div className={classes.expContainer}>
          <Typography variant="body" color="secondary" className={classes.btmText} >
            Minimum Experience
          </Typography>
          <Typography variant="body" className={classes.btmText2} >
            {minExp ? `${minExp} Years` : "NA"}
          </Typography>
          </div>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button
            variant="contained"
            size="small"
            className={classes.applyButton}
          >
           ⚡ Easy Apply
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default BottomContainer;
