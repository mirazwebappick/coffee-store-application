import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100  mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center py-3 font-bold">Login now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>

          <p>
            Don't have an account{" "}
            <Link to="/register" className="text-blue-500 ps-1.5">
              Register here{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
