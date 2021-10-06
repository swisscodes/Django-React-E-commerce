import "./css/ProductDetail.css"
import React from 'react'
import { MdSearch, MdFavoriteBorder, MdShoppingCart } from "react-icons/md";

export default function ProductDetail({product}) {
    return (
        <div className="ProductDetail-container">
          <div className="ProductDetail-circle">
          </div>
          <img className="ProductDetail-img" src={product.img} alt="">
          </img>
          <div className="ProductDetail-info">
            <div className="ProductDetail-icon">
              <MdShoppingCart></MdShoppingCart>
            </div><div className="ProductDetail-icon">
              <MdSearch></MdSearch>
            </div>
            <div className="ProductDetail-icon">
              <MdFavoriteBorder></MdFavoriteBorder>
            </div>
          </div>  
        </div>
    )
}
