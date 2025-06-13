import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { axiosInstance } from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Circular from "../../components/Circular/Circular";
import CustomSnackbar from "../../components/Snackbar/Snackbar";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarProps, setSnackBarProps] = useState({
    variant: "soft",
    color: "success",
    message: "",
  });

  const navigate = useNavigate();

  const signUpValidationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
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
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const { confirmPassword, ...payload } = values;

        const response = await axiosInstance.post("/signup", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setSnackBarProps({
            variant: "soft",
            color: "success",
            message: "User Registered Successfully!",
          });
          setSnackBarOpen(true);
          resetForm();

          // ✅ Navigate to login after delay
          setTimeout(() => {
            setSnackBarOpen(false);
            navigate("/");
          }, 2000);
        }
      } catch (error) {
    let message = "Something went wrong!";
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
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

  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    formik;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center container sm:w-1/2 sm:mx-auto lg:w-[37%]">
      <div className="bg-gray-100 w-full rounded-lg">
        <div className="pt-4">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
        </div>
        <form
          className="w-full mt-7 flex flex-col gap-4 px-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Username */}
            <div className="form-group w-full">
              <h4 className="font-bold">
                Username<span className="text-colorPrimary">*</span>
              </h4>
              <input
                type="text"
                name="name"
                placeholder="Enter your username"
                onChange={handleChange}
                value={values.name}
                className="bg-white w-full px-3 py-2 rounded-lg"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-group w-full">
              <h4 className="font-bold">
                Email<span className="text-colorPrimary">*</span>
              </h4>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={values.email}
                className="bg-white w-full px-3 py-2 rounded-lg"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="form-group relative">
            <h4 className="font-bold">
              Password<span className="text-colorPrimary">*</span>
            </h4>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
              className="bg-white w-full px-3 py-2 rounded-lg"
            />
            <span
              className="absolute top-10 right-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group relative">
            <h4 className="font-bold">
              Confirm Password<span className="text-colorPrimary">*</span>
            </h4>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={values.confirmPassword}
              className="bg-white w-full px-3 py-2 rounded-lg"
            />
            <span
              className="absolute top-10 right-3 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </span>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/" className="hover:underline">
              Log in
            </Link>
          </p>

          <div className="pb-8">
            <button
              type="submit"
              className="inline-block px-6 py-3 w-full text-lg font-bold text-white bg-[#B6002C] border-2 border-[#B6002C] transition-all delay-200 ease-in hover:bg-transparent hover:text-[#B6002C]"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Circular size="sm" /> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>

      {/* Snackbar */}
      <CustomSnackbar
        open={snackBarOpen}
        onClose={() => setSnackBarOpen(false)}
        {...snackBarProps}
      />
    </div>
  );
};

export default SignUp;
