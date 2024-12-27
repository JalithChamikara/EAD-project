import { useNavigate } from "react-router-dom";
import "./searchitem.css";

const SearchItem = ({hotel}) => {
    const navigate = useNavigate();

    let amenities = hotel.amenities;
  if (typeof amenities === 'string') {
    try {
      amenities = JSON.parse(amenities);
    } catch (error) {
      console.error('Error parsing amenities:', error);
    }
  }

  const handleCheckAvailability = () => {
    navigate(`/hotels/${hotel.hotelId}`);
  };

    return (
        <div className="searchItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/242508984.webp?k=ec6cc5528ea056a6bad54c3e02e64a9fd43aa01e7386151f2efb19350d98376c&o=" 
                alt={`${hotel.hotelName}`}
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{hotel.hotelName}</h1> 
                <span className="siAddress">{hotel.hotelAddress}</span> 
                <span className="siDescription">{hotel.hotelDescription}</span> 
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
                    <span className="siPrice">${hotel.pricePerNight}</span>
                    <span className="siTaxOp">Includes taxes and fess</span>
                    <button className="siCheckButton" onClick={handleCheckAvailability}>See availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;