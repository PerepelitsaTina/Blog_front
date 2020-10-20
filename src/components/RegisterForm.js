import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { registerUser } from 'store/main/mainThunks';
import axiosInstance from 'api/axios';

class RegisterForm extends Component {
  state = {
    email: '',
    password: '',
  }

  testReq = async () => {
    const req = await axiosInstance.get('http://localhost:4000/auth/me')
    console.log(req);
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

    this.props.registerUserThunk({
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
            Register
          </Button>


          <Button
           onClick={this.testReq}
          >
            click
          </Button>  
        </div>
      </form>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUserThunk: (user) => dispatch(registerUser(user))
});

export default connect(null, mapDispatchToProps)(RegisterForm);
