import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaSoundcloud,
} from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <p className="eyebrow">Personal Website</p>
        <h1 className="hero-title">Hi, I'm Julie</h1>
        <p className="hero-text">
          A developer interested in backend systems, infrastructure, software foundations, and practical AI tooling.
        </p>

        <div className="page-actions">
          {/* <Link className="button-link" href="/projects">
            View Projects
          </Link> */}
          <Link className="button-link" href="/about">
            About Me
          </Link>
        </div>
      </section>

      <section>
        <p className="section-title">Featured Projects</p>

        <div className="project-grid">
          <article className="project-card">
            <h3>PawsonalCare</h3>
            <p>
              A structured pet health tracking concept inspired by real-life care
              needs, turning scattered notes into events, patterns, and future
              AI-assisted insights.
            </p>
            <p className="stack">
              Python · SQLite · CLI · JSON · Rule-Based Risk Modeling
            </p>
          </article>

          <article className="project-card">
            <h3>MarketMirror</h3>
            <p>
              An AI-assisted tool that captures webpage evidence, structures it,
              and generates feedback for early-stage product teams.
            </p>
            <p className="stack">
              Python · Web Automation · Structured Extraction · AI Workflow
            </p>
          </article>

          <article className="project-card">
            <h3>miniRT</h3>
            <p>
              A small ray tracer in C focused on rendering, geometry, lighting,
              and scene construction.
            </p>
            <p className="stack">
              C · Ray Tracing · Linear Algebra · MiniLibX
            </p>
          </article>
        </div>
      </section>

      <section>
        <p className="section-title">Current Focus</p>

        <div className="info-grid">
          <article className="info-card">
            <h3>Backend & Systems</h3>
            <p>
              Strengthening software foundations through low-level programming,
              clean structure, debugging, and backend-oriented thinking.
            </p>
          </article>

          <article className="info-card">
            <h3>Practical AI</h3>
            <p>
              Exploring AI workflows that are useful, grounded, and connected to
              real user problems rather than pure novelty.
            </p>
          </article>

          <article className="info-card">
            <h3>Information Systems</h3>
            <p>
              Building a broader understanding of enterprise systems, business processes,
              and how technical tools operate in real organizational contexts.
            </p>
          </article>
        </div>
      </section>

       <section>
        <p className="section-title">Explore</p>

        <div className="info-grid">
          <article className="info-card">
            <h3>Projects</h3>
            <p>
              Selected technical projects in software engineering, problem solving,
              and practical tool building.
            </p>
            <Link className="text-link" href="/projects">
              View projects →
            </Link>
          </article>

          <article className="info-card">
            <h3>Music</h3>
            <p>
              A separate space for my music background, professional experience,
              creative practice, and selected listening.
            </p>
            <Link className="text-link" href="/music">
              Visit music page →
            </Link>
          </article>

          <article className="info-card">
            <h3>Gallery</h3>
            <p>
              Selected photographs from music, work, and life, with small stories
              behind the moments that matter.
            </p>
            <Link className="text-link" href="/gallery">
              View gallery →
            </Link>
          </article>
        </div>
      </section>

      <section id="contact">
        <p className="section-title">Contact</p>
        <p className="hero-text">
          Open to internships, collaborations, and thoughtful conversations
          around technology, music, and creative work.
        </p>

        <div className="contact-icons" aria-label="Contact links">
          <a href="mailto:juliehxj@outlook.com" aria-label="Email">
            <HiOutlineEnvelope />
          </a>

          <a
            href="https://github.com/JulieHXJ"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://de.linkedin.com/in/xhuang-91656623a"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://soundcloud.com/huang-xiaojun-70603329"
            target="_blank"
            rel="noreferrer"
            aria-label="SoundCloud"
          >
            <FaSoundcloud />
          </a>
        </div>
      </section>
    </>
  );
}