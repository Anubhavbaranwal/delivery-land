import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fooditem from "./Fooditem";
import { clearCart } from "./utils/cartSlices";
import Pricecontext from "./utils/Pricecontext";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const { totalPrice } = useContext(Pricecontext);

  const dispatch = useDispatch();
  const handleclear = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1 className="font-bold text-center text-5xl">
        {" "}
        Cart Items -{cartItems.length}
      </h1>
      <div className="font-bold text-center ">
        <button
          className="bg-green-100 text-center  rounded text-2xl"
          onClick={() => handleclear()}
        >
          ClearCart
        </button>
      </div>

      <div className="flex flex-wrap mx-32">
        {cartItems.map((items) => (
          <Fooditem {...items} key={items.id} />
        ))}
      </div>
      <h1 className="text-center font-bold">
        {cartItems.length === 0 ? "  " : "TotalPrice :Rs 1540"}
      </h1>
    </>
  );
};
export default Cart;
