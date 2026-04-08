"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function GalleryPage() {
  const galleryItems = [
    {
      src: "/assets/dog-me.JPG",
      alt: "Portrait with dog",
      title: "A Quiet Companion",
      objectPosition: "center",
    },
    {
      src: "/assets/IEMC.JPG",
      alt: "The IEMC 2022 Flyer",
      title: "International Electronic Music Competition 2022",
      objectPosition: "40% 50%",
    },
    {
      src: "/assets/icmc.jpg",
      alt: "The ICMC 2023 concert",
      title: "International Computer Music Conference 2023",
      objectPosition: "bottom",
    },
    // {
    //   src: "/assets/hack.jpg",
    //   alt: "Attending Lovable hackathon",
    //   title: "Coding and Hacking",
    //   objectPosition: "right center",
    // },
     // {
    //   src: "/assets/hack.jpg",
    //   alt: "After a performance",
    //   title: "After a Performance",
    //   objectPosition: "right center",
    // },
    {
      src: "/assets/dive.JPG",
      alt: "Diving into the ocean",
      title: "Out in Nature",
      objectPosition: "55% 0%",
    },
  ];

  const stripRef = useRef<HTMLDivElement | null>(null);

  const scrollGallery = (direction: "left" | "right") => {
    if (!stripRef.current) return;

    const amount = 460;
    stripRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="hero-section">
        <h1 className="hero-title">Highlight Moments</h1>
        <p className="hero-text">
          A small collection of meaningful photographs from music, work, and life —
          moments that have shaped how I think, create, and move through the world.
        </p>
      </section>

      <section className="gallery-strip-section">
        <div className="gallery-carousel">
          <button
            className="gallery-arrow gallery-arrow-left"
            type="button"
            aria-label="Scroll gallery left"
            onClick={() => scrollGallery("left")}
          >
            <FaChevronLeft />
          </button>

          <div
            className="gallery-strip"
            aria-label="Selected moments gallery"
            ref={stripRef}
          >
            {galleryItems.map((item) => (
              <article className="gallery-strip-card" key={item.title}>
                <img
                  className="gallery-strip-image"
                  src={item.src}
                  alt={item.alt}
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="gallery-strip-overlay">
                  <h3 className="gallery-strip-title">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <button
            className="gallery-arrow gallery-arrow-right"
            type="button"
            aria-label="Scroll gallery right"
            onClick={() => scrollGallery("right")}
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}