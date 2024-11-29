import { useState } from "react";
import "./reviewForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the review data to your backend
    console.log({
      rating,
      review,
      name,
      hotelId: "current-hotel-id", // You'll need to pass this as a prop
      date: new Date().toISOString()
    });
    
    // Clear form
    setRating(0);
    setReview("");
    setName("");
  };

  return (
    <div className="reviewForm">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="ratingContainer">
          <label>Your Rating:</label>
          <div className="stars">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={`star ${ratingValue <= (hover || rating) ? "active" : ""}`}
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              );
            })}
          </div>
        </div>
        
        <div className="formGroup">
          <label>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="formGroup">
          <label>Your Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            rows="4"
          />
        </div>

        <button type="submit" className="submitReview">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm; 