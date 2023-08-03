import React from "react";
import Nav from "./Components/Nav/Nav.jsx";
import Header from "./Components/Header/Header.jsx";
import "./App.css";
import About from "./Components/About/About.jsx";
import TodaySpecial from "./Components/TodaySpecial/TodaySpecial.jsx";
import Chef from "./Components/Chef/Chef.jsx";
import Instagram from "./Components/Instagram/Instagram.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Customer from "./Components/Customer/Customer.jsx";
import Awards from "./Components/Awards/Awards.jsx";
import Update from "./Components/Update/Update.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import SignIn from "./Pages/SignIn.jsx/SignIn.jsx";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
export default function App() {
  return (
    <div className="app__bg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="/sign_up" element={<SignUp/>}/>
      </Routes>
      {/* <Nav />
      <Header />
      <About />
      <TodaySpecial />
      <Chef />
      <Menu />
      <Customer />
      <Awards />
      <Update />
      <Instagram />
      <Footer />
      <SignIn/>
      <SignUp/> */}
    </div>
  );
}
