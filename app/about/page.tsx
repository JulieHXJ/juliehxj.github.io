import { FaSoundcloud } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-image-wrap">
          <img
            className="about-hero-image"
            src="/assets/profile.JPG"
            alt="Portrait of Xiaojun Julie Huang"
          />
        </div>

        <div className="about-hero-content">
          <p className="eyebrow">About Me</p>
          <h1 className="hero-title">Xiaojun (Julie) Huang</h1>
          <p className="hero-text">
            I’m a developer with a strong interest in backend
            systems, infrastructure, software foundations, and practical AI tooling.
            I enjoy building software that is structured, useful, and grounded in
            real-world needs.
          </p>
          <p className="hero-text">
            My path into software has been shaped by both technical training and a long-standing
            creative background in music. That combination continues to influence how I think:
            with attention to structure, detail, clarity, and expression. I’m especially drawn
            to work that connects rigorous problem solving with thoughtful design and real use.
          </p>
        </div>
      </section>

      {/* <section>
        <p className="section-title">Focus</p>
        <div className="info-grid">
          <article className="info-card">
            <h3>Systems Thinking</h3>
            <p>
              I enjoy understanding how things work underneath the surface —
              structure, logic, performance, and software foundations.
            </p>
          </article>

          <article className="info-card">
            <h3>Backend-Oriented Development</h3>
            <p>
              I’m especially drawn to software that emphasizes reliability, clean
              architecture, and meaningful data flow.
            </p>
          </article>

          <article className="info-card">
            <h3>Practical AI</h3>
            <p>
              I’m interested in AI systems that support real workflows and solve
              concrete problems in a thoughtful way.
            </p>
          </article>
        </div>
      </section> */}

      <section>
        <p className="section-title">Education</p>

        <article className="entry">
          <h3>42 Heilbronn | Software Engineering Program</h3>
          <p className="muted">
            <span className="highlight">2024 - Present</span> | Heilbronn, Germany
          </p>
          <p>
            Received and maintained a full 15-month scholarship in recognition of
            strong performance and sustained commitment.
            <br />
            Developed solid foundations in C and C++ through project-based learning,
            peer review, teamwork, and independent problem solving.
          </p>
        </article>

        <article className="entry">
          <h3>
            Technische Hochschule Augsburg | B.Sc. International Information Systems
          </h3>
          <p className="muted">
            <span className="highlight">2024 - Present</span> | Augsburg, Germany |
            Grade 1.6/1.0
          </p>
          <p>
            Earned top grades (1.0) in Java Programming and Advanced Mathematics.
            <br />
            Studied SAP S/4HANA and core concepts of enterprise systems architecture.<br />
            complement my technical practice with a broader perspective on information systems, business processes, and enterprise technology.
          </p>
        </article>

        <article className="entry">
          <h3>University of York | M.A. Music Production</h3>
          <p className="muted">
            <span className="highlight">2015 - 2017</span> | York, United Kingdom
          </p>
        </article>

        <article className="entry">
          <h3>Shanghai Normal University | B.A. Music Technology</h3>
          <p className="muted">
            <span className="highlight">2011 - 2015</span> | Shanghai, China
          </p>
        </article>
      </section>

      <section>
        <p className="section-title">Interests</p>
        <ul className="interest-list">
          <li>
            <strong>Clarity</strong> — I’m drawn to work that feels structured, readable,
      and well-shaped.
    </li>
    <li>
      <strong>Elegant problem solving</strong> — I enjoy solutions that are not only correct, but satisfying in how they come together.
            </li>
            <li>
            <strong>Art and design</strong> — I care about beauty, proportion, and the
            relationship between function and form.
            </li>
            <li>
            <strong>Creative practice</strong> — music remains an important part of how I
            think, make, and reflect.
            </li>
            <li>
            <strong>Nature</strong> — long walks, open landscapes, and time outdoors help
            me reset and think clearly.
            </li>
        </ul>
      </section>

      <section>
        <p className="section-title">Music</p>
        <p className="hero-text">
            Music is still an active and important part of my life. Alongside
            software development, I continue to produce, and share music.
            It remains one of the ways I think about structure, emotion, detail, and creativity.
        </p>

        <div className="music-link-wrap">
            <a
            className="music-link"
            href="https://soundcloud.com/huang-xiaojun-70603329"
            target="_blank"
            rel="noreferrer"
            >
            <FaSoundcloud />
            <span>Visit my SoundCloud</span>
            </a>
        </div>
        </section>
    </>
  );
}