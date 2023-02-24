// import { LoginPage } from 'pages/LoginPage';
// import { RegisterPage } from 'pages/RegisterPage';
import { NavLink, Route, Routes } from 'react-router-dom';
// import Phonebook from './Phonebook';
import css from './app.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { logoutThunk, refreshThunk } from ' redux/auth/auth-thunk';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { selectToken } from ' redux/auth/auth-selector';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Phonebook = lazy(() => import('../components/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const selectorToken = useSelector(selectToken);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.header_nav}>
          {!selectorToken && (
            <>
              <NavLink to="/register" className={css.header_link}>
                Register
              </NavLink>
              <NavLink to="/login" className={css.header_link}>
                Login
              </NavLink>
            </>
          )}
          {selectorToken && (
            <NavLink to="/contacts" className={css.header_link}>
              Phonebook
            </NavLink>
          )}
        </nav>
        {selectorToken && (
          <button
            className={css.header_logout}
            type="button"
            onClick={() => dispatch(logoutThunk())}
          >
            Log out
          </button>
        )}
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<RegisterPage />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/contacts" element={<Phonebook />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
