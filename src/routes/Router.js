import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { connectionWithUser } from '../store/connection';
import AccountPage from 'pages/AccountPage';
import EditForm from 'components/EditForm';
import UserPage from 'pages/UserPage';
import UserList from 'pages/UserList';
import EditUser from 'pages/EditUser';

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
    path: '/registration',
    exact: true,
    component: RegisterPage,
    role: 'none',
  },
  {
    path: '/account',
    exact: true,
    component: AccountPage,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    role: 'none',
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
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/users/:id',
    exact:true,
    component: UserPage
  }

];

export default connectionWithUser(Router);
