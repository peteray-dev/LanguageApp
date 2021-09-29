import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { currentUserValue } from './Actions/authActions';
// import { currentUserValue } from '../Actions/authActions';

export const PrivateRoute = ({
  currentUser,
  component: Component,
  roles,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        // const currentUser = authenticationService.currentUserValue;
        const userData = JSON.parse(localStorage.getItem('user'));
        console.log('hey');
        //if localstorage is emptyr
        if (!userData) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: routerProps.location } }}
            />
          );
        }

        //check if role is restricted
        if (roles && roles.indexOf(userData.role) === -1) {
          //role is not authorized and you would be sent to the home page
          return <Redirect to={{ pathname: '/' }} />;
        }

        //if authorized return component
        return <Component {...routerProps} {...rest} />;
      }}
    />
  );
};
