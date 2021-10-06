import "./css/Products.css"
import PopularProducts from "./data/PopularProducts.json"
import ProductDetail from "./ProductDetail"
import React from 'react'

export default function Products() {
    return (
        <div className="Products-container">
          
            {PopularProducts.map((obj) =>
              <ProductDetail product={obj} key={obj.id}>
              </ProductDetail>
              )}

        </div>
    )
}
