import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart, clearCart, deleteToCart } from "../rtk/slices/cart-slice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const showCart = cart.map((cr) => (
    <div
      key={cr.id}
      className="w-full h-auto md:h-56 bg-slate-100 rounded flex items-center flex-col md:flex-row text-center md:text-left overflow-hidden"
    >
      <div className="w-full md:w-1/2">
        <img src={cr.image} className="rounded mx-auto" width={"150px"} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        <h2 className="font-bold md:text-3xl">{cr.title.slice(0, 20)}</h2>
        <p className="capitalize font-semibold">
          quantity:<span className="text-red-600">{cr.quantity}</span>
        </p>
        <p className="capitalize font-semibold">
          price:<span className="text-red-600">${cr.price * cr.quantity}</span>
        </p>
        <div>
          <button onClick={() => dispatch(addToCart(cr))}>
            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              className="py-1 px-4 border border-black mx-2 hover:bg-black hover:text-white cursor-pointer"
            />
          </button>
          <button onClick={() => dispatch(deleteToCart(cr))}>
            <FontAwesomeIcon
              icon={faMinus}
              size="2x"
              className="py-1 px-4 border border-black mx-2 hover:bg-black hover:text-white cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="px-5 md:px-20">
      <div className="flex flex-col space-y-10 mt-5">
        {cart.length === 0 ? (
          <p className="text-5xl font-bold text-center">your cart is empty</p>
        ) : (
          showCart
        )}
      </div>
      {cart.length === 0 ? (
        ""
      ) : (
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 py-2 px-5 text-white rounded capitalize mt-3 block mx-auto"
        >
          Delete all cart
        </button>
      )}
    </div>
  );
};

export default Cart;
