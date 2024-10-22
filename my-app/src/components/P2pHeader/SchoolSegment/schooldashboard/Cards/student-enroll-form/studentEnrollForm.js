import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import DetailsForm from './detailsForm';
import Sidebar from '../../Sidebar/Sidebar'; // Import Sidebar
import Navbar from '../../Navbar/Navbar'; // Import Navbar

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    display: 'flex',
    flexDirection: 'row', // Ensure Sidebar and form are in a row
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    height: '100vh', // Full viewport height
    width: '100%', // Full viewport width
    padding: theme.spacing(2),
  },
  paper: {
    width: '100%',
    maxWidth: 600, // Max width of the form
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#ff8040', // Change the color of the Enroll More button
    color: '#fff',
    '&:hover': {
      backgroundColor: '#faaa72',
    }
  },
  enrollMoreButton: {
    backgroundColor: '#ff8040', // Change the color of the Enroll More button
    color: '#fff',
    '&:hover': {
      backgroundColor: '#faaa72',
    },
  },
}));

export default function StudentEnrollForm() {
  const classes = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEnrollMore = () => {
    setIsSubmitted(false);
  };

  return (
    <React.Fragment>
      <Navbar /> {/* Add Navbar */}
      <main className={classes.layout}>
        <Sidebar visibleItems={['home']} hideProfile={true} /> {/* Add Sidebar */}
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Student's Enroll Form
          </Typography>
          {isSubmitted ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Submitted successfully
              </Typography>
              <Typography variant="subtitle1">
                Enjoy your journey
              </Typography>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  onClick={handleEnrollMore}
                  className={`${classes.button} ${classes.enrollMoreButton}`} // Apply the new style
                >
                  Enroll More
                </Button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <DetailsForm />
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.button}
                >
                  Submit
                </Button>
              </div>
            </React.Fragment>
          )}
        </Paper>
      </main>
      <Copyright />
    </React.Fragment>
  );
}