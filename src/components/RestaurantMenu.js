import { useParams } from "react-router-dom";
import { img_cdn_link } from "../constants";
import { useState, useEffect } from "react";
import useRestaurant from "./utils/useRestaurant";

const Restaurantmenu = () => {
  const { resId } = useParams();
  
  //   console.log(resId);
  const restaurant = useRestaurant(resId);

  return (
    <div className="menu-page">
      <div className="menu-left">
        <h1>Restaurant id :{resId}</h1>
        <img src={img_cdn_link + restaurant?.cloudinaryImageId} />
        <h1>{restaurant?.name}</h1>
        <h3>{restaurant?.cuisines?.join(",")}</h3>
        <h4>
          {restaurant?.avgRating} ⭐|{restaurant?.costForTwoMsg}
        </h4>
        <h4>{restaurant?.area}</h4>
      </div>
      <div className="menu-right">
        <h1> Menu </h1>
        {restaurant?.menu?.items &&
          Object.values(restaurant?.menu?.items).map((item) => (
            <div className="menu-item" key={item.id}>
              <li>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Restaurantmenu;
