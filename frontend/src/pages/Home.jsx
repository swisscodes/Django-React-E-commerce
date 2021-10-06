import React from 'react'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div>
          <Announcement></Announcement>
          <Navbar></Navbar>
          <Slider></Slider>
          <Categories>
          </Categories>
          <Products></Products>
          <Newsletter></Newsletter>
          <Footer></Footer>
        </div>
    )
}
