import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({ component: C, appProps, ...rest}) {
  return(
    <Route
    {...rest}
    render={props =>
      // If the user is authenticated, then we simply render the passed in component. And if the user is not authenticated, then we use the Redirect React Router v4 component to redirect the user to the login page. We also pass in the current path to the login page (redirect in the querystring). We will use this later to redirect us back after the user logs in.
    appProps.isAuthenticated
    ? <C {...props}{...appProps} />
    : <Redirect
    to={`/login?redirect=${props.location.pathname}${props.location.search}`}
    />}
    />
  );
}