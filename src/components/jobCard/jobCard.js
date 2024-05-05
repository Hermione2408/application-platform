import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import JobHeader from '../jobHeading/jobHeading';
import BottomContainer from '../bottomContainer/bottomContainer';
import {Dialog,DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { useState } from 'react';

import "./jobCard.css"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: '1px solid #ccc',
    borderRadius: 20,
    padding: 12,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 8,
  },
  fadeText: {
    position: 'relative',
    maxHeight: '12.5em', // Adjust based on line-height and the amount of text you want before fading
    overflow: 'hidden',
    fontSize:14,
    fontWeight:200,
    '&:after': {
      content: '""',
      textAlign: 'right',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '100%',
      height: '10.5em', // Increased height for a larger fading area
      background: 'linear-gradient(to bottom, transparent, white 80%)', // Adjusted gradient for a more gradual transition
    }
  },
  about:{
    fontSize:16
  },
  salary: {
    color: '#666',
    fontSize:16,
    fontWeight:300
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    textDecoration: 'none',
    borderRadius: 4,
    marginTop: 12,
  },
  view:{
    textAlign:'center',
    marginTop:'-42px',
    zIndex:10
  },
  dialogtitle:{
    textAlign:'center',
  },
  dialogsubtitle:{
    paddingTop:0,
    paddingBottom:0

  },
  content:{
    display:'flex',
    flexDirection:'column',
    gap:8
  }
});

const JobCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card className={classes.root}>
      <JobHeader logo={props.logoUrl}
        title={props.companyName}
        location={props.location}
        jobRole={props.jobRole}
        />
      <CardContent className={classes.content}>
        <Typography variant="body"  className={classes.salary}>
          Estimated salary: {`${props.minJdSalary ? `${props.minJdSalary} - ` : ''}${props.maxJdSalary} ${props.salaryCurrencyCode}`}
        </Typography>
        <Typography variant="body" className={classes.about}>
          About Company:
        </Typography>
        <Typography variant="body" className={classes.fadeText}>
         {props.jobDetailsFromCompany}
        </Typography>
        <Typography onClick={handleClickOpen} variant="subtitle" color="primary" className={classes.view}>
            View Job
          </Typography>
      </CardContent>
      <BottomContainer minExp={props.minExp}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle variant="body" id="alert-dialog-title" className={classes.dialogtitle}>{"Job Description"}</DialogTitle>
        <DialogTitle variant="body" id="alert-dialog-subtitle" className={classes.dialogsubtitle}>{"About Company"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.jobDetailsFromCompany}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default JobCard;