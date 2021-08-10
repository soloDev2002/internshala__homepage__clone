import React from "react";
import logo from "./logo.svg";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MessageIcon from "@material-ui/icons/Message";
import "./navbar.css";
function navbar() {
  return (
    <div className="navbar__container flex__container">
      <div className="logo__container flex__container">
        <img src={logo} alt="internshala" />
      </div>
      <div className="navbar__buttons__container flex__container">
        <div className="navbar__button flex__container">
          Internships <ArrowDropUpIcon />
        </div>
        <div className="navbar__button flex__container">
          Online Trainings &nbsp;<span className="offer">OFFER</span>
          <ArrowDropDownIcon />
        </div>
        <div className="navbar__button flex__container">Freshers Jobs</div>
        <div className="navbar__button flex__container icon__button">
          <BookmarkBorderIcon />
        </div>
        <div className="navbar__button flex__container icon__button">
          <MessageIcon />
        </div>
        <div className="navbar__button profile__button flex__container icon__button">
          <div className="letter flex__container">S </div> <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default navbar;
