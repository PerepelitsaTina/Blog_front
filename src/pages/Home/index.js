import { Grid, makeStyles } from '@material-ui/core';
import userApi from 'api/userApi';
import UserCard from 'components/UserCard';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserList } from 'store/main/mainThunks';

class Home extends Component {
  state = {
    users: []
  }

  async componentDidMount () {
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
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
        >
          {this.state.users.map(user => (
            <Grid 
              key={user.id} 
              item 
              xs
            >
              <UserCard 
                user={user}
              />
            </Grid>
          )
          )}
      </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUserList())
});

export default connect(null, mapDispatchToProps)(Home)