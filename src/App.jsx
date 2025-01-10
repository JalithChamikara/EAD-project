import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/list.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Signin from "./pages/signin/signin.jsx";
import Signup from "./pages/signup/signup.jsx";
import Room from "./pages/Room/Room.jsx";
import Profile from "./pages/Profile/profile.jsx"
import Bookings from "./pages/bookings/bookings.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Reviews from "./pages/Reviews/Reviews.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<List />}/>
        <Route path="/hotels/:hotelId" element={<Hotel />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/rooms/:hotelId" element={<Room />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/reviews" element={<Reviews/>} />
      </Routes>
    </BrowserRouter>
     
  )
}

export default App