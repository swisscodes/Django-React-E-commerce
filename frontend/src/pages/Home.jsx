import React from 'react'
import Categories from '../components/Categories';
import Slider from "../components/Slider";
import Products from '../components/Products';


export default function Home() {
    return (
        <div>
          <Slider></Slider>
          <Categories>
          </Categories>
          <Products></Products>
        </div>
    )
}
