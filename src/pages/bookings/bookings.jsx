import React, { useEffect, useState } from "react";
import "./bookings.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch bookings
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.id) {
        const baseUrl = `http://localhost:8081/user/${user.id}/bookings`;
        const response = await axios.get(baseUrl);
        setBookings(response.data);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Failed to fetch bookings');
    }
  };

  const handleCancelBooking = async (bookingId) => {
    // Custom confirmation toast
    toast.info(
      <div>
        <p>Are you sure you want to cancel this booking?</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
          <button
            onClick={() => {
              toast.dismiss();
              proceedWithCancellation(bookingId);
            }}
            style={{
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Yes, Cancel
          </button>
          <button
            onClick={() => toast.dismiss()}
            style={{
              background: '#95a5a6',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            No, Keep
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };
  
  const proceedWithCancellation = async (bookingId) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:8081/bookings/${bookingId}`);
      setBookings(prevBookings => prevBookings.filter(booking => booking.bookingId !== bookingId));
      toast.success('Booking cancelled successfully!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error('Failed to cancel booking. Please try again.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="bookings-container">
        <h2>Your Bookings</h2>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking.bookingId} className="booking-card">
  <div className="booking-info">
    <div className="booking-header">
      <h3>Booking Details</h3>
      <span className="booking-id">ID: {booking.bookingId}</span>
    </div>
    
    <div className="booking-dates">
      <div className="date-group">
        <span className="date-label">Check-in</span>
        <span className="date-value">{booking.checkInDate}</span>
      </div>
      <div className="date-group">
        <span className="date-label">Check-out</span>
        <span className="date-value">{booking.checkOutDate}</span>
      </div>
    </div>
    
    <div className="booking-details">
      <div className="detail-group">
        <span className="detail-label">Adults</span>
        <span className="detail-value">{booking.adults}</span>
      </div>
      <div className="detail-group">
        <span className="detail-label">Children</span>
        <span className="detail-value">{booking.children}</span>
      </div>
      <div className="detail-group">
        <span className="detail-label">Total Price</span>
        <span className="detail-value price">${booking.totalPrice}</span>
      </div>
    </div>
  </div>
  
  <button className="cancel-booking"
  onClick={()=> handleCancelBooking(booking.bookingId)}
  disabled={loading}> 
  {loading ? 'Cancelling...' : 'Cancel Booking'}
  </button>
</div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;