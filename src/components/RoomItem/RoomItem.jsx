import React from 'react';
import './roomitem.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoomItem = ({ room , checkInDate, checkOutDate, adults, children }) => {
  const { hotel } = room;
  let amenities = hotel.amenities;
  if (typeof amenities === 'string') {
    try {
      amenities = JSON.parse(amenities);
    } catch (error) {
      console.error('Error parsing amenities:', error);
    }
  }

  const handleBookRoom = async() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
        toast.error('Please log in to book a room')
    }
    const bookingDetails = {
        userId: user.id,
        hotelId: hotel.hotelId,
        roomId: room.roomId,
        checkInDate: checkInDate.toISOString().split('T')[0], // Format date to YYYY-MM-DD
        checkOutDate: checkOutDate.toISOString().split('T')[0], // Format date to YYYY-MM-DD
        adults: parseInt(adults, 10),
        children: parseInt(children, 10),
        totalPrice: room.price_per_night * (parseInt(adults, 10) + (parseInt(children, 10) * 0.5))
    };

    try{
        console.log("Booking Details", bookingDetails);
        const response = await axios.post('http://localhost:8081/bookings', bookingDetails, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
        console.log("booking successful!", response.data);
        toast.success('Booking Successful!')
    }
    catch(error){
        console.error('Error booking room',error);
        toast.error('Error Booking Room. Please Try Again!');
    }
  };

  return (
    <div className="searchItem">
        <ToastContainer />
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/242508984.webp?k=ec6cc5528ea056a6bad54c3e02e64a9fd43aa01e7386151f2efb19350d98376c&o=" 
                alt={`${hotel.hotelName}`}
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{room.roomType} Bed</h1> 
                <span className="siAddress">{hotel.hotelName}</span> 
                {/* <span className="siDescription">{hotel.hotelDescription}</span>  */}
                <span className="siAmenities">{amenities && amenities.join(', ')}</span> 
                <span className="siRating">Rating: {hotel.rating}</span>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubTitle">
                    {hotel.subtitle}
                </span>
                <span className="siFeatures">
                {amenities && amenities.join(', ')}
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel latter, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excelent</span>
                    <button>{hotel.rating}</button>
                </div>
                <div className="siDatailTexts">
                    <span className="siPrice">${room.price_per_night}</span>
                    <span className="siTaxOp">Includes taxes and fess</span>
                    <button  onClick={handleBookRoom} className='bookbutton'>Book Now</button>
                </div>
            </div>
        </div>
  );
};

export default RoomItem;