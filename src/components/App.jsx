import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import Phonebook from './Phonebook';
import css from './app.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logoutThunk, refreshThunk } from ' redux/auth/auth-thunk';
// import { PrivateRoute } from './PrivateRoute/PrivateRoute';
// import { PublicRoute } from './PublicRoute/PublicRoute';
// import { selectToken } from ' redux/auth/aut-selector';
// import { Visibility } from '@mui/icons-material';

export const App = () => {
  const dispatch = useDispatch();
  // const selectorToken = useSelector(selectToken);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <header className={css.header}>
        <nav className={css.header_nav}>
          <NavLink to="/login" className={css.header_link}>
            Login
          </NavLink>
          <NavLink to="/register" className={css.header_link}>
            Register
          </NavLink>
          <NavLink to="/contacts" className={css.header_link}>
            Phonebook
          </NavLink>
        </nav>
        <button
          className={css.header_logout}
          type="button"
          onClick={() => dispatch(logoutThunk())}
        >
          Log out
        </button>
      </header>

      <main>
        <Routes>
          <Route path="*" element={<RegisterPage />} />
          {/* <Route path="/contacts" element={<PrivateRoute />}> */}
          <Route path="/contacts" element={<Phonebook />} />
          {/* </Route> */}
          {/* <Route path="/" element={<PublicRoute />}> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* </Route> */}
        </Routes>
      </main>
    </div>
  );
};
