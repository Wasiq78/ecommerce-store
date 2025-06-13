import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import * as Yup from "yup";
import { useFormik } from "formik";
import { axiosInstance } from "../../api/axios";
import Circular from "../../components/Circular/Circular";
import Snackbar from "../../components/Snackbar/Snackbar";
import { AuthContext } from "../../Context/AuthContext";
import { UserContext } from "../../Context/UserContext";
import Cookies from "js-cookie";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarProps, setSnackBarProps] = useState({
    variant: "soft",
    color: "success",
    message: "",
  });
  const { setAuthState } = useContext(AuthContext);
  const { setUserState } = useContext(UserContext);
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "Password must contain at least one letter and one number"
      ),
  });

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      try {
        const response = await axiosInstance.post("/login", values, {
          headers: { "Content-Type": "application/json" },
        });
        if (response?.status === 200) {
          Cookies.set("access", response?.data?.token);
          console.log("Login response:", response.data);
console.log("Token:", response?.data?.token);
console.log("User:", response?.data?.user);
console.log("setAuthState:", setAuthState);
console.log("setUserState:", setUserState);
          setAuthState({
            isAuthenticated: true,
            role: response?.data?.user?.userRole,
          });
          setUserState({
            name: response?.data?.user?.name,
            email: response?.data?.user?.email,
            userId: response?.data?.user?.userId,
            role: response?.data?.user?.userRole,
          });
            console.log("Auth and user state updated");
          setSnackBarProps({
            variant: "soft",
            color: "success",
            message: "Sign in successfully!",
          });
          setSnackBarOpen(true);
          setTimeout(() => {
            setSnackBarOpen(false);
            navigate("/home");
          }, 1000);
        }
      } catch (error) {
        let message = "Something went wrong!";
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          message = error.response.data.message || "Invalid Credentials";
        } else if (!error.response) {
          message = "Network error - please try again";
        }

        setSnackBarProps({
          variant: "soft",
          color: "danger",
          message,
        });
        setSnackBarOpen(true);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center container sm:w-1/2 sm:mx-auto lg:w-1/4">
      <div className="bg-gray-100 w-full rounded-lg">
        <div className="pt-4">
          <h1 className="text-4xl font-bold text-center">Sign In</h1>
        </div>
        <form
          className="w-full mt-7 flex flex-col gap-4 px-4"
          onSubmit={handleSubmit}
        >
          <div className="form-group w-full">
            <h4 className="font-bold">
              Email<span className="text-colorPrimary">*</span>
            </h4>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Enter your email"
              className="bg-white w-full px-3 py-2 rounded-lg"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="form-group relative">
            <h4 className="font-bold">
              Password<span className="text-colorPrimary">*</span>
            </h4>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Enter your password"
              className="bg-white w-full px-3 py-2 rounded-lg"
            />
            <span
              className="absolute top-10 right-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
            {errors.password && touched.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>

          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:underline">
              Sign Up
            </Link>
          </p>

          <div className="pb-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={` ${
                isSubmitting
                  ? "cursor-default pointer-events-none"
                  : "cursor-pointer"
              } inline-block px-6 py-3 w-full text-lg font-bold text-white bg-[#B6002C] border-2 border-[#B6002C] transition-all delay-200 ease-in hover:bg-transparent hover:text-[#B6002C]`}
            >
              {isSubmitting ? <Circular /> : "Sign In"}
            </button>
          </div>
        </form>
      </div>
      <Snackbar
        open={snackBarOpen}
        onClose={() => setSnackBarOpen(false)}
        {...snackBarProps}
      />
    </div>
  );
}

export default Login;
