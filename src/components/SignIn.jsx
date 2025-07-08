import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";
// import './index.css';

const SignIn = () => {
  const [user, setUser] = useState({});
  const navi = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = user;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Sign-In successful");
        alert("Sign-In successful");
        navi("/form")
      })
      .catch((error) => {
        console.error(error.code);
        alert(`Error: ${error.code}`);
      });

    setUser({});
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card col-md-4 col-sm-10">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={user.email || ""}
              onChange={handleChange}
              className="form-control"
              id="email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={user.password || ""}
              onChange={handleChange}
              className="form-control"
              id="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <p className="mt-2">
            <Link to="/signup">Dont have account ?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
