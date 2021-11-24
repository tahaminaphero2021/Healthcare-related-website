import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import authenticationInitialize from "../../FireBase/FireBase.init";

authenticationInitialize();

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/home';

  const handleGoogleLogIn=()=>{
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirectUrl);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  }

  const handleLogIn = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        history.push(redirectUrl);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-50 mx-auto h-auto">
      <h1>Please Login</h1>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email
        </label>
        <input
          onBlur={handleEmailChange}
          type="email"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="enter your email"
          required="required"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
        </label>
        <input
          onBlur={handlePasswordChange}
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="enter your password"
          required="required"
        />
      </div>
      <p className="text-danger">{error}</p>
      <button
        onClick={handleLogIn}
        className="btn btn-secondary d-block"
        type="submit"
      >
        Login
      </button>
      <button
        onClick={handleGoogleLogIn}
        className="btn btn-primary d-block my-4"
      >
        Login with Google
      </button>
      <p>If you first time you can registration.</p>
      <Link to="/register">
        <button className="btn btn-secondary mb-5 ">Registration</button>
      </Link>
    </div>
  );
};

export default Login;
