import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { currentUserValue } from './Actions/authActions';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routerProps)=>{
                
            }}
        
        />
    )
};
