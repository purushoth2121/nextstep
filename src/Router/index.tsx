import React from "react";
import { Routes, Route } from "react-router-dom";
import Profilehiring from "../pages/hiring/Profilehiring";
import Jobseekers from "../pages/hiring/Jobseekers";
import Jobseekerhome from "../pages/Jobseeker/Jobseekerhome";
import Dashboards from "../pages/Jobseeker/Dashboards";
import Profile from "../pages/Jobseeker/Profile";
import Applyedjobs from "../pages/Jobseeker/Appliedjobs";
import { getUserRole } from "../utils";
import Unauthorized from "../common/unathuroized/unauthorized";
import { RouteItem } from "../types";
import Createjob from "../pages/hiring/create-job";

const Router = () => {
  const userInfo = getUserRole();
  const Routerlinks: RouteItem[] = [
    {
      path: "/createjob",
      component: <Createjob />,
      access: ["HIRING"],
    },
    {
      path: "/jobseekers",
      component: <Jobseekers />,
      access: ["HIRING"],
    },
    {
      path: "/profilehiring",
      component: <Profilehiring />,
      access: ["HIRING"],
    },
    {
      path: "/jobseekerhome",
      component: <Jobseekerhome />,
      access: ["JOB_SEEKER"],
    },
    {
      path: "/dashboards",
      component: <Dashboards />,
      access: ["JOB_SEEKER","HIRING"],
    },
    {
      path: "/profile",
      component: <Profile />,
      access: ["JOB_SEEKER"],
    },
    {
      path: "/applied",
      component: <Applyedjobs />,
      access: ["JOB_SEEKER"],
    },
    {
      path: "/*",
      component: <Unauthorized />,
      access: [],
    },
  ];

  return (
    <Routes>
      {Routerlinks.map((item) => {
        if (item.access.includes(userInfo.role)) {
          return <Route path={item.path} element={item.component}></Route>;
        } else {
          return (
            <Route path={item.path} element={<Unauthorized />}></Route>
          );
        }
      })}
    </Routes>
  );
};

export default Router;
