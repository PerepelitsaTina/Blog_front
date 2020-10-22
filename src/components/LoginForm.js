import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from 'store/main/mainThunks';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    await this.props.loginUserThunk({
      email,
      password
    });

    this.props.history.push('/account');
  }

  render() {
    const classes = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Вход
        </Typography>
          <form
            className={classes.form}
            onSubmit={this.onSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
              value={this.state.email}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              value={this.state.password}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}

            >
              Войти
          </Button>
            <Grid container>
              <Grid item>
                <Link
                  component={NavLink}
                  to="/registration" 
                  variant="body2"
                  >
                  {"Нет аккаунта? Зарегистрироваться"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUserThunk: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));

