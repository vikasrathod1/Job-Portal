import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Jobs from "./Pages/Jobs/jobs";
import Companies from "./Pages/Companies/companies";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;