// src/landing_page/home/Hero.jsx
// JetBrains PyCharm Inspired Developer Architecture & Preview
import React from "react";

const Hero = () => {
  return (
    <div>
      {/* ====================================================================
          Hero Section (JetBrains / PyCharm Style)
          ==================================================================== */}
      <section className="py-5" style={{ background: "var(--jb-bg)", borderBottom: "1px solid var(--jb-border)" }}>
        <div className="container py-lg-4">
          <div className="row align-items-center g-5">
            
            {/* Left Column: Headlines & CTA */}
            <div className="col-lg-6">
              <div className="jb-pill-badge">
                <span>⚡</span>
                <span>CONSTRAINT-BASED SCHEDULING • IJRES JOURNAL 2026</span>
              </div>

              <h1 className="display-5 fw-bold text-white mb-3" style={{ letterSpacing: "-1px", lineHeight: 1.15 }}>
                Intelligent Academic Scheduling with{" "}
                <span style={{ color: "var(--jb-green)" }}>Mathematical Precision</span>
              </h1>

              <p className="lead mb-4" style={{ color: "var(--jb-text-secondary)", fontSize: "1.08rem", lineHeight: 1.6 }}>
                Automate conflict-free timetable allocation across 50+ faculty constraints. Reduce manual scheduling overhead by <strong>~80%</strong> with dynamic substitution balancing, leave handling, and multi-role JWT security.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="/signup" className="btn btn-primary btn-lg">
                  Get Started Free &rarr;
                </a>
                <a href="/login" className="btn btn-outline-primary btn-lg">
                  Faculty / Admin Login
                </a>
              </div>

              {/* JetBrains Tech Badges */}
              <div className="d-flex flex-wrap gap-2 pt-2" style={{ borderTop: "1px solid var(--jb-border)" }}>
                <span className="badge text-bg-dark border" style={{ borderColor: "var(--jb-border)" }}>React 19</span>
                <span className="badge text-bg-dark border" style={{ borderColor: "var(--jb-border)" }}>Node.js / Express</span>
                <span className="badge text-bg-dark border" style={{ borderColor: "var(--jb-border)" }}>MongoDB Atlas</span>
                <span className="badge text-bg-dark border" style={{ borderColor: "var(--jb-border)" }}>JWT Auth</span>
                <span className="badge text-bg-dark border" style={{ borderColor: "var(--jb-border)" }}>NP-Hard Heuristic</span>
              </div>
            </div>

            {/* Right Column: JetBrains IDE Timetable Simulation Card */}
            <div className="col-lg-6">
              <div className="card shadow-lg" style={{ background: "var(--jb-surface)", borderColor: "var(--jb-border)", overflow: "hidden" }}>
                
                {/* IDE Window Header */}
                <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ background: "var(--jb-surface-elevated)", borderBottom: "1px solid var(--jb-border)" }}>
                  <div className="d-flex gap-2">
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }}></span>
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }}></span>
                    <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f", display: "inline-block" }}></span>
                  </div>
                  <span className="small fw-semibold text-secondary" style={{ fontFamily: "var(--jb-font-mono)", fontSize: "0.78rem" }}>
                    solver_matrix.py — PyCharm IDE
                  </span>
                  <span className="badge" style={{ background: "rgba(33, 215, 137, 0.15)", color: "var(--jb-green)", fontSize: "0.7rem" }}>
                    ● Optimal (0 Collisions)
                  </span>
                </div>

                {/* Mock Timetable Grid */}
                <div className="p-3 p-md-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <div className="fw-bold text-white small">Batch: CSE 4th Year (Sec A)</div>
                      <div className="text-secondary" style={{ fontSize: "0.75rem" }}>Algorithm: Genetic Backtracking Solver</div>
                    </div>
                    <span className="badge" style={{ background: "rgba(252, 128, 29, 0.15)", color: "var(--jb-orange)" }}>
                      7 Periods / Day
                    </span>
                  </div>

                  {/* Schedule Slots Preview */}
                  <div className="table-responsive rounded border" style={{ borderColor: "var(--jb-border)" }}>
                    <table className="table table-sm text-center mb-0" style={{ fontSize: "0.78rem" }}>
                      <thead>
                        <tr>
                          <th>Day</th>
                          <th>09:00 - 10:00</th>
                          <th>10:00 - 11:00</th>
                          <th>11:15 - 12:15</th>
                          <th>12:15 - 01:15</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-bold text-white">Mon</td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(53, 179, 238, 0.15)", color: "var(--jb-cyan)" }}>
                              <strong>CS401: DSA</strong>
                              <div style={{ fontSize: "0.7rem" }}>Dr. Rao (R101)</div>
                            </div>
                          </td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(165, 109, 246, 0.15)", color: "var(--jb-purple)" }}>
                              <strong>AI302: ML</strong>
                              <div style={{ fontSize: "0.7rem" }}>Chitransh (Lab 2)</div>
                            </div>
                          </td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(33, 215, 137, 0.15)", color: "var(--jb-green)" }}>
                              <strong>CS404: OS</strong>
                              <div style={{ fontSize: "0.7rem" }}>Prof. Sharma (R204)</div>
                            </div>
                          </td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(248, 197, 85, 0.15)", color: "var(--jb-yellow)" }}>
                              <strong>MATH201</strong>
                              <div style={{ fontSize: "0.7rem" }}>Dr. Verma (R101)</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-bold text-white">Tue</td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(165, 109, 246, 0.15)", color: "var(--jb-purple)" }}>
                              <strong>AI302: ML</strong>
                              <div style={{ fontSize: "0.7rem" }}>Chitransh (Lab 2)</div>
                            </div>
                          </td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(33, 215, 137, 0.15)", color: "var(--jb-green)" }}>
                              <strong>CS404: OS</strong>
                              <div style={{ fontSize: "0.7rem" }}>Prof. Sharma (R204)</div>
                            </div>
                          </td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(53, 179, 238, 0.15)", color: "var(--jb-cyan)" }}>
                              <strong>CS401: DSA</strong>
                              <div style={{ fontSize: "0.7rem" }}>Dr. Rao (R101)</div>
                            </div>
                          </td>
                          <td>
                            <div className="p-1 rounded" style={{ background: "rgba(252, 128, 29, 0.15)", color: "var(--jb-orange)" }}>
                              <strong>SE403: Agile</strong>
                              <div style={{ fontSize: "0.7rem" }}>Prof. Gupta (R301)</div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Benchmark Metrics Footer */}
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-2" style={{ borderTop: "1px solid var(--jb-border)", fontSize: "0.75rem", color: "var(--jb-text-secondary)" }}>
                    <span>Allocation Latency: <strong className="text-white">18.4ms</strong></span>
                    <span>Constraint Compliance: <strong className="text-success">100%</strong></span>
                    <span>Substitutions: <strong className="text-warning">Auto-Resolved</strong></span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          Feature Highlights (JetBrains PyCharm Cards)
          ==================================================================== */}
      <section className="py-5" id="learn" style={{ background: "var(--jb-surface)" }}>
        <div className="container py-3">
          
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Engineered for Scalable Academic Operations</h2>
            <p className="text-secondary">Explore the core modules powering automated schedule generation and workload balancing.</p>
          </div>

          <div className="row g-4">
            
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-3" style={{ background: "var(--jb-surface-elevated)" }}>
                <div className="fs-3 mb-2" style={{ color: "var(--jb-green)" }}>🧩</div>
                <h5 className="fw-bold text-white mb-2">Constraint Solver</h5>
                <p className="small text-secondary mb-0">
                  Genetic heuristic allocator eliminates teacher clashes, lab overlapping, and room double-bookings across 50+ faculty.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-3" style={{ background: "var(--jb-surface-elevated)" }}>
                <div className="fs-3 mb-2" style={{ color: "var(--jb-cyan)" }}>🔄</div>
                <h5 className="fw-bold text-white mb-2">Auto Substitution</h5>
                <p className="small text-secondary mb-0">
                  Instant leave request approval flow redistributes orphaned periods to available faculty with verified workload availability.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-3" style={{ background: "var(--jb-surface-elevated)" }}>
                <div className="fs-3 mb-2" style={{ color: "var(--jb-orange)" }}>🛡️</div>
                <h5 className="fw-bold text-white mb-2">Role-Based JWT</h5>
                <p className="small text-secondary mb-0">
                  Decoupled authorization tiers separating administrator configuration powers from personalized teacher dashboards.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 p-3" style={{ background: "var(--jb-surface-elevated)" }}>
                <div className="fs-3 mb-2" style={{ color: "var(--jb-yellow)" }}>📄</div>
                <h5 className="fw-bold text-white mb-2">Vector PDF Export</h5>
                <p className="small text-secondary mb-0">
                  One-click high-resolution table generation with jsPDF and autotable for official institution notice boards.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
