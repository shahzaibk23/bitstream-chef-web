import React, { useState } from "react";



export const LoginMenu = ({ setIsLoginScreenVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSignupClick = (event) => {
    event.preventDefault();
    setShowLogin(false);
  };

  const handleBackToLoginClick = (event) => {
    event.preventDefault();
    setShowLogin(true);
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/api/response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), // make sure to send this data to your API if needed
      });
      const data = await response.json();
      if (data.status === "success") {
        sessionStorage.setItem('email', email);
        window.location.href = "/dashboard";
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("failed");
    }
  };


  return (
    <>
      <section className="login-page">
        <div id="menu-bar" className="text-center col-12">
          <img src="img/title.png" alt="title" className="title img-fluid" />
        </div>
      </section>
      {showLogin ? (
        <section className="login">
          <div className="Auth-form-container">
            <form className="Auth-form" method="post" onSubmit={handleLoginSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Login</h3>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    value={email}
                    required
                    onChange={handleEmailChange}
                    name="email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    value={password}
                    required
                    onChange={handlePasswordChange}
                    name="password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="login-click btn btn-primary">
                    Submit
                  </button>
                </div>
                <p className="new-signup text-right mt-2">
                  Don't Have Account{" "}
                  <a
                    href="#"
                    className="signup-link"
                    onClick={handleSignupClick}
                  >
                    Signup
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section className="Signup mt-4">
          <div className="Auth-form-container2">
            <form className="Auth-form" method="post" action="http://127.0.0.1:5000/api/response">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <p className="new-signup text-center mt-2">
                  Don't Have Account{" "}
                  <a href="#" onClick={handleBackToLoginClick}>
                    Back to Login
                  </a>
                </p>
                <div className="form-group mt-3">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="e.g Jane_Doe123"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Company Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Designation</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="e.g Manager"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Country</label>
                  <select className="form-control mt-1">
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};
