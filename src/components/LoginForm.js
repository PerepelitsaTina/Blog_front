import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

    this.props.loginUserThunk({
      email,
      password
    })
  }

  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={this.onSubmit}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />

          <br />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
          />

          <br />

          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Войти
          </Button>

          <br />

          <Button
            variant="outlined"
            color="primary"
          >
            <Link to="/reg">Регистрация</Link>
          </Button>

        </div>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUserThunk: (user) => dispatch(loginUser(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
