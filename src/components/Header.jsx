import logo from "../img/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";

import "../scss/header.scss";

export default (props) => {


  
  return (
    <header className="container flex justify-between items-center">
      <a href="#">
        <img srcSet={logo} />
      </a>
      <div className="header-right">
        <div>
          <MdFavorite />
        </div>
        <div className="cursor-pointer">
          <FaShoppingCart />
        </div>
        <div onClick={props.onClickCart}>1200 рублей</div>
      </div>
    </header>
  );
};
