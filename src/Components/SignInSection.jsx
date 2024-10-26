import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignInSection.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignInSection = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="signin-section-container container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 signin-content text-center">
          <h1>See personalized recommendations</h1>
          <button
            onClick={() => navigate("/signup")}
            className="signin-btn btn btn-warning"
          >
            Sign in
          </button>
          <p className="mt-3">
            New customer?{" "}
            <span onClick={() => navigate("/create-account")} className="start-link">
              Start here
            </span>
          </p>
        </div>
      </div>


      <div className="back-to-top text-center" onClick={scrollToTop}>
        Back to top
      </div>
    </div>
  );
};

export default SignInSection;
