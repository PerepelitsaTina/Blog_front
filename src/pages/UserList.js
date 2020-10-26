import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import UserCard from 'components/UserCard';
import { connect } from 'react-redux';
import { getUserList } from 'store/main/mainThunks';
import { connectionWithUser } from 'store/connection';
import { Redirect } from 'react-router-dom';


class UserList extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const users = await this.props.getAllUsers();
    this.setState({
      users
    });
  }


  render() {
    const classes = makeStyles(() => ({
      root: {
        flexGrow: 1
      }
    }));

    if (!this.props.user) {
      return <Redirect to="/login" />
    }
    return (
      <div className={classes.root}>
        {this.state.users.map(currentUser => (
          <UserCard
            currentUser={currentUser}
            key={currentUser.id}
          />
        )
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUserList())
});

const mapStateToProps = (state) => ({
  user: state.main.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)