import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();  // Use the authentication context
  const location = useLocation();

  if (!isLoggedIn) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If the user is authenticated, allow access to the protected route
  return children;
};

export default PrivateRoute;
