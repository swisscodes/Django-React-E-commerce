import "./css/Categories.css";
import CategoriesData from "./data/CategoriesData.json" 
import React from 'react';
import CategoriesItem from "./CategoriesItem"

export default function Categories() {
    return (
        <div className="categories-container">
          {CategoriesData.map((item_obj) =>
            <CategoriesItem item={item_obj} key={item_obj.id}>
            </CategoriesItem>
          )}
        </div>
    )
}
