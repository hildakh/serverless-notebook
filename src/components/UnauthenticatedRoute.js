import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Window Location. location. href returns the href (URL) of the current page.
function queryString(name, url = window.location.href) {
  name = name.replace(/[[]]/g, '\\$&');

  const regex = new RegExp('[?&]' + name + "(=([^&#]*)|&|#|$)", "i");
  // The exec() method executes a search for a match in a specified string. Returns a result array, or null.
  const results = regex.exec(url);

  if(!results) {
    return null;
  }
  if(!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
export default function UnauthenticatedRoute({ component: C, appProps, ...rest}) {
  const redirect = queryString("redirect");
  return(
    <Route
    {...rest}
    render={props =>
    !appProps.isAuthenticated
    ? <C {...props} {...appProps} />
    : <Redirect to={redirect === "" || redirect === null ? "/" : redirect }
          />}
    />
  );
}