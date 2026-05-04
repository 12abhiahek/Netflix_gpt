// import { useState } from "react";
// import Header from "./Header";

// const Login = () => {
//   const [showLogin, setShowLogin] = useState(false);
  

//   return (
//     <div className="relative h-screen w-full overflow-hidden">

//       {/* Background Image */}
//       <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
//         alt="bg"
//         className="absolute w-full h-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

//       {/* Header */}
//       <Header onSignInClick={() => setShowLogin(true)} />

//       {/* Center Content (HOME UI) */}
//       {!showLogin && (
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          
//           <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
//             Unlimited movies,<br /> shows, and more
//           </h1>

//           <p className="mt-4 text-lg md:text-2xl">
//             Starts at ₹149. Cancel anytime.
//           </p>

//           <p className="mt-4 text-sm md:text-lg">
//             Ready to watch? Enter your email to create or restart your membership.
//           </p>

//           <div className="mt-6 flex flex-col md:flex-row gap-3 w-full max-w-xl">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-500 text-white"
//             />
//             <button
//               onClick={() => setShowLogin(true)}
//               className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
//             >
//               Get Started →
//             </button>
//           </div>
//         </div>
//       )}

//       {/* LOGIN MODAL */}
//       {showLogin && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
          
//           {/* Overlay click to close */}
//           <div
//             className="absolute inset-0 bg-black/80"
//             onClick={() => setShowLogin(false)}
//           ></div>

//           {/* Login Card */}
//           <div className="relative bg-black p-8 md:p-10 rounded-md w-full max-w-md text-white z-10">
            
//             <h1 className="text-3xl font-bold mb-6">Sign In</h1>

//             <form className="flex flex-col gap-4">
              
//               <input
//                 type="text"
//                 placeholder="Email or phone number"
//                 className="p-3 rounded bg-gray-800 border border-gray-600"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="p-3 rounded bg-gray-800 border border-gray-600"
//               />

//               <button className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
//                 Sign In
//               </button>
//             </form>

//             <div className="flex justify-between text-sm text-gray-400 mt-3">
//               <label>
//                 <input type="checkbox" className="mr-1" />
//                 Remember me
//               </label>
//               <span className="cursor-pointer hover:underline">
//                 Need help?
//               </span>
//             </div>

//             <p className="text-gray-400 mt-6">
//               New to Netflix?{" "}
//               <span className="text-white cursor-pointer hover:underline">
//                 Sign up now
//               </span>
//             </p>

//             {/* Close Button */}
//             <button
//               onClick={() => setShowLogin(false)}
//               className="absolute top-3 right-3 text-xl"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // 🔴 Basic validation
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // 👉 CALL SIGNUP API HERE
      console.log("Signup Data:", formData);

      alert("Signup successful! Now login.");
      setIsSignUp(false);
    } else {
      // 👉 CALL LOGIN API HERE
      console.log("Login Data:", formData);

      alert("Login successful!");
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
        alt="bg"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

      {/* Header */}
      <Header onSignInClick={() => setShowLogin(true)} />

      {/* HOME CONTENT */}
      {!showLogin && (
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          
          <h1 className="text-3xl md:text-6xl font-extrabold">
            Unlimited movies,<br /> shows, and more
          </h1>

          <p className="mt-4 text-lg md:text-2xl">
            Starts at ₹149. Cancel anytime.
          </p>

          <p className="mt-4 text-sm md:text-lg">
            Ready to watch? Enter your email to get started.
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
                setIsSignUp(true); // 👈 directly open signup
              }}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white font-semibold"
            >
              Get Started →
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setShowLogin(false)}
          ></div>

          {/* Card */}
          <div className="relative bg-black p-8 md:p-10 rounded-md w-full max-w-md text-white z-10">
            
            <h1 className="text-3xl font-bold mb-6">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {isSignUp && (
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 border border-gray-600"
                />
              )}

              <input
                type="text"
                name="email"
                placeholder="Email or phone number"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 border border-gray-600"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-3 rounded bg-gray-800 border border-gray-600"
              />

              {isSignUp && (
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="p-3 rounded bg-gray-800 border border-gray-600"
                />
              )}

              <button className="bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            {/* Toggle */}
            <p className="text-gray-400 mt-6 text-sm">
              {isSignUp ? "Already have an account?" : "New to Netflix?"}{" "}
              <span
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-white cursor-pointer hover:underline"
              >
                {isSignUp ? "Sign In now" : "Sign up now"}
              </span>
            </p>

            {/* Close */}
            <button
              onClick={() => setShowLogin(false)}
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