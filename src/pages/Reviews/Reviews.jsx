// src/pages/reviews/Reviews.jsx
import React, { useEffect, useState } from "react";
import "./reviews.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [hotelNames, setHotelNames] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchHotelName = async (hotelId) => {
    try {
      const response = await axios.get(`http://localhost:8080/hotels/${hotelId}`);
      return response.data.hotelName;
    } catch (error) {
      console.error(`Error fetching hotel name for ${hotelId}:`, error);
      return 'Unknown Hotel';
    }
  };

  const fetchReviews = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.id) {
        const response = await axios.get(`http://localhost:8084/user/${user.id}/reviews`);
        setReviews(response.data);

        // Fetch hotel names for all reviews
        const names = {};
        await Promise.all(
          response.data.map(async (review) => {
            names[review.hotelId] = await fetchHotelName(review.hotelId);
          })
        );
        setHotelNames(names);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Failed to fetch reviews');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="reviews-container">
        <h2>Your Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-info">
                <div className="review-header">
                  <h3>{hotelNames[review.hotelId] || 'Loading hotel name...'}</h3>
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={`star ${index < review.rating ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="review-content">
                  <p className="review-message">{review.message}</p>
                  <div className="review-dates">
                    <span className="date-label">Posted on: </span>
                    <span className="date-value">
                      {new Date(review.createdDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;