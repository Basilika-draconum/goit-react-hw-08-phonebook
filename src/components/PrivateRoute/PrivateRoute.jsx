import { selectToken } from ' redux/auth/auth-selector';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/register');
      return;
    }
    navigate('/contacts');
  }, [token, navigate]);

  return <Outlet />;
};
