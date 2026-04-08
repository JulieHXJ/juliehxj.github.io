export default function GalleryPage() {
  const galleryItems = [
    {
      src: "/assets/dog-me.jpg",
      alt: "Portrait with dog",
      title: "A Quiet Companion",
    },
    {
      src: "/assets/program.jpg",
      alt: "Academic or program moment",
      title: "In Between Programs",
    },
    {
      src: "/assets/music.jpg",
      alt: "Music-related moment",
      title: "Music and Movement",
    },
    {
      src: "/assets/performance.jpg",
      alt: "After a performance",
      title: "A Moment After the Performance",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title">Selected Moments</h1>
        <p className="hero-text">
          A small collection of meaningful photographs from music, work, and life —
          moments that have shaped how I think, create, and move through the world.
        </p>
      </section>

      <section className="gallery-strip-section">
        <div className="gallery-strip" aria-label="Selected moments gallery">
          {galleryItems.map((item) => (
            <article className="gallery-strip-card" key={item.title}>
              <img
                className="gallery-strip-image"
                src={item.src}
                alt={item.alt}
              />
              <div className="gallery-strip-overlay">
                <h3 className="gallery-strip-title">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}