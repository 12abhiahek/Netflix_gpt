import { useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/Validate";
import toast from "react-hot-toast";

import {
  auth,
  provider,
} from "../utils/firebase";

import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Navigate ,useNavigate} from "react-router-dom";

const Login = () => {

  const [showLogin, setShowLogin] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);

  const [loading, setLoading] = useState(false);

  const [firebaseError, setFirebaseError] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // REMOVE FIELD ERROR

    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setFirebaseError("");
  };

  // GOOGLE LOGIN

  const handleGoogleLogin = async () => {

    try {

      setLoading(true);

      const result = await signInWithPopup(
        auth,
        provider
      );

      console.log("Google User:", result.user);

      toast.success("Google Login Successful");

      setShowLogin(false);

    } catch (error) {

      console.log(error);

      setFirebaseError(error.message);

    } finally {

      setLoading(false);
    }
  };

  // FORM SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    setFirebaseError("");

    const validationErrors =
      validateForm(formData, isSignUp);

    if (
      Object.keys(validationErrors).length > 0
    ) {

      setErrors(validationErrors);

      return;
    }

    try {

      setLoading(true);

      // SIGNUP

      if (isSignUp) {

        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

        // UPDATE DISPLAY NAME

        await updateProfile(
          userCredential.user,
          {
            displayName: formData.name,
          }
        );

        console.log(
          "Signup Success",
          userCredential.user
        );

        toast.success("Signup Successful");

        setIsSignUp(false);

        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

      } else {

        // LOGIN

        const userCredential =
          await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
          );

        console.log(
          "Login Success",
          userCredential.user
        );
        navigate('/browse');

        toast.success("Login Successful");

        setShowLogin(false);
      }

    } catch (error) {

      console.log(error);

      // FIREBASE ERRORS

      switch (error.code) {

        case "auth/email-already-in-use":
          setFirebaseError(
            "Email already exists"
          );
          break;

        case "auth/invalid-email":
          setFirebaseError(
            "Invalid email address"
          );
          break;

        case "auth/weak-password":
          setFirebaseError(
            "Password should be at least 6 characters"
          );
          break;

        case "auth/user-not-found":
          setFirebaseError(
            "User not found"
          );
          break;

        case "auth/wrong-password":
          setFirebaseError(
            "Incorrect password"
          );
          break;

        case "auth/invalid-credential":
          setFirebaseError(
            "Invalid email or password"
          );
          break;

        default:
          setFirebaseError(error.message);
      }

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND */}

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
        alt="bg"
        className="absolute w-full h-full object-cover"
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

      {/* HEADER */}

      <Header
        onSignInClick={() =>
          setShowLogin(true)
        }
      />

      {/* HOME CONTENT */}

      {!showLogin && (

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

          <h1 className="text-3xl md:text-6xl font-extrabold">
            Unlimited movies,
            <br />
            shows, and more
          </h1>

          <p className="mt-4 text-lg md:text-2xl">
            Starts at ₹149.
            Cancel anytime.
          </p>

          <p className="mt-4 text-sm md:text-lg">
            Ready to watch?
            Enter your email to get started.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-3 w-full max-w-xl">

            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-500 text-white"
            />

            <button
              onClick={() => {
                setShowLogin(true);
                setIsSignUp(true);
              }}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
            >
              Get Started →
            </button>

          </div>

        </div>
      )}

      {/* LOGIN MODAL */}

      {showLogin && (

        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* OVERLAY */}

          <div
            className="absolute inset-0 bg-black/80"
            onClick={() =>
              setShowLogin(false)
            }
          ></div>

          {/* CARD */}

          <div className="relative bg-black p-8 md:p-10 rounded-md w-full max-w-md text-white z-10">

            <h1 className="text-3xl font-bold mb-6">

              {isSignUp
                ? "Sign Up"
                : "Sign In"}

            </h1>

            {/* FIREBASE ERROR */}

            {firebaseError && (

              <p className="bg-red-500/20 text-red-400 p-3 rounded mb-4 text-sm">

                {firebaseError}

              </p>
            )}

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >

              {/* NAME */}

              {isSignUp && (

                <div>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                  />

                  {errors.name && (

                    <p className="text-red-500 text-sm mt-1">

                      {errors.name}

                    </p>
                  )}

                </div>
              )}

              {/* EMAIL */}

              <div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />

                {errors.email && (

                  <p className="text-red-500 text-sm mt-1">

                    {errors.email}

                  </p>
                )}

              </div>

              {/* PASSWORD */}

              <div>

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                />

                {errors.password && (

                  <p className="text-red-500 text-sm mt-1">

                    {errors.password}

                  </p>
                )}

              </div>

              {/* CONFIRM PASSWORD */}

              {isSignUp && (

                <div>

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-gray-800 border border-gray-600"
                  />

                  {errors.confirmPassword && (

                    <p className="text-red-500 text-sm mt-1">

                      {errors.confirmPassword}

                    </p>
                  )}

                </div>
              )}

              {/* SUBMIT BUTTON */}

              <button
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold cursor-pointer"
              >

                {loading
                  ? "Please Wait..."
                  : isSignUp
                  ? "Sign Up"
                  : "Sign In"}

              </button>

            </form>

            {/* GOOGLE LOGIN */}

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full mt-4 bg-white text-black py-3 rounded font-semibold hover:bg-gray-200"
            >
              Continue with Google
            </button>

            {/* TOGGLE */}

            <p className="text-gray-400 mt-6 text-sm">

              {isSignUp
                ? "Already have an account?"
                : "New to Netflix?"}

              <span
                onClick={() =>
                  setIsSignUp(!isSignUp)
                }
                className="text-white cursor-pointer hover:underline ml-1"
              >

                {isSignUp
                  ? "Sign In now"
                  : "Sign up now"}

              </span>

            </p>

            {/* CLOSE */}

            <button
              onClick={() =>
                setShowLogin(false)
              }
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Login;