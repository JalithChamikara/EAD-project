import React, { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom';


const Listsearch = ({ destination, setDestination, date, setDate, options, setOptions}) => {
    const location = useLocation();
    const [openDate, setOpenDate] = useState(false);

  return (
    <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input 
              type="text" 
              placeholder={destination} 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              />
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
                  <input type="number" min={1} className="lsOptionInput" 
                  placeholder={options.adult} 
                  onChange={(e) => setOptions({...options, adult: e.target.value})} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children
                  </span>
                  <input type="number" min={0} className="lsOptionInput" 
                  placeholder={options.children}
                  onChange={(e) => setOptions({...options, children: e.target.value})}  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room
                  </span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room}
                  onChange={(e) => setOptions({...options, room: e.target.value})} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
  )
}

export default Listsearch