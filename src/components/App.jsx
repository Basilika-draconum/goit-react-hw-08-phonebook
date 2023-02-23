import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import Phonebook from './Phonebook';
import css from './app.module.scss';

export const App = () => {
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
      </header>

      <main>
        <Routes>
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  );
};
