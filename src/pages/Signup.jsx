import React, { useRef } from "react";
import { Input, Inpstyle } from "../component/Input";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Signup = () => {
  const eRef = useRef(null);
  const pRef = useRef(null);
  const uRef = useRef(null);
  const proRef = useRef(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!eRef.current || !pRef.current || !uRef.current || !proRef.current) {
      
      alert("wrong usercredential");
      return;
    }

    register(
      eRef.current.value,
      pRef.current.value,
      proRef.current.value,
      uRef.current.value
    );
    alert("signup success");
    navigate("");
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
            SIGN UP
          </h1>
          <p className="text-[10px] mt-2 text-center">
            please create your account
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
            type={"text"}
            placeholder={"User name"}
            className={Inpstyle}
            ref={uRef}
          />
          <input
            type={"password"}
            placeholder={"Password"}
            className={Inpstyle}
            ref={pRef}
          />

          <input
            type="text"
            placeholder={"Profile Url"}
            className={Inpstyle}
            ref={proRef}
          />
        </div>
        <div className="mx-auto">
          <button
            className="btn btn-dark text-[10px] px-[30px] border-1 border-white"
            onClick={handleSignup}
            type="submit"
          >
            SignUp
          </button>
        </div>
        <div className="">
          <p className="text-center text-white text-[10px]">
            Already have an account?
            <Link className="text-gray-600" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
