import React, { useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
      {/* <span className="loginTitle">Login as Admin </span> */}
      <form className="loginForm" onSubmit={handleLogin}>
        {/* <label>Email</label> */}
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <label>Password</label> */}
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login as Admin</button>
        {error && <span>oops! Wrong Credential</span>}
      </form>
      {/* <button className="loginRegisterButton">Register as Admin</button> */}
    </div>
  );
};

export default Login;
