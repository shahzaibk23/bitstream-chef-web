// ProtectedRoute.js
import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const history = useHistory();

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (!email) {
      history.push('/');
    }
  }, [history]);

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
