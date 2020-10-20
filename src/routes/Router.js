import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Profile from 'pages/Profile';

const Router = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

const routes = [
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
  
];

export default Router;
