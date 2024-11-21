import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoutes';
import Expense from './pages/Expense';
import Income from './pages/Income';
import React from 'react';


function Logout() {
  localStorage.clear();
  return <Navigate to='/login' />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <ProtectedRoute><Home /></ProtectedRoute>,
      },
      {
        path: 'income',
        element:<ProtectedRoute><Income/></ProtectedRoute>,
      },
      {
        path: 'expense',
        element:<ProtectedRoute><Expense/></ProtectedRoute>,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <RegisterAndLogout />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

