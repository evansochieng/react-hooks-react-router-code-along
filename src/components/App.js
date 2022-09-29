import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./Signup";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;