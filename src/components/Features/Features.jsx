import React from "react";
import data from "./data";
import "./features.css";

const Featured = () => {
  return (
    <div className="features">
      <h1 className="features-title center">Featured</h1>
      <div className="features-card">
        {data
          .filter((item) => item.featured === true)
          .map((product) => {
            const { id, image, name, price } = product;
            return (
              <article key={id} className="cocktail">
                <div className="img-container">
                  <img src={image} alt={name} />
                </div>
                <div className="cocktail-footer">
                  <div className="product">
                    <h4>{name}</h4>
                    <h4 className="price">${(price/1000).toFixed(2)}</h4>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
};
export default Featured;