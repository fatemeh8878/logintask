//route page

import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Folder from "../Pages/FolderAdd";
import Login from "../Pages/Login";
const Router = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/addFolder", element: <Folder /> },
  ]);

  return element;
};

export default Router;
