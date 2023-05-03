import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, googleSign, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlerSignUp = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setError("password should be use 6 characters or longer ");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        form.reset();
        updateUserData(newUser, name, photo);
        navigate("/");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };

  const handlerGoogleLogin = () => {
    googleSign()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  return (
    <div className="hero  mt-3 ">
      <div className="hero-content  flex-col w-full  lg:w-5/6 ">
        <div className=" bg-gradient-to-r from-lime-500  to-green-700 card rounded-md border flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center mt-7 ">
            <h1 className="text-2xl lg:text-4xl font-bold">Sign Up</h1>
          </div>
          <form onSubmit={handlerSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-700 font-semibold">Name</span>
              </label>
              <input type="text" name="name" placeholder="name" className="hover:bg-white input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-700 font-semibold">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="hover:bg-white input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-700 font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="hover:bg-white input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-700 font-semibold">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>

            <p className="text-red-900 font-medium">{error}</p>
            <div className="form-control mt-6 ">
              <button type="submit" className="btn hover:bg-tertiary  rounded-sm bg-tertiary border-0 text-textColor ">
                Sign Up
              </button>
            </div>

            <div className="form-control mt-2">
              <button onClick={handlerGoogleLogin} type="button" className="btn google-btn space-x-2">
                <FcGoogle className="w-7 h-5" />
                <span>Continue with Google</span>
              </button>
            </div>
            <div className="form-control mt-2">
              <button onClick={handlerGoogleLogin} type="button" className="btn google-btn space-x-2">
                <FaGithub className="w-7 h-5" />
                <span>Continue with Github</span>
              </button>
            </div>
          </form>
          <div className="text-center mb-8 font-semibold ">
            <label className="text-textColor text-sm">
              Already have an account?
              <span>
                <Link to="/sign-in" className="label-text-alt link link-hover text-amber-500  ml-2 ">
                  Login
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
