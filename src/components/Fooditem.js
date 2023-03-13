import { useEffect, useState } from "react";
import { img_cdn_link } from "../constants";
import Pricecontext from "./utils/Pricecontext";
const Fooditem = ({ name, price, cloudinaryImageId }) => {
  const [totalPrice, setTotalPrice] = useState({
    totalPrice: 0,
  });
  console.log(totalPrice);
  useEffect(() => {
    const foodPrice = price ? price / 100 : 150;
    console.log(foodPrice);
    const newTotalPrice = totalPrice.totalPrice + foodPrice;
    console.log(newTotalPrice);
    setTotalPrice(newTotalPrice);
  }, []);
  console.log(totalPrice);
  return (
    <>
      <div className=" p-2  m-2 w-48 hover:shadow-lg">
        <Pricecontext.Provider value={{ totalPrice: totalPrice }}>
          <img
            className="border-2 border-yellow-300"
            src={img_cdn_link + cloudinaryImageId}
          />
          <h6 className=" flex justify-between">
            <div> {name}</div> <div>rs{price ? price / 100 : 150}</div>
          </h6>
        </Pricecontext.Provider>
      </div>
    </>
  );
};

export default Fooditem;
