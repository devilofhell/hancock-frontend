import React from "react";

import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img className="header__logo" src="images/logo.png" alt="Homepage" />
      </div>

      <div className="header__right">
        <SearchIcon className="header__icon" />
        <AddAPhotoIcon className="header__icon" />

        <Avatar className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
