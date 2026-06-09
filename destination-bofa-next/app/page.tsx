"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import CountUpStats from "@/components/CountUpStats";

const previewImages = [
  {
    src: "/bofa/gallery/villa-01.jpeg",
    title: "Beachfront Villa",
    alt: "Beachfront villa at The Destination Bofa",
  },
  {
    src: "/bofa/gallery/villa-02.png",
    title: "Poolside Calm",
    alt: "Private pool at The Destination Bofa",
  },
  {
    src: "/bofa/gallery/villa-03.png",
    title: "Coastal Living",
    alt: "Luxury villa living area at The Destination Bofa",
  },
];

const experienceVideos = [
  {
    src: "/bofa/property.mp4",
    label: "Property Tour",
    title: "The full beachfront layout",
    description:
      "A guided look at the twin villas, private pools, garden spaces, beachfront setting, and how the property comes together.",
    ariaLabel: "Open property tour video",
    featured: true,
  },
  {
    src: "/bofa/Villa-Amani.mp4",
    label: "Villa Amani",
    title: "Warm interiors and private coastal comfort",
    description:
      "Preview Villa Amani’s interior character, living spaces, bedrooms, and the details that make it distinct.",
    ariaLabel: "Open Villa Amani video",
    featured: false,
  },
  {
    src: "/bofa/Villa-Raha.mp4",
    label: "Villa Raha",
    title: "A distinct villa setting with its own interior feel",
    description:
      "Preview Villa Raha’s interior atmosphere so guests can choose the villa that best suits their stay.",
    ariaLabel: "Open Villa Raha video",
    featured: false,
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState("");
  const [activeImage, setActiveImage] = useState<null | {
    src: string;
    title: string;
    alt: string;
  }>(null);
  const [activeVideo, setActiveVideo] = useState<null | {
    src: string;
    title: string;
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
      menuOpen || Boolean(activeVideo) || Boolean(activeImage)
    );

    return () => document.body.classList.remove("nav-open");
  }, [menuOpen, activeVideo, activeImage]);

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
        <Link className="brand" href="/" aria-label="The Destination at Bofa">
          <img src="/bofa/logo.jpeg" alt="The Destination at Bofa logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#villa">The Villas</a>
          <a href="#story">Story</a>
          <Link href="/gallery">Gallery</Link>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#rates">Rates</a>
          <a href="#booking">Bookings</a>
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
        </button>
      </header>

      <nav
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#villa" onClick={closeMenu}>
          The Villas
        </a>
        <a href="#story" onClick={closeMenu}>
          Story
        </a>
        <Link href="/gallery" onClick={closeMenu}>
          Gallery
        </Link>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#rates" onClick={closeMenu}>
          Rates
        </a>
        <a href="#booking" onClick={closeMenu}>
          Bookings
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-media" aria-hidden="true"></div>
          <div className="hero-overlay" aria-hidden="true"></div>

          <div className="hero-content">
            <p className="hero-eyebrow">Kilifi luxury beach villas</p>

            <h1>
              The Destination
              <br />
              at Bofa
            </h1>

            <p>
              Twin beachfront villas shaped around ocean mornings, poolside
              afternoons, open-air living, and the quiet elegance of Bofa on the
              Kilifi coast.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#booking">
                Reserve Your Stay
              </a>
              <a className="button ghost" href="#villa">
                Explore the Villas
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <span>Twin beachfront villas</span>
            <strong>Up to 8 guests</strong>
            <span>Private pools · Chef · Daily housekeeping</span>
          </aside>
        </section>

        <section className="intro section-pad screen-fit" id="villa">
          <div className="section-kicker">The Villas</div>

          <div className="intro-grid">
            <div>
              <h2>Twin beachfront villas with the ease of a hosted home.</h2>
            </div>

            <div className="intro-copy">
              <p>
                The Destination at Bofa is made for families, groups, retreats,
                and slow celebrations that need space to breathe. Two identical
                villas sit directly on a private beach, each with its own pool,
                generous living spaces, and uninterrupted sea views.
              </p>
              <p>
                Thoughtful indoor-outdoor living connects each home to the sand,
                the pool, and the ocean beyond, creating a calm base near Bofa
                Beach and Kilifi Creek.
              </p>
            </div>
          </div>

          <CountUpStats />
        </section>

        <section className="story section-pad" id="story">
          <button
            className="story-media clickable-media"
            type="button"
            aria-label="View villa image"
            onClick={() =>
              setActiveImage({
                src: "/bofa/gallery/villa-06.jpeg",
                title: "The Destination at Bofa",
                alt: "The Destination at Bofa beachfront villa",
              })
            }
          ></button>

          <div className="story-content">
            <p className="eyebrow dark">Our Story</p>
            <h2>A family sanctuary, now shared with guests.</h2>

            <div className="story-copy">
              <p>
                Built with love as a private family retreat, our twin beachfront
                villas were originally created as a place where generations could
                come together to slow down, reconnect, and enjoy the simple
                beauty of life by the ocean.
              </p>
              <p>
                Nestled directly on a private beach, the two identical villas
                were thoughtfully designed to offer complete comfort, privacy,
                and uninterrupted sea views from every corner.
              </p>
              <p>
                For years, these homes were filled with family holidays,
                laughter, celebrations, and peaceful moments by the sea. After
                Covid, we decided to open our doors and share this special place
                with guests seeking a more personal and luxurious escape.
              </p>
              <p>
                Today, the villas welcome travellers looking for privacy,
                elegance, and the calming experience of beachfront living.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-strip">
          {previewImages.map((image) => (
            <figure key={image.title}>
              <button
                className="gallery-click"
                type="button"
                onClick={() => setActiveImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.title}</figcaption>
              </button>
            </figure>
          ))}
        </section>

        <section className="experience section-pad" id="experience">
          <div className="experience-heading">
            <div>
              <p className="eyebrow dark">The Destination Bofa Experience</p>
              <h2>Designed for barefoot days and beautifully hosted nights.</h2>
            </div>

            <p>
              Explore the full beachfront property, then preview each villa
              separately so guests can choose the layout and interior style that
              best suits their stay.
            </p>
          </div>

          <div className="experience-grid">
            {experienceVideos.map((video) => (
              <article
                className={`experience-card video-card ${
                  video.featured ? "large" : ""
                }`}
                key={video.src}
              >
                <button
                  className="video-open-card"
                  type="button"
                  aria-label={video.ariaLabel}
                  onClick={() =>
                    setActiveVideo({
                      src: video.src,
                      title: video.title,
                    })
                  }
                >
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="video-card-overlay">
                    <span>{video.label}</span>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <strong>Play Video</strong>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="services terms-style-section" id="services">
          <div className="terms-style-heading">
            <div>
              <p className="section-kicker">For Your Comfort</p>
              <h2>Everything essential, handled with calm precision.</h2>
            </div>

            <p>
              Your stay can be arranged as private and independent, or fully
              supported with meals, transport, cleaning, and local experiences.
            </p>
          </div>

          <div className="comfort-grid">
            <article>
              <span>Daily Housekeeping</span>
              <h3>Fresh, clean, and cared for</h3>
              <p>
                Full housekeeping service is included, with bathroom amenities
                and towels refreshed.
              </p>
            </article>

            <article>
              <span>Private Chef</span>
              <h3>Coastal dining made easy</h3>
              <p>
                A private multi-culinary chef is included, with barbecues
                available on request.
              </p>
            </article>

            <article>
              <span>24/7 Security</span>
              <h3>Privacy and peace of mind</h3>
              <p>
                Trained guards, security dogs, electric fencing, and ample onsite
                parking are provided.
              </p>
            </article>

            <article>
              <span>Events and Retreats</span>
              <h3>Gather beautifully</h3>
              <p>
                Picnics, birthdays, anniversaries, weddings, corporate retreats,
                and wellness escapes can be arranged.
              </p>
            </article>
          </div>

          <a className="comfort-link" href="#booking">
            Plan Your Stay
          </a>
        </section>

        <section className="facilities">
          <button
            className="facility-image clickable-media"
            type="button"
            aria-label="View villa facilities image"
            onClick={() =>
              setActiveImage({
                src: "/bofa/gallery/villa-07.jpg",
                title: "Villa Facilities",
                alt: "Villa facilities at The Destination Bofa",
              })
            }
          ></button>

          <div className="facility-content">
            <p className="eyebrow dark">Villa Facilities</p>
            <h2>
              Space for gathering, resting, working, and disappearing into the
              coast.
            </h2>
            <ul>
              <li>
                Four-bedroom villas with three ensuite rooms and one twin room
                with private bathroom.
              </li>
              <li>Open lounge, dining space, and fully equipped kitchen.</li>
              <li>
                Private pool, sun loungers, garden seating, and shaded terrace.
              </li>
              <li>
                Wi-Fi, air conditioning throughout, daily housekeeping, chef
                service, and 24/7 security.
              </li>
            </ul>
          </div>
        </section>

        <section className="rates section-pad screen-fit" id="rates">
          <div className="section-kicker">2026 Rates</div>

          <div className="rates-heading">
            <h2>Accommodation rates per villa, per night.</h2>
            <p>
              Rates cover accommodation only. Meals, groceries, drinks, and
              laundry services are not provided. Rates may change without prior
              notice.
            </p>
          </div>

          <div className="rates-table">
            <div className="rates-row rates-head">
              <span>Season</span>
              <span>Dates</span>
              <span>Rate</span>
            </div>
            <div className="rates-row">
              <span>Mid Season</span>
              <span>3 Jan - 31 May 2026</span>
              <strong>KES 75,000</strong>
            </div>
            <div className="rates-row">
              <span>Peak Season</span>
              <span>1 Jun - 31 Aug 2026</span>
              <strong>KES 87,000</strong>
            </div>
            <div className="rates-row">
              <span>Mid Season</span>
              <span>1 Sep - 15 Dec 2026</span>
              <strong>KES 75,000</strong>
            </div>
            <div className="rates-row">
              <span>Festive Season</span>
              <span>15 Dec 2026 - 3 Jan 2027</span>
              <strong>KES 105,000</strong>
            </div>
          </div>
        </section>

        <section className="terms section-pad compact-section">
          <div className="section-kicker">Guest Terms</div>

          <div className="terms-heading">
            <h2>Clear stay details before you arrive.</h2>
            <p>
              Bookings are subject to the villa terms and conditions, accepted by
              the hirer and every guest in the party.
            </p>
          </div>

          <div className="terms-grid">
            <article>
              <span>Arrivals</span>
              <h3>Check-in and checkout</h3>
              <p>
                Check-in is from 2:00 PM to 9:00 PM. Checkout is at 10:00 AM.
              </p>
            </article>
            <article>
              <span>Payment</span>
              <h3>Deposit and balance</h3>
              <p>
                50% is due within 7 days of confirmation. The balance is due at
                least 2 days before arrival.
              </p>
            </article>
            <article>
              <span>Occupancy</span>
              <h3>Private holiday residence</h3>
              <p>
                Each villa is for listed guests only, with a maximum occupancy of
                8 people.
              </p>
            </article>
            <article>
              <span>Pool</span>
              <h3>Safety first</h3>
              <p>
                Pool use is at guests&apos; own risk. Children must be
                supervised, glass is not allowed, and diving is not supported.
              </p>
            </article>
            <article>
              <span>House Rules</span>
              <h3>No pets or indoor smoking</h3>
              <p>
                Pets are not allowed. Smoking is not permitted inside the house,
                but may be allowed on balconies and terraces.
              </p>
            </article>
            <article>
              <span>Premises</span>
              <h3>No alcohol or pork</h3>
              <p>Alcohol and pork are prohibited on the villa premises.</p>
            </article>
          </div>
        </section>

        <section className="booking section-pad" id="booking">
          <div className="booking-copy">
            <p className="eyebrow dark">Rates / Bookings</p>
            <h2>Your Bofa escape starts with a simple enquiry.</h2>
            <p>
              Share your dates and group size. The team will confirm
              availability, the seasonal rate, and any arrangements for meals,
              occasions, or retreats.
            </p>

            <div className="contact-block">
              <span>Reservations</span>
              <a href="tel:+254736786014">+254 736 786 014</a>
              <a href="tel:+254733786862">+254 733 786 862</a>
              <a href="mailto:thedestinationbofa@gmail.com">
                thedestinationbofa@gmail.com
              </a>
              <a href="https://www.instagram.com/thedestinationkilifi/">
                @thedestinationkilifi
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
              Guests
              <select name="guests" required>
                <option value="">Select guests</option>
                <option>2 guests</option>
                <option>4 guests</option>
                <option>6 guests</option>
                <option>8 guests</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Share any arrival notes or questions."
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
            <img src="/bofa/logo.jpeg" alt="The Destination at Bofa logo" />
          </Link>
          <p>Twin Kilifi luxury beachfront villas near Bofa Beach.</p>
        </div>

        <nav>
          <a href="#villa">The Villas</a>
          <a href="#story">Story</a>
          <Link href="/gallery">Gallery</Link>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#booking">Bookings</a>
        </nav>

        <p className="copyright">© 2026 The Destination at Bofa</p>
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

      {activeVideo && (
        <div className="video-modal" role="dialog" aria-modal="true">
          <button
            className="video-modal-backdrop"
            type="button"
            aria-label="Close video"
            onClick={() => setActiveVideo(null)}
          ></button>

          <div className="video-modal-card">
            <button
              className="video-modal-close"
              type="button"
              onClick={() => setActiveVideo(null)}
            >
              Close
            </button>

            <video
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
              className="modal-video"
            />
          </div>
        </div>
      )}
    </>
  );
}