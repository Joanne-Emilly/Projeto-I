import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Conversor from './pages/Conversor';
import Extenso from './pages/Extenso';
import RandomPeople from './pages/RandomPeople';
import GlobalStyle from './styles';

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
        path: '/extenso',
        element: <Extenso />,
      },
      {
        path: '/random-people',
        element: <RandomPeople />,
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
