import "./css/Product.css"
import React from 'react'
//import { useParams } from "react-router-dom";

export default function Product() {
    //const {id} = useParams();
    return (
        <div className="Product-container">
          <div className="Product-wrapper">
            <div className="Product-img-containter">
              <img className="Product-img" src="https://agnesb-agnesb-com-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/3b8cb5fc70b40a6e4f48eef8e1c30af38dc3bb4a_0054J008_1000_1.jpeg" alt=""></img>
            </div>
            <div className="Product-info-container">
              <h1 className="Product-h1">ok</h1>
              <p className="Product-p">Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book. It has 
              survived not only five centuries, but also the leap 
              into electronic typesetting, remaining essentially 
              unchanged. It was popularised in the 1960s with the 
              release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software 
              like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <span className="Product-span">Price $</span>
            </div>
          </div>
        </div>
    )
}
