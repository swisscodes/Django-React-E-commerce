import "./css/CategoriesItem.css"
import React from 'react'

export default function CategoriesItem({item}) {
    return (
        <div className="categoriesItem-container">
          <img src={item.img} alt="">
          </img>
          <div className="categoriesItem-info-div">
            <h1 className="categoriesItem-h1">{item.title}</h1>
            <button className="categoriesItem-button">SHOP NOW</button>
          </div>
        </div>
    )
}
