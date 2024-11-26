import "./footer.css"
import { FaGlobe, FaCity, FaMap, FaPlane, FaHotel } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">
                    <FaGlobe className="footer-icon" />Countries</li>
                    <li className="fListItem">
                    <FaMap className="footer-icon" />Regions</li>
                    <li className="fListItem">
                    <FaCity className="footer-icon" />Cities</li>
                    <li className="fListItem">
                    <FaMap className="footer-icon" />Districts</li>
                    <li className="fListItem">
                    <FaPlane className="footer-icon" />Airports</li>
                    <li className="fListItem">
                    <FaHotel className="footer-icon" />Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
            </div>
           <div className="ftext">Copyright 2024</div>
        </div>
    )
}
export default Footer