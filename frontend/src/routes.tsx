import { Routes, Route } from "react-router-dom";
import GuardedRoute from './services/authGuard';

import { useContext, useEffect, useState } from 'react';

// Context
import { AuthContext } from './contexts/AuthContext';

const LOGIN_ROUTE = '/login';
const HOME_ROUTE = '/';
const CLIENT_ROUTE = '/client';

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Erro from "./pages/Erro";
import Client from "./pages/Client";

const AppRoutes = (): JSX.Element => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isContextLoaded, setIsContextLoaded] = useState(false);

  useEffect(() => {
    // Simulando um carregamento assíncrono do contexto
    setTimeout(() => {
      setIsContextLoaded(true);
    }, );
  }, []);

  if (!isContextLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        element={
          <GuardedRoute
            isRouteAccessible={!isAuthenticated}
            redirectRoute={HOME_ROUTE}
          />
        }
      >
        {/* Login Route */}
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Route>

      {/* Authenticated Routes */}
      {/* Home Route */}
      <Route
        element={
          <GuardedRoute
            isRouteAccessible={isAuthenticated}
            redirectRoute={LOGIN_ROUTE}
          />
        }
      >
        <Route path={HOME_ROUTE} element={<Home />} />
      </Route>

      {/* Client Route */}
      <Route
        element={
          <GuardedRoute
            isRouteAccessible={isAuthenticated}
            redirectRoute={LOGIN_ROUTE}
          />
        }
      >
        <Route path={CLIENT_ROUTE} element={<Client />} />
      </Route>

      {/* Not found Route */}
      <Route path="*" element={<Erro />} />
    </Routes>
  );
};

export default AppRoutes;
