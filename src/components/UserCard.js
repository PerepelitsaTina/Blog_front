import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';



class UserCard extends Component {
  render() {
    const classes = makeStyles((theme) => ({
      root: {
        minWidth: 275,
      },
      large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      }    
    }));
    return (
      <Card className={classes.root}>
      <CardContent>
        <Avatar 
          src="/static/images/avatar/1.jpg" 
          className={classes.large} 
          />

        <Link 
          to={`/users/${this.props.user.id}`}>
          {this.props.user.email}
        </Link>
      </CardContent>
    </Card>
    );
  }
}

export default UserCard;