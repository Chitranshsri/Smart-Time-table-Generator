// src/landing_page/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="py-5" style={{ background: "var(--jb-bg)", borderTop: "1px solid var(--jb-border)" }}>
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          {/* Brand / Overview */}
          <div className="col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded"
                style={{
                  width: 28,
                  height: 28,
                  background: "rgba(33, 215, 137, 0.15)",
                  color: "var(--jb-green)",
                  fontSize: "0.85rem"
                }}
              >
                ⚡
              </div>
              <h5 className="fw-bold text-white mb-0" style={{ letterSpacing: "-0.3px" }}>
                Smart Timetable Generator
              </h5>
            </div>
            <p className="small text-secondary" style={{ maxWidth: 420, lineHeight: 1.6 }}>
              Automated academic scheduling system managing 50+ faculty constraints with genetic heuristic allocation, dynamic leave redistribution, and role-based access control.
            </p>
            <div className="small" style={{ color: "var(--jb-text-muted)" }}>
              Published in the <em>IJRES Journal</em> (February 2026).
            </div>
          </div>

          {/* Architecture Links */}
          <div className="col-sm-6 col-lg-3">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.6px" }}>
              Core Architecture
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li><span className="text-secondary">Constraint-Based Slot Allocation</span></li>
              <li><span className="text-secondary">Workload-Balancing Heuristic</span></li>
              <li><span className="text-secondary">JWT Role-Based Authorization</span></li>
              <li><span className="text-secondary">Vectorized jsPDF Export Engine</span></li>
            </ul>
          </div>

          {/* Author / Contact */}
          <div className="col-sm-6 col-lg-3">
            <h6 className="fw-bold text-white text-uppercase mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.6px" }}>
              Engineered By
            </h6>
            <div className="fw-semibold text-white small mb-1">Chitransh Srivastava</div>
            <div className="text-secondary small mb-2">B.Tech CSE (AI & ML) • KCC ITM</div>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Chitranshsri"
                target="_blank"
                rel="noreferrer"
                className="small fw-semibold"
                style={{ color: "var(--jb-green)" }}
              >
                GitHub &rarr;
              </a>
              <a
                href="https://github.com/Chitranshsri/Smart-Time-table-Generator"
                target="_blank"
                rel="noreferrer"
                className="small fw-semibold"
                style={{ color: "var(--jb-cyan)" }}
              >
                Repository &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 mt-4 text-center text-md-start d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ borderTop: "1px solid var(--jb-border)" }}>
          <p className="small mb-0" style={{ color: "var(--jb-text-muted)" }}>
            &copy; {new Date().getFullYear()} Smart Timetable Generator for Institutions. All rights reserved.
          </p>
          <span className="badge mt-2 mt-md-0" style={{ background: "var(--jb-surface-elevated)", color: "var(--jb-text-secondary)", border: "1px solid var(--jb-border)" }}>
            JetBrains UI System v2.0
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
