import React from 'react'

const Product = ({ image, itemName }) => {
  return (
    <div className="product">
        <div className="img-container">
            <img loading="lazy" src={image} alt={itemName + " image"}></img>
        </div>
        <div className="info">
            <h4>{itemName}</h4>
        </div>
    </div>
  )
}
export default Product