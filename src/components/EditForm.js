import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { editUserThunk } from 'store/main/mainThunks';

class EditForm extends Component {
  state = {
    email: '',
    password: '',
  }

  async componentDidMount() {
    const { email } = this.props.user
    this.setState({
      email
    })
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
    const user = { email };
    if (password) {
      user.password = password;
    }
    const userId = this.props.user.id;
    await this.props.editUser(user, +userId);
    this.props.history.push('/account');
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

        <Typography
          component="h1"
          variant="h5"
        >
          Изменить данные пользователя
        </Typography>

        <form
          className={classes.form}
          onSubmit={this.onSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            id="email"
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
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
            id="password"
            autoComplete="current-password"
            onChange={this.handleChange}
            value={this.state.password}
          />

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

const mapDispatchToProps = (dispatch) => ({
  editUser: (user, id) => dispatch(editUserThunk(user, id))
});

const mapState = (state) => ({
  user: state.main.user
});

export default connect(mapState, mapDispatchToProps)(withRouter(EditForm));