import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(1),
    fontSize:'16px',
    fontWeight:'initial'
  },
  
  location: {
    color: theme.palette.text.secondary,
    fontSize:'14px',

  },
}));

const JobHeader = ({ logo, title, location,jobRole }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={logo} className={classes.avatar} />
      <div>
        <Typography variant="body" component="div" className={classes.location}>
          {title}
        </Typography>
        <Typography  component="div" className={classes.title}>
          {jobRole}
        </Typography>
        <Typography variant="p" className={classes.location}>
          {location}
        </Typography>
      </div>
    </div>
  );
};

export default JobHeader;