import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar"
import RoomItem from "../../components/RoomItem/RoomItem";
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import Listsearch from "../list/Listsearch";

const Room = () => {
    const { hotelId } = useParams();
    const location = useLocation();
    const [rooms, setRooms] = useState([]);
    const [destination, setDestination] = useState(location.state?.destination || '');
    const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });

useEffect(() => { 
    const fetchRooms = async () => { 
    try { 
      const response = await axios.get(`http://localhost:8080/hotels/${hotelId}/rooms`); 
      setRooms(response.data); 
      console.log("rooms: "+response.data)
      // response.data.forEach((hotel, index) => {
      //   console.log(`Hotel ${index + 1}:`, hotel); });
   } catch (error) { 
    console.error('Error fetching hotels:', error); } 
  };
     fetchRooms(); }, [hotelId]);
  return (
  <div>
      <Navbar />
      <div className="listContainer">
        <div className="listWrapper">
          <Listsearch 
          destination={destination}
          setDestination={setDestination}
          date={date}
          setDate={setDate}
          options={options}
          setOptions={setOptions}
          />
          <div className="listResult">
        {rooms.map((room) => (
          <RoomItem 
          key={room.roomId}
          room={room}
          checkInDate={date[0].startDate}
          checkOutDate={date[0].endDate}
          adults={options.adult}
          children={options.children} 
          />
        ))}
      </div>
        </div>
      </div>
    </div>
  )
}

export default Room