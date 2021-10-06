import './css/Navbar.css';
import React from 'react';
import { MdSearch, MdShoppingCart } from "react-icons/md";
import Badge from '@material-ui/core/Badge';

export default function Navbar() {
    return (
        <div className="nav-container">
          <div className="nav-wrapper">

            <div className="nav-left">
              <span className="nav-lang">EN</span>
              <div className="nav-search">
                <input className="nav-search-input"></input>
                <MdSearch className="nav-search-icon" />
              </div>
            </div>

            <div className="nav-center">
              <h1 className="nav-h1-logo">SwissCodes</h1>
            </div>

            <div className="nav-right">
              <div className="nav-right-items">
                <p>Register</p>
              </div>
              <div className="nav-right-items">
                <p>Sign in</p>
              </div>
              <div className="nav-right-items">
                <Badge badgeContent={5} className="nav-notification" >
                  <MdShoppingCart className="nav-cart"></MdShoppingCart>
                </Badge>
              </div>
            </div>

          </div>
        </div>
    )
};
