import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            component={Link}
            to="/"
            color="inherit"
          >
          Blog
          </Button>

          <IconButton 
          component={NavLink}
          to="/account"
          color="inherit"
          >
              <AccountCircle />
            </IconButton>
          <Button
            component={Link}
            to="/login"
            color="inherit"
          >Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
