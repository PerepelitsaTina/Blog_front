import { Avatar, makeStyles, Typography } from '@material-ui/core';
import userApi from 'api/userApi';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getOneUser } from 'store/main/mainThunks';

export class UserPage extends Component {
  state = {
    currentUser: {}
  }

  async componentDidMount () {
    const userId = this.props.match.params.id;
    const currentUser = await userApi.getOne(userId);
    this.setState({
      currentUser
    })
  }
  render() {
    const classes = makeStyles((theme) => ({
      root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
      },
    }));
    return (

      <div>
        <Avatar src="/static/images/avatar/1.jpg" className={classes.large} />
        <Typography variant="h6" gutterBottom>
          {this.state.currentUser.email}
        </Typography>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOneUser: (id) => dispatch(getOneUser(id))
});

export default connect(null, mapDispatchToProps)(withRouter(UserPage));