import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../../src/utils/store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-5 p-5  ">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto shadow-lg">
        <button
          className="border border-black p-2 m-2 rounded-lg bg-red-500"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>{" "}
        {cartItems.length === 0 && (
          <h1>Your card is empty. Add items to card</h1>
        )}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
