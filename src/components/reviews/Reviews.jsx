import "./reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  // This would typically come from your backend
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "2024-02-20",
      review: "Excellent hotel with great amenities and friendly staff!"
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      date: "2024-02-19",
      review: "Very comfortable stay, but the breakfast could be better."
    }
  ];

  return (
    <div className="reviews">
      <h2>Guest Reviews</h2>
      <div className="reviewsList">
        {reviews.map(review => (
          <div key={review.id} className="reviewItem">
            <div className="reviewHeader">
              <span className="reviewerName">{review.name}</span>
              <div className="reviewRating">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className={`star ${index < review.rating ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
            <span className="reviewDate">{review.date}</span>
            <p className="reviewText">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; 