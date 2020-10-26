import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import AccountPage from 'pages/AccountPage';
import UserPage from 'pages/UserPage';
import UserList from 'pages/UserList';
import EditUser from 'pages/EditUser';
import EditForm from 'components/EditForm';

import { connectionWithUser } from '../store/connection';

export const Router = (props) => {
  return (
    <Switch>
      {routes.map((route) => {
        if (
          (route.role && route.role !== 'none' && !props.user) ||
          (route.role === 'none' && props.user) ||
          (route.role === 'admin' && props.user.role !== 'admin')
        ) {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={() => (
                <Redirect to={route.redirectTo || "/"} />
              )}
            />
          );
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
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/registration',
    exact: true,
    component: RegisterPage,
    role: 'none',
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    role: 'none',
  },
  {
    path: '/account',
    exact: true,
    component: AccountPage,
    role: "any",
    redirectTo: "/login",
  },
  {
    path: '/edit',
    exact: true,
    component: EditForm,
  },
  {
    path: '/users',
    exact: true,
    component: UserList
  },
  {
    path: '/edit/:id',
    exact: true,
    component: EditUser,
    role: "admin"
  },
  {
    path: '/users/:id',
    exact: true,
    component: UserPage
  }
];

export default connectionWithUser(Router);
