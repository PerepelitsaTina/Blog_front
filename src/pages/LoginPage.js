import LoginForm from 'components/LoginForm';
import React from 'react';
import { connect } from 'react-redux';

const LoginPage = (props) => {
  return (
    <div>
      <h2>Вход</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;