import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/list.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Signin from "./pages/signin/signin.jsx";
import Signup from "./pages/signup/signup.jsx";
import Profile from "./pages/Profile/profile.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<List />}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/Profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
