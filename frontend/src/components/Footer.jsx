import "./css/Footer.css";
import React from 'react';
import {AiOutlineFacebook, AiOutlineInstagram,
  AiFillTwitterCircle, AiOutlineHome, 
  AiOutlinePhone, AiOutlineMail} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="Footer-container">
          <div className="Footer-left">
            <h1 className="Footer-h1">swisscodes</h1>
            <p className="Footer-left-desc-p">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
            </p>
            <div className="Footer-social-container">
              <div className="Footer-social-icon">
                <div className="Footer-facebook main-icon"><AiOutlineFacebook></AiOutlineFacebook></div>
                <div className="Footer-instagram main-icon"><AiOutlineInstagram></AiOutlineInstagram></div>
                <div className="Footer-twitter main-icon"><AiFillTwitterCircle></AiFillTwitterCircle></div>
                <div className="Footer-pinterest main-icon"><FaPinterestP></FaPinterestP></div>
              </div>
            </div>
          </div> 
          <div className="Footer-center">
            <h3 className="Footer-h3">Useful links</h3>
            <ul className="Footer-ul">
              <li className="Footer-li">Home</li>
              <li className="Footer-li">Cart</li>
              <li className="Footer-li">Man Fashion</li>
              <li className="Footer-li">Woman Fashion</li>
              <li className="Footer-li">Accessories</li>
              <li className="Footer-li">My Account</li>
              <li className="Footer-li">Order Tracking</li>
              <li className="Footer-li">Wishlist</li>
              <li className="Footer-li">Wishlist</li>
              <li className="Footer-li">Terms</li>
            </ul>
          </div>
          <div className="Footer-right">
            <h3 className="Footer-h3">Contact</h3>
            <div className="Footer-contact">
              <p className="Footer-contact-p"><AiOutlineHome className="Footer-icon"/> Oulu cd, Basaran sk, Kurkurtlu cd, blok b daire 12,
              Osmangazi, Bursa Turkey
              </p>
              <p className="Footer-contact-p"><AiOutlinePhone className="Footer-icon" />00905320662892</p>
              <p className="Footer-contact-p"><AiOutlineMail className="Footer-icon" />swissbobo@gmail.com</p>
            </div>
          </div> 
        </div>
    )
}
