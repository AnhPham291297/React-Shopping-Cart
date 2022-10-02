import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const PrivateRoute = (props) => {
  const { currentUser } = useAuth();

  console.log('props children', props.children);

  //! Render
  if (currentUser) {
    return props.children;
  }

  return <Navigate to='/login' replace />;
};

export default PrivateRoute;