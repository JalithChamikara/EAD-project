import "./searchitem.css";

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/242508984.webp?k=ec6cc5528ea056a6bad54c3e02e64a9fd43aa01e7386151f2efb19350d98376c&o=" 
                alt="" 
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Tower Streat Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubTitle">
                    Studio Apartment with air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio . 1 bathroom . 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel latter, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excelent</span>
                    <button>8.9</button>
                </div>
                <div className="siDatailTexts">
                    <span className="siPrice">$1200</span>
                    <span className="siTaxOp">Includes taxes and fess</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;