import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import JobHeader from '../jobHeading/jobHeading';
import BottomContainer from '../bottomContainer/bottomContainer';
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
  company: {
    marginBottom: 12,
    fontSize:14
  },
  about:{
    fontSize:16
  },
  salary: {
    color: '#666',
    fontSize:14
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
  content:{
    display:'flex',
    flexDirection:'column',
    gap:8
  }
});

const JobCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <JobHeader logo={props.logoUrl}
        title={props.companyName}
        location={props.location}
        jobRole={props.jobRole}
        />
      <CardContent className={classes.content}>
        <Typography variant="body2" className={classes.salary}>
          Estimated salary: {`${props.minJdSalary ? `${props.minJdSalary} - ` : ''}${props.maxJdSalary} ${props.salaryCurrencyCode}`}
        </Typography>
        <Typography className={classes.about}>
          About Company:
        </Typography>
        <Typography variant="body2" component="p" className={classes.company}>
          About us: <br />{props.jobDetailsFromCompany}
        </Typography>
      </CardContent>
      <BottomContainer minExp={props.minExp}/>
    </Card>
  );
};

export default JobCard;