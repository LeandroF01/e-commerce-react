import React, { useEffect, useState } from "react";
import RegisterUser from "../FormLogin/RegisterUser";
import User from "../User/User";

const Login = () => {
  const [isLogged, setIsLooged] = useState();

  useEffect(() => {
    setIsLooged(localStorage.getItem("token"));
  }, []);

  return (
    <main className="login">{isLogged ? <User /> : <RegisterUser />}</main>
  );
};

export default Login;
