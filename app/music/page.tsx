import { FaSoundcloud } from "react-icons/fa6";

export default function MusicPage() {
  return (
    <>
        <section className="music-hero">
            <div className="music-hero-content">
                {/* <p className="eyebrow">Music</p> */}
                <h1 className="hero-title">Music, Practice, and Background</h1>
                <p className="hero-text">
                Music has been one of the deepest threads running through my life — as study,
                work, artistic practice, and a way of thinking. Long before I moved into software,
                it shaped how I listened, created, collaborated, and paid attention to detail.
                </p>
               
                <div className="music-hero-link-wrap">
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

            </div>

            <div className="music-hero-image-wrap">
                <img
                className="music-hero-image"
                src="/assets/piano.jpg"
                alt="Piano and music workspace"
                />
            </div>
        </section>

      <section>
        <p className="section-title">Academic Background</p>

        <article className="entry">
          <h3>University of York | M.A. Music Production</h3>
          <p className="muted">
            <span className="highlight">2015 - 2017</span> | York, United Kingdom
          </p>
          <p>
            Graduate study in music production with a focus on mastering, synthesis principles,
            signal processing, and critical listening, combined with extensive recording studio practice.
          </p>
        </article>

        <article className="entry">
          <h3>Shanghai Normal University | B.A. Music Technology</h3>
          <p className="muted">
            <span className="highlight">2011 - 2015</span> | Shanghai, China
          </p>
          <p>
            Undergraduate study in music technology, combining training in classical and popular
            music composition, arrangement, music theory, music history, and mixing practice.
          </p>
        </article>
      </section>

      <section>
        <p className="section-title">Professional Experience</p>

        <article className="entry">
          <h3>
            Shanghai Conservatory of Music | Project Coordinator, International Office
          </h3>
          <p className="muted">
            <span className="highlight">2020 - 2022</span> | Shanghai, China
          </p>
          <p>
            Coordinated international music programs and exchange initiatives in
            collaboration with overseas partner institutions. Supported the delivery
            of summer programs, communication across teams, and on-site execution in
            cross-cultural academic settings.
          </p>
        </article>

        <article className="entry">
          <h3>
            Shanghai Computer Music Association | International Competition Support
          </h3>
          <p className="muted">
            <span className="highlight">2019 - 2022</span> | Shanghai, China
          </p>
          <p>
            Contributed to the planning, coordination, and delivery of an international computer
            music competition. Supported multiple stages of the project, including event design,
            implementation, and award ceremony organization, and also assisted the evaluation
            process by helping judges review works more efficiently from a professional perspective.
          </p>
        </article>

        <article className="entry">
          <h3>
            Shanghai Conservatory of Music | Academic Program Assistant, Music Engineering Department
          </h3>
          <p className="muted">
            <span className="highlight">2017 - 2019</span> | Shanghai, China
          </p>
          <p>
            Supported collaborative teaching programs with Berklee College of Music,
            assisting international professors in lectures, workshops, and rehearsals.
            Also contributed to international conferences and music events, including
            ICMC and Electronic Music Week.
          </p>
        </article>

        <article className="entry">
          <h3>Shanghai Normal University | Guest Lecturer Support (Volunteer)</h3>
          <p className="muted">
            <span className="highlight">2017 - 2023</span> | Shanghai, China
          </p>
          <p>
            Provided long-term interpretation support for guest lectures delivered
            by visiting professors from UK institutions, including Bangor University and the
            University of Leeds. Facilitated bilingual communication in cross-cultural academic
            settings, supporting interaction between guest lecturers, faculty, and students.
          </p>
        </article>
      </section>


      <section>
        <p className="section-title">Areas of Practice</p>
        <div className="info-grid">
          <article className="info-card">
            <h3>Production</h3>
                <p>
                    My academic training and early professional experience were closely connected to the music production field.
                    Through creative work, studio practice, recording, and mixing, I developed both hands-on production skills
                    and an understanding of the broader workflow of the music industry.
                </p>
          </article>

          <article className="info-card">
            <h3>Performance</h3>
                <p>
                    Performance has always been one of the most enjoyable parts of my relationship with music.
                    It remains an important space for expression, interpretation, presence, and connection.
                </p>
          </article>

          <article className="info-card">
            <h3>Education</h3>
            <p>
                Education has been another long-term part of my musical background. In addition to supporting academic
                programs and international teaching activities, I also have several years of independent experience in music education.
            </p>
          </article>
        </div>
      </section>

    </>
  );
}