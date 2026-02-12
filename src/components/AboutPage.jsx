import { aboutContent } from "../data/reviews";

export function AboutPage() {
  return (
    <section className="container about-page">
      <h1>{aboutContent.heading}</h1>
      {aboutContent.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <blockquote>{aboutContent.quote}</blockquote>
    </section>
  );
}
