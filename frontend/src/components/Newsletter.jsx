import "./css/Newsletter.css"
import React from 'react'
import {MdSend} from "react-icons/md";

export default function Newsletter() {
    return (
        <div className="Newsletter-container">
          <h1 className="Newsletter-title">Newsletter</h1>
          <div className="Newsletter-description">
            <p>Get Timely updates from your favorite products.</p>
          </div>
          <div className="Newsletter-input-wrapper">
            <input 
              type="email"
              className="Newsletter-input"
              placeholder="Your email"
              >
            </input>
            <button className="Newsletter-button"><MdSend></MdSend></button>
          </div>
        </div>
    )
}
