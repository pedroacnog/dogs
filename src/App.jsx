import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";

import './Global/App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
