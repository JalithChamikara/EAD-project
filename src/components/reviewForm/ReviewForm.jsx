import { useState } from "react";
import "./reviewForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";

const ReviewForm = ({hotelId}) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try{
      const user= JSON.parse(localStorage.getItem('user'));

      if(!user|| !user.id){
        toast.error('Please login to submit a review');
        return;
      }

      const reviewData = {
        hotelId :hotelId,
        userId: user.id,
        message: message,
        rating: rating
      }

      const response = await axios.post('http://localhost:8084/reviews', reviewData,{
        headers: {
          'Content-Type':'application/json'
        }
      });
      toast.success('Review submitted successfully!');
      console.log('Review submitted:', response.data);
      setRating(0);
      setMessage("");
    }
    catch(error){
      console.error('Error submitting review:', error);
      toast.error('Failed to submit review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="reviewForm">
      <ToastContainer />
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
        
        {/* <div className="formGroup">
          <label>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div> */}

        <div className="formGroup">
          <label>Your Review:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your review here..."
            required
            rows="6"
          />
        </div>

        <button className="submitReview" type="submit" disabled={loading || !rating || !message}>
        {loading ? 'Submitting...' : 'Submit Review'}
      </button>
      </form>
    </div>
  );
};

export default ReviewForm; 