import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Conversor from './pages/Conversor';
import Extenso from './pages/Extenso';
import PraticaApi from './pages/terceiroProjeto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/conversor',
        element: <Conversor />,
      },
      {
        path: '/segundo-projeto',
        element: <Extenso />,
      },
      {
        path: '/pratica-api',
        element: <PraticaApi />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
