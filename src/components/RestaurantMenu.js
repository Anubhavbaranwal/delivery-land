import { useParams } from "react-router-dom";
import { img_cdn_link } from "../constants";
import { useState, useEffect } from "react";
import useRestaurant from "./utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlices";

const Restaurantmenu = () => {
  const { resId } = useParams();

  //   console.log(resId);
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className=" justify-center text-center">
      <div className="flex bg-yellow-100 align-middle pt-4">
        <div>
          <h1>Restaurant id :{resId}</h1>
          <img src={img_cdn_link + restaurant?.cloudinaryImageId} />
        </div>
        <div className=" decoration-white  m-32">
          <h1 className="font-bold py-2 text-5xl">{restaurant?.name}</h1>
          <h3 className="text-3xl">{restaurant?.cuisines?.join(",")}</h3>
          <h4 className="text-2xl">
            {restaurant?.avgRating} ⭐|{restaurant?.costForTwoMsg}
          </h4>
          <h4 className="text-xl">{restaurant?.area}</h4>
        </div>
      </div>
      <div
        className=" text-center
        "
      >
        <h1 className="font-bold text-2xl"> Menu </h1>
        <div className="ml-[390]">
          {restaurant?.menu?.items &&
            Object.values(restaurant?.menu?.items).map((item) => (
              <div
                className="border-2  w-[700] px-1 h-32 m-3  flex justify-between"
                key={item.id}
              >
                <li className="text-start">
                  <span className="font-bold">{item.name}</span>
                  <span>
                    -------{item.price / 100 === 0 ? 150 : item.price / 100}
                  </span>
                  <p>{item.description}</p>
                </li>
                <div>
                  <img
                    className="h-20 w-20 p-1 align-middle"
                    src={
                      item.cloudinaryImageId
                        ? img_cdn_link + item.cloudinaryImageId
                        : " "
                    }
                  />
                  <button
                    className="p-1 mt-1 bg-green-700 w-16 "
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
