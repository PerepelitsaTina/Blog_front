import LoginForm from 'components/LoginForm';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const LoginPage = (props) => {
  if (props.user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h2>Вход</h2>
      <LoginForm />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.main.user
  };
};

export default connect(mapStateToProps, null)(LoginPage);
