import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import AddToCart from "./Components/AddToCart";
import Home from "./Components/Home";
import {
  BrowserRouter ,
  Routes, Route,
} from "react-router-dom";
import SineUp from "./Components/SignUp";
import Login from "./Components/Login";
import Protected from "./Components/Protected";

function App() {
  const [searchdatas, setSearchdatas] = useState("");
  const [clicksearch, setClicksearch] = useState("");
  const [addtocart, setAddtocart] = useState([]);
 
  return (
   <BrowserRouter>
   <Navbar setSearchdatas2={setSearchdatas} addtocart={addtocart} setClicksearch2={setClicksearch}/>
   <Routes>
   <Route path="/" element={<Protected Component={Home} searchdatasvar={searchdatas} setAddtocart2={setAddtocart} clicksearch={clicksearch}/>} />
   <Route path="/addtocart" element={<Protected Component={AddToCart} />} />
   <Route path="/SineUp" element={<SineUp/>} />
   <Route path="/login" element={<Login/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
