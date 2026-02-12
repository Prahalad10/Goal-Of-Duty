import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReviewCard } from "./ReviewCard";

export function HomePage({ reviews }) {
  const featured = reviews.filter((item) => item.featured);
  const latest = reviews.filter((item) => !item.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (featured.length < 2) {
      return undefined;
    }
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + featured.length) % featured.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % featured.length);
  };

  return (
    <>
      <section className="hero-review carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {featured.map((review) => (
            <article className="carousel-slide" key={review.slug}>
              <img src={review.image} alt={review.title} />
              <div className="hero-overlay" />
              <div className="hero-content">
                <p className="kicker">Featured Spotlight</p>
                <h1>{review.title}</h1>
                <p>{review.tagline}</p>
                <Link to={`/reviews/${review.slug}`} className="cta-button">
                  Read Full Review
                </Link>
              </div>
            </article>
          ))}
        </div>

        <button type="button" className="carousel-btn left" onClick={previousSlide} aria-label="Previous slide">
          {"<"}
        </button>
        <button type="button" className="carousel-btn right" onClick={nextSlide} aria-label="Next slide">
          {">"}
        </button>

        <div className="carousel-dots">
          {featured.map((review, index) => (
            <button
              key={review.slug}
              type="button"
              className={index === activeIndex ? "dot active" : "dot"}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${review.title}`}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <h2>Featured Reviews</h2>
        </div>
        <div className="review-grid">
          {featured.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <h2>Latest Reviews</h2>
        </div>
        <div className="review-grid">
          {latest.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>
    </>
  );
}
