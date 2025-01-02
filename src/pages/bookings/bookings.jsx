import React, { useState } from "react";
import "./bookings.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Bookings = () => {
    const trips = [
      {
        location: 'Montrose',
        stays: [
          {
            name: 'Rodeway Inn Montrose',
            date: 'Oct 15 - Oct 16',
            city: 'Montrose',
            status: 'Canceled',
            price: '$79.99',
            image: 'montrose.jpg', // Replace with actual image URL or path
          },
        ],
      },
      {
        location: 'United States of America',
        stays: [
          {
            name: 'Moab Redcliff Condos Dean RE',
            date: 'Jul 21 - Jul 22',
            city: 'Moab',
            status: 'Confirmed',
            price: '$235',
            image: 'moab.jpg',
          },
          {
            name: 'The Victorian Inn',
            date: 'Jul 22 - Jul 24',
            city: 'Telluride',
            status: 'Confirmed',
            price: '$496',
            image: 'victorian.jpg',
          },
          {
            name: 'Chateau Eau Claire Unit 1',
            date: 'Jul 24 - Jul 26',
            city: 'Aspen',
            status: 'Confirmed',
            price: '$757.63',
            image: 'chateau.jpg',
          },
        ],
      },
    ];
  
    return (
        <div>
            <Navbar />
                <div className="your-trips">
                  <h1>Your trips</h1>
                  {trips.map((trip, index) => (
                    <div key={index} className="trip-location">
                      <h2>{trip.location}</h2>
                      {trip.stays.map((stay, idx) => (
                        <div key={idx} className="stay-card">
                          <img src={stay.image} alt={stay.name} className="stay-image" />
                          <div className="stay-details">
                            <h3>{stay.name}</h3>
                            <p>{stay.date} · {stay.city}</p>
                            <p className={stay.status === 'Canceled' ? 'status canceled' : 'status confirmed'}>
                              {stay.status}
                            </p>
                          </div>
                          <div className="stay-price">{stay.price}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
            <Footer />
        </div>
      
    );
  };
  
  export default Bookings;