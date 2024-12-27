import React, { useState ,useEffect} from 'react'
import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchitem/searchitem'
import axios from 'axios'

const list = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate,setOpenDate] = useState(false);
  const [options,setOption] = useState(location.state.options);
  const [hotels, setHotels] = useState([]);

  useEffect(() => { 
    const fetchHotels = async () => { 
    try { 
      const response = await axios.get('http://localhost:8080/hotels'); 
      setHotels(response.data); 
      console.log("hotels: "+response.data)
      response.data.forEach((hotel, index) => {
        console.log(`Hotel ${index + 1}:`, hotel); });
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
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in-Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && <DateRange 
                onChange={(item) => setDate([item.selection])} 
                minDate={new Date()}
                ranges={date} />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
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