"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

const galleryImages = [
  {
    src: "/bofa/gallery/villa-01.jpeg",
    title: "Villa Balcony",
    alt: "The Destination@Bofa villa interior",
  },
  {
    src: "/bofa/gallery/villa-02.png",
    title: "Pool Area",
    alt: "The Destination@Bofa private pool",
  },
  {
    src: "/bofa/gallery/villa-03.png",
    title: "Pergola",
    alt: "The Destination@Bofa coastal lounge",
  },
  {
    src: "/bofa/gallery/villa-04.jpg",
    title: "Pool View",
    alt: "The Destination@Bofa pool view",
  },
  {
    src: "/bofa/gallery/villa-05.jpeg",
    title: "Sunsets",
    alt: "The Destination@Bofa sunset coast view",
  },
  {
    src: "/bofa/gallery/villa-06.jpeg",
    title: "Serenity",
    alt: "The Destination@Bofa garden and coastal villa",
  },
  {
    src: "/bofa/gallery/villa-07.jpg",
    title: "Twin Villas",
    alt: "The Destination@Bofa beachfront villa",
  },
  {
    src: "/bofa/gallery/villa-08.jpg",
    title: "Kitchen/Dining",
    alt: "The Destination@Bofa villa kitchen",
  },
  {
    src: "/bofa/gallery/villa-09.jpg",
    title: "Spacious Kitchen",
    alt: "The Destination@Bofa kitchen interior",
  },
  {
    src: "/bofa/gallery/villa-10.jpg",
    title: "Beach Views",
    alt: "The Destination@Bofa beachfront seating",
  },
  {
    src: "/bofa/gallery/villa-11.jpg",
    title: "Comfy Rooms",
    alt: "The Destination@Bofa bedroom",
  },
  {
    src: "/bofa/gallery/villa-12.jpg",
    title: "Double Rooms",
    alt: "The Destination@Bofa twin bedroom",
  },
];

export default function GalleryPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState("");
  const [activeImage, setActiveImage] = useState<null | {
    src: string;
    title: string;
    alt: string;
  }>(null);

  useEffect(() => {
    const syncHeader = () => setIsScrolled(window.scrollY > 24);
    syncHeader();

    window.addEventListener("scroll", syncHeader, { passive: true });

    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(
      "nav-open",
      menuOpen || Boolean(activeImage)
    );

    return () => document.body.classList.remove("nav-open");
  }, [menuOpen, activeImage]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "there";

    setFormNote(
      `Thank you, ${name}. Your enquiry is ready to send once reservations are connected.`
    );

    event.currentTarget.reset();
  }

  return (
    <>
      <header
        className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <Link className="brand" href="/" aria-label="The Destination@Bofa">
          <img src="/bofa/logo.jpeg" alt="The Destination@Bofa logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#villa">The Villas</Link>
          <Link href="/#story">Story</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#rates">Rates</Link>
          <Link href="/#booking">Bookings</Link>
        </nav>

        <a className="header-call" href="tel:+254736786014">
          +254 736 786 014
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <nav
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <Link href="/#villa" onClick={closeMenu}>
          The Villas
        </Link>
        <Link href="/#story" onClick={closeMenu}>
          Story
        </Link>
        <Link href="/gallery" onClick={closeMenu}>
          Gallery
        </Link>
        <Link href="/#experience" onClick={closeMenu}>
          Experience
        </Link>
        <Link href="/#services" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/#rates" onClick={closeMenu}>
          Rates
        </Link>
        <Link href="/#booking" onClick={closeMenu}>
          Bookings
        </Link>
      </nav>

      <main>
        <section className="gallery-hero">
          <div className="gallery-hero-media" aria-hidden="true"></div>
          <div className="gallery-hero-overlay" aria-hidden="true"></div>

          <div className="gallery-hero-content">
            <p className="hero-eyebrow">Gallery</p>
            <h1>The Destination@Bofa in pictures.</h1>
            <p>
              A visual look at the villas, pools, coastal spaces, beachfront
              views, and quiet Bofa atmosphere.
            </p>
          </div>
        </section>

        <section className="gallery-page-section section-pad">
          <div className="gallery-page-heading">
            <p className="section-kicker">Villa Gallery</p>
            <h2>Beachfront spaces, private pools, and coastal calm.</h2>
          </div>

          <div className="gallery-page-grid">
            {galleryImages.map((image) => (
              <button
                className="gallery-page-card"
                key={image.src}
                type="button"
                onClick={() => setActiveImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <span>{image.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="booking section-pad" id="booking">
          <div className="booking-copy">
            <p className="eyebrow dark">Rates / Bookings</p>
            <h2>Your Bofa escape starts with a simple enquiry.</h2>
            <p>
              Share your dates, villa preference, and group size. The team will
              confirm availability, the seasonal rate, and any arrangements for
              meals, occasions, or retreats.
            </p>

            <div className="contact-block">
              <span>Reservations</span>
              <a href="tel:+254736786014">+254 736 786 014</a>
              <a href="tel:+254733786862">+254 733 786 862</a>
              <a href="mailto:thedestinationbofa@gmail.com">
                thedestinationbofa@gmail.com
              </a>
              <a
                href="https://www.instagram.com/thedestinationkilifi/"
                target="_blank"
                rel="noreferrer"
              >
                IG Handle: @thedestinationkilifi
              </a>
              <a
                href="https://maps.app.goo.gl/uS7Xbq8jpewA6VT26"
                target="_blank"
                rel="noreferrer"
              >
                Location: The Destination@Bofa, Kilifi
              </a>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                required
              />
            </label>

            <div className="form-row">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+254..."
                  required
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Arrival
                <input type="date" name="arrival" required />
              </label>
              <label>
                Departure
                <input type="date" name="departure" required />
              </label>
            </div>

            <label>
              Villa Selection
              <select name="villa" required>
                <option value="">Select villa</option>
                <option>Villa Amani</option>
                <option>Villa Raha</option>
                <option>Either villa</option>
                <option>Both villas</option>
              </select>
            </label>

            <div className="form-row">
              <label>
                Adults
                <input type="number" name="adults" min="1" max="16" required />
              </label>

              <label>
                Children
                <input type="number" name="children" min="0" max="16" required />
              </label>
            </div>

            <label>
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Share any arrival notes, meal requests, event needs, or questions."
              ></textarea>
            </label>

            <button className="button primary full" type="submit">
              Send Enquiry
            </button>

            <p className="form-note" aria-live="polite">
              {formNote}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <Link className="brand footer-brand" href="/">
            <img src="/bofa/logo.jpeg" alt="The Destination@Bofa logo" />
          </Link>
          <p>Twin Kilifi luxury beachfront villas near Bofa Beach.</p>
        </div>

        <nav>
          <Link href="/#villa">The Villas</Link>
          <Link href="/#story">Story</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#booking">Bookings</Link>
        </nav>

        <p className="copyright">© 2026 The Destination@Bofa</p>
      </footer>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            className="lightbox-backdrop"
            type="button"
            aria-label="Close image preview"
            onClick={() => setActiveImage(null)}
          ></button>

          <div className="lightbox-card">
            <button
              className="lightbox-close"
              type="button"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
            <p>{activeImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
}