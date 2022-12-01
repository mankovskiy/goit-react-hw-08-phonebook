import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
// import { Contacts } from 'pages/Contacts';
// import { Login } from 'pages/Login';
// import { Register } from 'pages/Register';
// import { Home } from 'pages/Home';
import { Layout } from './Layout';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({
    default: module.Home,
  }))
);
const Login = lazy(() =>
  import('../pages/Login').then(module => ({
    default: module.Login,
  }))
);
const Register = lazy(() =>
  import('../pages/Register').then(module => ({
    default: module.Register,
  }))
);
const Contacts = lazy(() =>
  import('../pages/Contacts').then(module => ({
    default: module.Contacts,
  }))
);

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={Register} />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/contacts" component={Login} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" component={Contacts} />}
        />
      </Route>
    </Routes>
  );
}
