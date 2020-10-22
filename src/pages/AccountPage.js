import React from 'react';
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

  const changeForm = () => {
    return <h1>HI</h1>
  };

  return (
    <div className={classes.root}>
      <Avatar src="/static/images/avatar/1.jpg" className={classes.large} />
      <div>
        <Typography variant="h6" gutterBottom>
          {props.user.email}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.change}
          onClick={changeForm}
        >
          Изменить
        </Button>
      </div>
    </div>
  );
};

export default connectionWithUser(AccountPage);


