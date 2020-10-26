import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, Box, Button } from '@material-ui/core';

import { connectionWithUser } from 'store/connection';
import userApi from 'api/userApi';

class UserCard extends Component {

  handleClick = async () => {
    try {
      await userApi.deleteUser(this.props.currentUser.id);
      this.props.getUsers();
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  render() {
    const classes = makeStyles((theme) => ({
      root: {
        minWidth: 275,
      },
      card: {
        display: "flex"
      },
      large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      }
    }));

    return (
      <Card className={classes.root}>
        <CardContent>
          <Box
            className={classes.card}
          >
            <Avatar
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            />

            <Link
              to={`/users/${this.props.currentUser.id}`}
            >
              {this.props.currentUser.email}
            </Link>

            {this.props.user.role === "admin" &&
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.change}
                  component={Link}
                  to={`/edit/${this.props.currentUser.id}`}
                >
                  Изменить
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.change}
                  onClick={this.handleClick}
                >
                  Удалить
                </Button>
              </div>
            }
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default connectionWithUser(UserCard);