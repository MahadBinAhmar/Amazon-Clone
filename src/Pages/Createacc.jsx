import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Createacc.css"; // Separate CSS file for additional styling

function Createacc() {
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon logo"
        className="create-account__logo img-fluid mb-4"
      />
      <div className="create-account__container p-4 rounded bg-white">
        <h1 className="h4 mb-4 fw-bold text-start">Create account</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold text-start">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="First and last name"
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold text-start">Mobile number or email</label>
            <input type="email" id="email" required className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold text-start">Password</label>
            <input
              type="password"
              id="password"
              placeholder="At least 6 characters"
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="re-password" className="form-label fw-bold text-start">Re-enter password</label>
            <input type="password" id="re-password" required className="form-control" />
          </div>

          <button type="submit" className="btn btn-warning w-100 mb-3">Continue</button>
        </form>

        <p className="text-start">
          By creating an account, you agree to Amazon's{" "}
          <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </p>
        <div className="divider my-4"></div>
        <p className="text-start mt-1 fw-bold">
          Buying for work? <br />
          <a href="#" className="fw-normal">Create a free business account</a>
        </p>
        <div className="divider my-4"></div>
        <p className="text-start mt-3">
          Already have an account? <a href="/signup">Sign in</a>
        </p>
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
}

export default Createacc;
