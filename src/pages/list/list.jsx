import React, { useState ,useEffect} from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchitem/searchitem'
import axios from 'axios'
import Listsearch from './Listsearch'

const list = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => { 
    const fetchHotels = async () => { 
    try { 
      const response = await axios.get('http://localhost:8080/hotels'); 
      setHotels(response.data); 
      // console.log("hotels: "+response.data)
      // response.data.forEach((hotel, index) => {
      //   console.log(`Hotel ${index + 1}:`, hotel); });
   } catch (error) { 
    console.error('Error fetching hotels:', error); } 
  };
     fetchHotels(); }, []);

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          {/* <Listsearch /> */}
          <div className="listResult">
          {hotels.map((hotel) => ( 
            <SearchItem key={hotel.hotelId} hotel={hotel} /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default list