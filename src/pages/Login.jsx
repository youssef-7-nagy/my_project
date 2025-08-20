import "./Login.css";
import { useRef } from "react";
import { login } from "../store/slices/Userslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const submit = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      console.log("API Response:", response.data);

      toast.success("Login successful 🎉");

      dispatch(
        login({
          username,
          token: response.data.token,
        })
      );

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Invalid credentials ❌");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form onSubmit={submit} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Your Username"
                ref={usernameRef}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter Your Password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="form-check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember"> Remember me</label>
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
            <p className="signup-link">
              Don’t have an account? <a href="/register">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <Toaster  />
    </>
  );
};
