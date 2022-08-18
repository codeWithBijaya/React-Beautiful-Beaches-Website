import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./NavbarStyles.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handlenav = () => setNav(!nav);
  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hasburger" onClick={handlenav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "black" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
        <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedin className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
