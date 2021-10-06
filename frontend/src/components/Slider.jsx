import "./css/Slider.css"
import React, {useState, useEffect} from 'react'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import sliderItems from "./data/sliderItems.json"

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction, e) => {
    console.log(e)
    if(direction==="left") {
      setSlideIndex((slideIndex) => slideIndex > 0 ? slideIndex-1: sliderItems.length-1)
    }
    else {
      setSlideIndex((slideIndex) => slideIndex < sliderItems.length-1 ? slideIndex+1:0)
    }

  }
  useEffect(()=>console.log(slideIndex))
    return (
        <div className="slider-container">
          <div
            className="slider-arrow-div arrow-left" 
            onClick={(event)=>handleClick("left", event)}
            >
            <MdKeyboardArrowLeft className="slider-arrow-left"></MdKeyboardArrowLeft>
          </div>
          <div className="slider-wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {sliderItems.map((obj)=> (
              <div key={obj.id} style={{backgroundColor:`#${obj.bg}`}} className="slider-main">
                <div className="slider-image">
                  <img className="slider-img-tag" src={obj.img} alt=""></img>
                </div>
                <div className="slider-info">
                  <h1 className="slider-title">{obj.title}</h1>
                  <p className="slider-desc-p">{obj.desc}</p>
                  <button className="slider-button">SHOP NOW</button>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-arrow-div arrow-right" onClick={(event)=>handleClick("right", event)}>
            <MdKeyboardArrowRight className="slider-arrow-right"></MdKeyboardArrowRight>
          </div>
        </div>
    )
}
