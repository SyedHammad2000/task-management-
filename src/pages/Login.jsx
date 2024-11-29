import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../component/Input";
import { Inpstyle } from "../component/Input";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const eRef = useRef(null);
  const pRef = useRef(null);
  const { login } = useAuth();
  const handleSignin = async (e) => {
    e.preventDefault();
    if (!eRef.current || !pRef.current) {
      
      alert("wrong usercredential");
      return;
    }

    login(eRef.current.value, pRef.current.value);
    alert("signin success");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#0b090a",
          border: ".5px solid white",
        }}
        className="flex flex-col h-[70%] lg:w-[25%] w-[60%] md:w-[20rem] sm:w-[20rem]  p-[22px] rounded-md gap-5"
      >
        <div className="text-gray-600 ">
          <h1 className="text-[20px] font-bold text-center text-white">
            LOGIN
          </h1>
          <p className="text-[10px] mt-2 text-center">
            please enter your login and password
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <input
            type={"text"}
            placeholder={"Email"}
            className={Inpstyle}
            ref={eRef}
          />

          <input
            type={"password"}
            placeholder={"Password"}
            className={Inpstyle}
            ref={pRef}
          />
          <p className="text-gray-600 text-center text-[10px] cursor-pointer">
            forgot password?
          </p>
        </div>
        <div className="mx-auto">
          <button
            className="btn btn-dark text-[10px] px-[30px] border-1 border-white"
            onClick={handleSignin}
          >
            Login
          </button>
        </div>
        <div className="">
          <p className="text-center text-white text-[10px]">
            Don't have an account?
            <Link className="text-gray-600" to={"/signup"}>
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
