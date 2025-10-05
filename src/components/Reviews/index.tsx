import React from "react";
import TextLink from "../TextLink";
import styles from "./styles.module.scss";

interface Review {
  quote: string;
  author: string;
  source?: string | null;
}

interface ReviewsProps {
  reviews: (Review | null)[];
  title?: string;
}

const Reviews: React.FC<ReviewsProps> = ({ reviews, title = "Reviews" }) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const validReviews = reviews.filter(
    (review): review is Review => review !== null
  );

  if (validReviews.length === 0) {
    return null;
  }

  return (
    <div className={styles.Reviews}>
      <h2 className={styles.title}>{title}</h2>
      {validReviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <blockquote className={styles.quote}>
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <div className={styles.footer}>
            <cite className={styles.author}>— {review.author}</cite>
            {review.source && (
              <TextLink
                label="Read Full Review"
                url={review.source}
                variant="large"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
