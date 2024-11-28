import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Details from "./routes/Details";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Booking from "./components/destination/Booking";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/details/:title" element={<Details />} />
        <Route path="/booking/:title" element={<Booking />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}