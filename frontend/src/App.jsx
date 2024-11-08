import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Details from "./routes/Details";
import SignUp from "./components/SignUp/SignUp";
import VerifyMail from "./components/VerifyMail/VerifyMail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/details/:title" element={<Details />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/verify-mail" element={<VerifyMail />} />
      </Routes>
    </div>
  );
}