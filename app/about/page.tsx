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
          {/* <p className="eyebrow">About Me</p> */}
          <h1 className="hero-title">Xiaojun (Julie) Huang</h1>
          <p className="hero-text">
            I’m an Information Systems student and software developer with a strong interest
            in backend development, software foundations, infrastructure, and practical AI tools.
            I enjoy building tools that are reliable, well-structured, and useful in real contexts.
          </p>

          <p className="hero-text">
            Before moving into tech, I worked in international academic and cultural programs,
            coordinating exchange projects, summer schools, and cross-border collaborations in China.
            Through that work, I gained hands-on experience in communication, coordination, and turning ideas into execution.
          </p>

          <p className="hero-text">
            Today, I bring that same mindset into software. I’m interested in technology that combines
            rigorous problem solving with clarity, thoughtful design, and an understanding of how people actually work.
            My background in music continues to shape the way I think about structure, detail, and expression.
          </p>
        </div>
      </section>

      <section>
        <p className="section-title">Work Experience</p>

        <article className="entry">
          <h3>Shanghai Conservatory of Music | Project Coordinator, International Office</h3>
          <p className="muted">
            <span className="highlight">2020 - 2022</span> | Shanghai, China
          </p>
          <p>
            Coordinated international exchange programs and short-term academic projects for overseas students
            in collaboration with partner institutions. Managed communication, scheduling, and on-site support,
            and worked across academic and administrative teams to ensure smooth program delivery.
          </p>
        </article>

        <article className="entry">
          <h3>Shanghai Conservatory of Music | Academic Program Assistant, Music Engineering Department</h3>
          <p className="muted">
            <span className="highlight">2017 - 2019</span> | Shanghai, China
          </p>
          <p>
            Supported joint teaching programs with Berklee College of Music and assisted international professors
            in lectures, workshops, and rehearsals. Contributed to the delivery of international academic events,
            including ICMC and Electronic Music Week, in cross-cultural and bilingual environments.
          </p>
        </article>
      </section>

      <section>
        <p className="section-title">Education</p>

        <article className="entry">
          <h3>42 Heilbronn | Software Engineering Program</h3>
          <p className="muted">
            <span className="highlight">2024 - Present</span> | Heilbronn, Germany
          </p>
          <p>
            Awarded and maintained a 15-month full scholarship based on performance and sustained commitment. <br />
            Built strong foundations in C and C++ through intensive project-based learning, while developing
            problem-solving, teamwork, peer review, and independent learning skills.
          </p>
        </article>

        <article className="entry">
          <h3>
            Technische Hochschule Augsburg | B.Sc. International Information Systems
          </h3>
          <p className="muted">
            <span className="highlight">2024 - Present</span> | Augsburg, Germany |
            Current grade 1.6
          </p>
          <p>
            Achieved top grades (1.0) in Java Programming and Advanced Mathematics. <br />
            Relevant coursework includes Business Process Management, Agile Development, and Enterprise System (SAP S/4HANA) Architecture Fundamentals.
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

      {/* <section>
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
        </section> */}
    </>
  );
}