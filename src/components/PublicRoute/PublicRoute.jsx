import { selectToken } from ' redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  return token ? <Navigate to={location.state?.from ?? '/'} /> : <Outlet />;
};
