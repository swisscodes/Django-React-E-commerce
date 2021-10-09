import "./css/ProductList.css";
import React, {useState, useRef, useEffect } from 'react';
import Products from '../components/Products';

export default function ProductList() {
  const [currentState, setState] = useState();
  const selected = useRef()
  const newest = useRef();
  const asc = useRef();
  const desc = useRef();
  function selectAscOrDesc(ascOrDesc) {
     setState(()=>ascOrDesc)
  };
  
  useEffect(()=>
    setState(()=> selected.current.value)
  ,[currentState]);

  
  //useEffect(()=>console.log(currentState +",", selected.current.value));
  //var filter = Array.from({length: 3}, () => Math.floor(Math.random() * 3)+1 )
    return (
      <>
        <div className="ProductList-container">
          <h1 className="ProductList-h1">Dresses</h1>
          <div className="ProductList-filter-container">
            <div className="ProductList-filter">
              <span className="ProductList-span span-left">
              Filter Products:
              </span>
              <select className="ProductList-select">
                <option  className="ProductList-option" disabled defaultValue selected>Color</option>
                <option className="ProductList-option">White</option>
                <option className="ProductList-option">Black</option>
                <option className="ProductList-option">Red</option>
                <option className="ProductList-option">Blue</option>
                <option className="ProductList-option">Yellow</option>
                <option className="ProductList-option">Green</option>
              </select>
              <select className="ProductList-select">
                <option className="ProductList-option" disabled defaultValue selected>Size</option>
                <option className="ProductList-option">XS</option>
                <option className="ProductList-option">S</option>
                <option className="ProductList-option">M</option>
                <option className="ProductList-option">L</option>
                <option className="ProductList-option">XL</option>
              </select>
            </div>
            <div className="ProductList-filter">
              <span className="ProductList-span span-right">
              Sort Prducts:
              </span>
              <select
                className="ProductList-select"
                ref={selected} 
                value={currentState} 
                onChange={(event)=>selectAscOrDesc(event.target.value)}>
                <option  className="ProductList-option" defaultValue ref={newest} value="newest">Newest</option>
                <option className="ProductList-option" ref={asc} value="asc">Price (asc)</option>
                <option className="ProductList-option" ref={desc} value="desc">Price (desc)</option>
              </select>
            </div>
          </div>
        </div>
        <Products />
      </>
    )
}