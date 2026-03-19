import React from "react";

const Menu = ({ title, price, img, desc }) => {
  return (
    <div className="menu-item">
      <img className="photo" src={img} />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>

        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
