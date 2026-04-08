export default function ProjectsPage() {
  return (
    <>
      <section className="hero-section">
        {/* <p className="eyebrow">Projects</p> */}
        <h1 className="hero-title">Selected Projects</h1>
        <p className="hero-text">
          My projects range from systems programming and rendering to practical AI
          tooling and structured problem solving. I enjoy building things that are
          both technically solid and genuinely useful.
        </p>
      </section>

      <section>
        <div className="project-section applied-projects">
          <h3 className="group-title">Applied Ideas</h3>
          <p className="group-note">
            Projects shaped by real-life use cases, experimentation, and
            AI-oriented thinking.
          </p>

          <div className="project-grid">
            <article className="project-card">
              <h3>PawsonalCare — Event-Driven Pet Health Tracking</h3>
              <p>
                Inspired by my shiba inu, this project turns scattered health notes
                into structured events, patterns, and future AI-assisted care insights.
              </p>
              <p className="stack">
                Python · SQLite · CLI · JSON · Rule-Based Risk Modeling
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/JulieHXJ/PawsonalCare"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </article>

            <article className="project-card">
              <h3>MarketMirror — AI Hackathon Project</h3>
              <p>
                An AI-assisted tool that captures webpage evidence, structures it,
                and generates feedback for early-stage product teams.
              </p>
              <p className="stack">
                Python · Web Automation · Screenshot Capture · Structured Extraction · AI Workflow
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/JulieHXJ/MarketMirror"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </article>
          </div>
        </div>

        <div className="project-section systems-projects">
          <h3 className="group-title">Systems & Foundations</h3>
          <p className="group-note">
            Projects focused on low-level logic, rendering, networking, and software fundamentals.
          </p>

          <div className="project-grid">
            <article className="project-card">
              <h3>miniRT</h3>
              <p>
                A small ray tracer in C that renders geometric objects with lighting,
                intersections, and camera-based scene construction.
              </p>
              <p className="stack">
                C · Ray Tracing · Linear Algebra · MiniLibX · Rendering
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/JulieHXJ/miniRT42"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </article>

            <article className="project-card">
              <h3>IRC-Compliant Server</h3>
              <p>
                A multi-client IRC server in C++ with authentication, channels, and
                real-time communication using non-blocking I/O.
              </p>
              <p className="stack">
                C++ · Sockets · poll/epoll · TCP/IP · Concurrency
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/JulieHXJ/ft_irc42"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </article>

            <article className="project-card">
              <h3>UNIX Shell</h3>
              <p>
                A minimal shell in C with pipes, redirections, environment handling,
                and a strong focus on process control and memory safety.
              </p>
              <p className="stack">
                C · fork · execve · dup2 · pipe · Signals · GDB · Valgrind
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/JulieHXJ/minishell42"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}