import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        {/* Brand Logo & Title */}
        <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
          <div
            className="d-flex align-items-center justify-content-center rounded me-2"
            style={{
              width: 32,
              height: 32,
              background: "rgba(33, 215, 137, 0.15)",
              border: "1px solid rgba(33, 215, 137, 0.4)",
              color: "var(--jb-green)",
              fontSize: "1rem"
            }}
          >
            ⚡
          </div>
          <span style={{ letterSpacing: "-0.4px" }}>
            Smart<span style={{ color: "var(--jb-green)" }}>Timetable</span>
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "var(--jb-border)" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#learn">
                Architecture
              </a>
            </li>

            {!isLoggedIn ? (
              <>
                <li className="nav-item ms-lg-2">
                  <a className="nav-link" href="/login">
                    Sign In
                  </a>
                </li>
                <li className="nav-item ms-lg-1">
                  <a className="btn btn-primary btn-sm px-3" href="/signup">
                    Get Started Free
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item ms-lg-2">
                <button
                  className="btn btn-outline-primary btn-sm px-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
