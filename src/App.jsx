import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AuthPage from "./Pages/Signup";
import "react-phone-input-2/lib/style.css";


import { Route, Routes, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Profile from "./Components/Profile";
import ResetFlow from "./Components/ForgotPassword";
import SuperAdmin from "./Pages/SuperAdmin";

const App = () => {
  const userId = localStorage.getItem("webMonitoringuserId");

  return (
    <div>
      {/* If user logged in → show Navbar + Hero */}
      {userId && <Navbar />}

      <Routes>

         {/* Forgot Password Route (accessible for non-logged users) */}
        {!userId && <Route path="/forgot" element={<ResetFlow />} />}
        {/* If no user → redirect all routes to /signup */}
        {!userId ? (
          <>
            <Route path="*" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
          </>
        ) : (
          <>
            {/* Logged in user routes */}
            <Route path="/" element={<SuperAdmin />} />

            {/* Signup tab ko hide karna after login */}
            <Route path="/signup" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {/* If logged in → show footer */}
      {userId && <Footer />}

      <ToastContainer />
    </div>
  );
};

export default App;
