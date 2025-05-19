import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, email, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((data) => {
        console.log("User Created Successful", data.user);
        const userProfile = {
          ...restFormData,
          email,
          createdAt: data.user?.metadata?.createdAt,
          creationTime: data.user?.metadata?.creationTime,
          lastSignInTime: data.user?.metadata?.lastSignInTime,
        };

        fetch("http://localhost:3000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ ...userProfile, email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data pass successful", data);
            if (data.insertedId) {
              toast.success("User Created Successful");
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log("Error to created User", error);
        toast.error("User created failed!");
      });
  };

  return (
    <div>
      <div className="card bg-base-100  mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center py-3 font-bold">Register now!</h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Type your name"
            />

            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Type your address"
            />

            <label className="label">phone</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Type your contact Number"
            />

            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
          </form>

          <p>
            AlReady have an account{" "}
            <Link className="text-blue-500 ps-1.5" to="/signin">
              Login here{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
