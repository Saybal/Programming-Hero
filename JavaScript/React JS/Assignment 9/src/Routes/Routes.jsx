import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root";
import Home from "../Component/Home";
import Trends from "../Component/Trends";
import Productivity from "../Component/Productivity";
import Heathcare from "../Component/Heathcare";
import Education from "../Component/Education";
import Login from "../Pages/Login";
import Registar from "../Pages/Registar";
import AuthLayout from "../Layouts/AuthLayout";
import About from "../About Section/About";
import Profile from "../Pages/Profile_Section/Profile";
import ErrorPage_Default from "../Pages/ErrorPage_Default";
import SocialMedia from "../Component/SocialMedia";
import FAQ from "../Pages/FAQ";
import PrivateRoute from "../Component/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage_Default />,

    children: [
      {
        index: true,
        path: "/login",
        Component: Login,
      },
      {
        index: true,
        path: "/register",
        Component: Registar,
      },
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "/trends",
        Component: Trends,
      },
      {
        index: true,
        path: "/productivity",
        Component: Productivity,
      },
      {
        index: true,
        path: "/healthcare",
        Component: Heathcare,
      },
      {
        index: true,
        path: "/education",
        Component: Education,
      },
      {
        index: true,
        path: "/social",
        Component: SocialMedia,
      },
      {
        index: true,
        path: "/faq",
        Component: FAQ,
      },

      {
        Component: PrivateRoute,
        children: [
          {
            index: true,
            path: "/about",
            Component: About,
          },
          {
            index: true,
            path: "/profile",
            Component: Profile,
          },
        ],
      },
    ],
  },
]);
