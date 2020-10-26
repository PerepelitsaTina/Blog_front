import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  Button,
  Container,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';

import userApi from 'api/userApi';
import { connectionWithUser } from 'store/connection';

export class EditUser extends Component {
  state = {
    email: "",
    password: "",
    role: "",
    status: ""
  }

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { email, password, role, status } = await userApi.getOne(userId);
    this.setState({
      email,
      password,
      role,
      status
    })
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const { email, role, status } = this.state;
    const userId = this.props.match.params.id;
    let user = {
      email,
      role,
      status
    };
    console.log(user);
    if (this.state.password) {
      user.password = this.state.password;
    }
    await userApi.edit(user, userId);

    this.props.history.push(`/users/${userId}`);
  }

  render() {
    const classes = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    return (
      <Container
        component="main"
        maxWidth="xs"
        className={classes.paper}
      >
        <Typography component="h1" variant="h5">
          Изменить данные пользователя
        </Typography>

        <form
          className={classes.form}
          onSubmit={this.onSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <TextField
            variant="outlined"
            margin="normal"
            name="password"
            fullWidth
            label="Password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <Select
              name="role"
              onChange={this.handleChange}
              value={this.state.role}
            >
              <MenuItem value="user">
                User
              </MenuItem>

              <MenuItem value="admin">
                Admin
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <Select
              name="status"
              onChange={this.handleChange}
              value={this.state.status}
            >
              <MenuItem value="active">
                Active
              </MenuItem>

              <MenuItem value="disabled">
                Disabled
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Сохранить
          </Button>
        </form>
      </Container>
    );
  }
}

export default connectionWithUser(withRouter(EditUser));
