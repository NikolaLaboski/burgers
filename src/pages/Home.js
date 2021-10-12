import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/burger.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> MegaBurger </h1>
        <p> BEST BURGERS IN TOWN</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link> 
      </div>
    </div>
  ); 
}
 
export default Home;  