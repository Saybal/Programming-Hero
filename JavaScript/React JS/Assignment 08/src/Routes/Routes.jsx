import React from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage_default from '../Pages/ErrorPage_default/ErrorPage_default';
import Home from '../Component/Home/Home';
import Contact from '../Component/Contact/Contact';
import Lawyerdetails from '../Pages/Lawyer_list/Lawyerdetails';
import BookDetails from '../Pages/BookDetails/BookDetails';
import Blog from '../Pages/BLog/Blog';
  
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
    errorElement: <ErrorPage_default />,
      
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      // 
      {
        index: true,
        path: '/details/:id',
        Component: Lawyerdetails,
      },
      {
        index: true,
        path: '/booking',
        Component: BookDetails,
      },
      {
        index: true,
        path: '/blog',
        Component: Blog
      }
    ]
    },
  ]);