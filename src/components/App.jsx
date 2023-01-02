
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import { MainLayout } from './MainLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RegisterPage, LoginPage, PhonebookPage } from 'pages';
import { PublicRestrictedRoute } from './PublicRestrictedRoute';
import { globalStyles } from 'theme/globalStyles';
import Home from 'pages/Home';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles styles={globalStyles} />

      <Routes>
        <Route path="/" element={<MainLayout />}>
        < Route  index  element = {< Home  />} />
          <Route
            path="login"
            element={<PublicRestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="register"
            element={<PublicRestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path ='contact'
            element={<PrivateRoute component={<PhonebookPage />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};