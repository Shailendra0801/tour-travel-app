import "./App.css";
import { Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Details from "./routes/Details";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Booking from "./components/booking/Booking";
import Terms from "./routes/TermsRoute";
import Done from "./components/booking/Done";
import PrivacyRoutes from "./routes/PrivacyRoute";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/terms" element={< Terms/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/details/:title" element={<Details />} />
        <Route path="/booking/:title" element={<Booking />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/done" element={<Done />}/>
        <Route path="/privacy" element={<PrivacyRoutes />}/>
      </Routes>
    </div>
  );
}