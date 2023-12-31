import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  faBookOpenReader,
  faChartBar,
  faCircleInfo,
  faDiagramProject,
  faDoorOpen,
  faGear,
  faRegistered,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
const SideBar = () => {
  event.preventDefault();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="page d-flex">
        <div className="Sidebar bg-white p-20 p-relative">
          <h3 className="fw-l ff-ss p-relative txt-c mt-0">BO7MID</h3>
          <ul className="p-0 list-none">
            <li>
              <Link
                to="/dashboard"
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
              >
                <i>
                  <FontAwesomeIcon icon={faChartBar} />
                </i>
                <span className="pl-2"> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
              >
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span className="pl-2"> Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
              >
                <i>
                  <FontAwesomeIcon icon={faBookOpenReader} />
                </i>
                <span className="pl-2"> Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
              >
                <i>
                  <FontAwesomeIcon icon={faDiagramProject} />
                </i>
                <span className="pl-2"> Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
              >
                <i>
                  <FontAwesomeIcon icon={faGear} />
                </i>
                <span className="pl-2"> Settings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/help"
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
              >
                <i>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </i>
                <span className="pl-2"> Help</span>
              </Link>
            </li>
            {isAuth ? (
              <li onClick={logoutHandler}>
                <Link
                  to="/login"
                  className="active d-flex align-center fs-14 c-black rad-6 p-10"
                >
                  <i>
                    <FontAwesomeIcon icon={faDoorOpen} />
                  </i>
                  <span className="pl-2"> Logout</span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="active d-flex align-center fs-14 c-black rad-6 p-10"
                  >
                    <i>
                      <FontAwesomeIcon icon={faRightToBracket} />
                    </i>
                    <span className="pl-2"> Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="active d-flex align-center fs-14 c-black rad-6 p-10"
                  >
                    <i>
                      <FontAwesomeIcon icon={faRegistered} />
                    </i>
                    <span className="pl-2"> Register</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SideBar;
