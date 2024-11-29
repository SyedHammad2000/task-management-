import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import reImg from "../assets/photo.jpeg";
import { useAuth } from "../context/authContext";
import { motion } from "motion/react";

const Layout = () => {
  const [selectedTag, Setselectedtag] = useState(true);
  const [selectedTag2, Setselectedtag2] = useState(false);
  const [selectedTag3, Setselectedtag3] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const [onOpen, setOpen] = useState();
  const navigate = useNavigate();
  const handleToggle = () => {
    setOpen(!onOpen);
  };

  useEffect(() => {
    if (isAuthenticated == undefined) return;
    if (isAuthenticated) {
      navigate("");
      return;
    } else if (isAuthenticated == false) {
      navigate("login");
      return;
    }
  }, [isAuthenticated]);

  const handlelogout = () => {
    logout();
  };

  return (
    <div className="flex p-2 space-x-1 ">
      <div
        className="h-[100vh] w-[30%] lg:w-[20%] md:w-[10rem]  sm:w-[10rem] sm:d-flex rounded-md flex justify-between items-center flex-col py-3 d-none d-sm-flex "
        style={{ backgroundColor: "rgb(21 21 19)" }}
      >
        <div className="flex justify-center items-center px-2">
          <img
            src={reImg}
            alt=""
            width={"30%"}
            className="rounded-full h-[32px]"
          />
          <p
            className=" text-center font-oswald text-[#FFF7D1]"
            style={{ lineHeight: "16px" }}
          >
            Hammad Imran
          </p>
        </div>
        <div className="space-y-2">
          <div
            className={`w-[100%] lg:w-[20vw] relative group text-center  py-1 ${
              selectedTag ? "bg-[#2f4f4f66]" : ""
            }`}
          >
            <Link
              to={""}
              className="text-[#FFF7D1] px-[40px] py-[4px]"
              onClick={() => {
                Setselectedtag3(false);
                Setselectedtag2(false);
                Setselectedtag(true);
              }}
            >
              All Task
            </Link>
            <span
              className={`absolute right-0 bottom-0 h-0 w-[2px] bg-[#FFF7D1]  transition-all duration-300 ${
                selectedTag ? `h-full` : "group-hover:h-full"
              }`}
            ></span>
          </div>
          <div
            className={`w-[100%] relative group text-center  py-1 ${
              selectedTag2 ? "bg-[#2f4f4f66]" : ""
            }`}
          >
            <Link
              to="important"
              className="text-[#FFF7D1] px-[40px] py-[4px]"
              onClick={() => {
                Setselectedtag3(false);
                Setselectedtag2(true);
                Setselectedtag(false);
              }}
            >
              Important
            </Link>
            <span
              className={`absolute right-0 bottom-0 h-0 w-[2px] bg-[#FFF7D1]  transition-all duration-300 ${
                selectedTag2 ? `h-full` : "group-hover:h-full"
              }`}
            ></span>
          </div>
          <div
            className={`w-[100%] relative group text-center  py-1 ${
              selectedTag3 ? "bg-[#2f4f4f66]" : ""
            }`}
          >
            <Link
              to="completed"
              className="text-[#FFF7D1] px-[40px] py-[4px]"
              onClick={() => {
                Setselectedtag3(true);
                Setselectedtag2(false);
                Setselectedtag(false);
              }}
            >
              Completed
            </Link>
            <span
              className={`absolute right-0 bottom-0 h-0 w-[2px] bg-[#FFF7D1]  transition-all duration-300 ${
                selectedTag3 ? `h-full` : "group-hover:h-full"
              }`}
            ></span>
          </div>
        </div>

        <div>
          <button
            className="btn btn-dark text-[#FFF7D1]"
            onClick={handlelogout}
          >
            Sign Out
          </button>
        </div>
      </div>
      <motion.div
        initial={{ x: -170 }}
        animate={{ x: onOpen ? 0 : -170 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        // exit={{ x: onOpen ? "" : -170 }}
        className="h-[100vh] w-[10rem] absolute top-0 py-3 left-0 rounded-md flex justify-between items-center flex-col d-sm-none z-50"
        style={{ backgroundColor: "rgb(21 21 19)" }}
      >
        <div className="flex justify-center items-center px-2">
          <img
            src={reImg}
            alt=""
            width={"30%"}
            className="rounded-full h-[32px]"
          />
          <p
            className=" text-center font-oswald text-[#FFF7D1]"
            style={{ lineHeight: "16px" }}
          >
            Hammad Imran
          </p>
          <span
            className="fixed top-0 left-[163px] bg-transparent text-white rounded-r-md p-2 z-50 border-1 border-gray-800"
            onClick={handleToggle}
          >
            +
          </span>
        </div>
        <div className="space-y-2">
          <div
            className={`w-[100%] relative group text-center  py-1 ${
              selectedTag ? "bg-[#2f4f4f66]" : ""
            }`}
          >
            <Link
              to={""}
              className="text-[#FFF7D1] px-[40px] py-[4px]"
              onClick={() => {
                Setselectedtag3(false);
                Setselectedtag2(false);
                Setselectedtag(true);
              }}
            >
              All Task
            </Link>
            <span
              className={`absolute right-0 bottom-0 h-0 w-[2px] bg-[#FFF7D1]  transition-all duration-300 ${
                selectedTag ? `h-full` : "group-hover:h-full"
              }`}
            ></span>
          </div>
          <div
            className={`w-[100%] relative group text-center  py-1 ${
              selectedTag2 ? "bg-[#2f4f4f66]" : ""
            }`}
          >
            <Link
              to="important"
              className="text-[#FFF7D1] px-[40px] py-[4px]"
              onClick={() => {
                Setselectedtag3(false);
                Setselectedtag2(true);
                Setselectedtag(false);
              }}
            >
              Important
            </Link>
            <span
              className={`absolute right-0 bottom-0 h-0 w-[2px] bg-[#FFF7D1]  transition-all duration-300 ${
                selectedTag2 ? `h-full` : "group-hover:h-full"
              }`}
            ></span>
          </div>
          <div
            className={`w-[100%] relative group text-center  py-1 ${
              selectedTag3 ? "bg-[#2f4f4f66]" : ""
            }`}
          >
            <Link
              to="completed"
              className="text-[#FFF7D1] px-[40px] py-[4px]"
              onClick={() => {
                Setselectedtag3(true);
                Setselectedtag2(false);
                Setselectedtag(false);
              }}
            >
              Completed
            </Link>
            <span
              className={`absolute right-0 bottom-0 h-0 w-[2px] bg-[#FFF7D1]  transition-all duration-300 ${
                selectedTag3 ? `h-full` : "group-hover:h-full"
              }`}
            ></span>
          </div>
        </div>

        <div>
          <button
            className="btn btn-dark text-[#FFF7D1]"
            onClick={handlelogout}
          >
            Sign Out
          </button>
        </div>
      </motion.div>
      <div
        onClick={() => {
          if (onOpen) {
            handleToggle();
          }
        }}
        className="w-[100%]"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
