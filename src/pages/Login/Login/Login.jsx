/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProviders";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signIn, googleSign, updateUserData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handlerLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err?.message);
      });
  };
  const handlerGoogleLogin = () => {
    googleSign()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {});
  };

  const handlerShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="hero mt-20  ">
      <div className="hero-content  flex-col w-full  lg:w-5/6 ">
        <div className=" bg-gradient-to-r from-lime-500  to-green-700 card rounded-md border flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="text-center mt-7 ">
            <h1 className="text-2xl  lg:text-4xl font-bold">Login</h1>
          </div>
          <form onSubmit={handlerLogin} className="card-body relative z-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-700 font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="hover:bg-white input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-700 font-semibold">Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
            </div>

            <div className="mt-4">
              <button type="button" onClick={handlerShowPassword} className="text-gray-700 font-bold">
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>
            <p className="text-red-900 font-medium">{error}</p>
            <div className="form-control mt-6 ">
              <button type="submit" className="btn hover:bg-tertiary  rounded-sm bg-tertiary border-0 text-textColor ">
                Login
              </button>
            </div>

            <div className="flex justify-between items-center">
              <label className="label">
                <span className="label-text-alt link link-hover">Forgot password?</span>
              </label>
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
            <label className=" text-sm">
              Don't have an account?
              <span>
                <Link to="/sign-up" className="label-text-alt link link-hover text-amber-500  ml-2 ">
                  Create New Account
                </Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
