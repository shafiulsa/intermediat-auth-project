import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Login from './components/Login/Login';
import Regester from './components/Regester/Regester';
import AuthProvider from './provider/AuthProvider';

import Orders from './components/Orders/Orders';
import PrivetRouter from './components/PrivetRouter/PrivetRouter';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regester',
        element:<Regester></Regester>
      },
      {
        path: '/orders',
        // element:<Orders></Orders>
        element:<PrivetRouter> <Orders></Orders> </PrivetRouter>
      },
      {
        path: '/profile',
        element: <PrivetRouter> <Profile></Profile></PrivetRouter>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <AuthProvider>

           <RouterProvider router={router} />

     </AuthProvider>
     
  </StrictMode>,
)
