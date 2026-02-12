import { Link, useParams } from "react-router-dom";

export function ReviewPage({ reviews }) {
  const { slug } = useParams();
  const review = reviews.find((item) => item.slug === slug);

  if (!review) {
    return (
      <section className="container">
        <h2>Review Not Found</h2>
        <p>The review you requested does not exist.</p>
        <Link to="/" className="text-link">
          Back to Reviews
        </Link>
      </section>
    );
  }

  return (
    <article className="review-page">
      <section className="review-hero">
        <img src={review.image} alt={review.title} />
        <div className="hero-overlay" />
        <div className="review-heading">
          <Link to="/" className="back-link">
            ← Back to all reviews
          </Link>
          <p className="kicker">Game Review</p>
          <h1>{review.title}</h1>
          <p className="quote">"{review.quote}"</p>
          <span className="score-box">Score: {review.score}</span>
        </div>
      </section>

      <section className="container review-body">
        {review.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </article>
  );
}
