import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { logoutUser } from 'store/main/mainThunks';

export const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          component={Link}
          to="/"
          color="inherit"
        >
          Blog
          </Button>

        {props.user && (
          <IconButton
            component={NavLink}
            to="/account"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        )}
        {!props.user &&
          <Button
            component={Link}
            to="/login"
            color="inherit"
          >
            Войти
            </Button>
        }

        {props.user &&
          <Button
            onClick={props.logoutUser}
            color="inherit"
          >
            Выйти
          </Button>
        }

        {props.user &&
          <Button
            component={Link}
            to="/users"
            color="inherit"
          >
            Список пользователей
            </Button>
        }
      </Toolbar>
    </AppBar>
  );
}

const mapDispatchToProps = {
  logoutUser
};

const mapStateToProps = (state) => ({
  user: state.main.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
