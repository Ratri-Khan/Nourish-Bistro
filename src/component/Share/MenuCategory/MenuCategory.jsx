// import React from 'react';

import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-4 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 my-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
