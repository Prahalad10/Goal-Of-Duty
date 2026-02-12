import { Link } from "react-router-dom";

export function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <Link to={`/reviews/${review.slug}`} className="review-link">
        <div className="image-wrap">
          <img src={review.image} alt={review.title} />
          <span className="score-pill">{review.score}</span>
        </div>
        <div className="card-body">
          <h3>{review.title}</h3>
          <p>{review.tagline}</p>
        </div>
      </Link>
    </article>
  );
}
