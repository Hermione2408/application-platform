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
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  location: {
    color: theme.palette.text.secondary,
  },
}));

const JobHeader = ({ logo, title, location,jobRole }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={logo} className={classes.avatar} />
      <div>
        <Typography variant="body2" component="div" className={classes.location}>
          {title}
        </Typography>
        <Typography variant="p" component="div" className={classes.title}>
          {jobRole}
        </Typography>
        <Typography variant="p" className={classes.title}>
          {location}
        </Typography>
      </div>
    </div>
  );
};

export default JobHeader;