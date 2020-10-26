import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Button, Typography } from '@material-ui/core';

import { connectionWithUser } from 'store/connection';

const useStyles = makeStyles((theme) => ({
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

export const AccountPage = (props) => {
  const classes = useStyles();

  // if (!props.user) {
  //   return <Redirect to="/login" />
  // }

  return (
    <div className={classes.root}>
      <Avatar src={props.user.avatar} className={classes.large} />

      <div>
        <Typography variant="h6" gutterBottom>
          {props.user.email}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className={classes.change}
          component={Link}
          to="/edit"
        >
          Изменить
        </Button>
      </div>
    </div>
  );
};

export default connectionWithUser(AccountPage);


