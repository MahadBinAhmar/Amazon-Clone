import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signin.css';

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className="logo mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="img-fluid"
        />
      </div>
      <div className="signin-box p-4 shadow-sm rounded">
        <h2 className="mb-4">Sign in</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email or mobile phone number</label>
            <input type="text" id="email" name="email" className="form-control" />
          </div>
          <button type="submit" className="btn btn-warning w-100">Continue</button>
          <p className="terms mt-3">
            By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
          </p>
        </form>
        <a href="#" className="help-link d-block mt-3">Need help?</a>
        <p className="text-start mt-1 fw-bold">
          Buying for work? <br />
          <a href="#" className="fw-normal">Shop on Amazon Business</a>
        </p>
      </div>
      <div className="new-account text-center mt-4 w-100">
      <div className="divider my-4"></div>

        <p className="mb-3">New to Amazon?</p>
        <button onClick={() => navigate("/create-account")} className="btn btn-create-account w-100">
          Create your Amazon account
        </button>
      </div>
      <footer className="mt-4 text-center">
      <div className="divider my-4"></div>

        <a href="#" className="d-inline-block mx-2">Conditions of Use</a>
        <a href="#" className="d-inline-block mx-2">Privacy Notice</a>
        <a href="#" className="d-inline-block mx-2">Help</a>
        <p className="footer-note mt-3">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default Signin;
