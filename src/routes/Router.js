import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { connectionWithUser } from 'utils';
import StartPage from 'pages/StartPage';

export const Router = (props) => {
  return (
    <Switch>
      {routes.map((route) => {
        if (
          (route.role && route.role !== 'none' && !props.user) ||
          (route.role === 'none' && props.user) ||
          (route.role === 'admin' && props.user.role !== 'admin')
        ) {
          return null;
        }

        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      })}

      <Route
        path="/"
        component={() => "404"}
      />
    </Switch>
  );
};

const routes = [
  {
    path: '/reg',
    exact: true,
    component: RegisterPage,
    role: 'none',
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/start',
    exact: true,
    component: StartPage,
    role: "user"
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    role: 'none',
  },

];

export default connectionWithUser(Router);
