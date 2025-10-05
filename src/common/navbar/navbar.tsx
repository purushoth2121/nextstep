import React, { forwardRef } from "react";
import "./navbar.css";
import { getUserRole } from "../../utils";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  FaPlus,
  FaClipboardList,
  FaUser,
  FaUserCircle,
  FaTachometerAlt,
  FaHome,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface SidebarItem {
  path: string;
  access: string[];
  title: string;
  icon: IconType;
}

const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
  const userInfo = getUserRole();

  const sideBaritems: SidebarItem[] = [
    {
      path: "/createjob",
      access: ["HIRING"],
      title: "Create job",
      icon: FaPlus,
    },
    {
      path: "/dashboards",
      access: ["HIRING"],
      title: "My DASHBOARD",
      icon: FaTachometerAlt,
    },
    {
      path: "/jobseekers",
      access: ["HIRING"],
      title: "JOBSEEKERS",
      icon: FaClipboardList,
    },
    {
      path: "/profilehiring",
      access: ["HIRING"],
      title: "PROFILE",
      icon: FaUserCircle,
    },
    {
      path: "/jobseekerhome",
      access: ["JOB_SEEKER"],
      title: "HOME",
      icon: FaHome,
    },
    {
      path: "/dashboards",
      access: ["JOB_SEEKER"],
      title: "DASHBOARD",
      icon: FaTachometerAlt,
    },
    {
      path: "/applied",
      access: ["JOB_SEEKER"],
      title: "APPLIED",
      icon: FaClipboardList,
    },
    {
      path: "/profile",
      access: ["JOB_SEEKER"],
      title: "PROFILE",
      icon: FaUser,
    },
  ];

  return (
    <div ref={ref} className="navbar-container">
      <nav className="flex-column">
        {sideBaritems.map((item) => {
          if (item.access.includes(userInfo.role)) {
            const Icon = item.icon as unknown as React.ElementType;
            return (
              <div className="navbar" key={item.path}>
                <Nav.Link as={Link} to={item.path} >
                  <span style={{ marginRight: 10 }}>
                    <Icon size={20} />
                  </span>
                  <span>{item.title}</span>
                </Nav.Link>
              </div>
            );
          }
          return null;
        })}
      </nav>
    </div>
  );
});

export default Navbar;
