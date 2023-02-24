import { selectToken } from ' redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/contacts" /> : <Outlet />;
};
