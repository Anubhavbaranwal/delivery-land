import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(" ");
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.6286706&lng=77.36402570000001&menuId=" +
        resId
    );
    const json = await menu.json();
    console.log(json?.data);
    setRestaurant(json?.data);
  }
  return restaurant;
};

export default useRestaurant;
