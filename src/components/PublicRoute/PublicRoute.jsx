import { selectToken } from ' redux/auth/aut-selector';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to={'/login'} />;
};
