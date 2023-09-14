import {
  faBarsStaggered,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const [nav, setNav] = useState(false);
  const cart = useSelector(state => state.cart);


  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="h-16 w-full px-5 flex items-center justify-between md:px-20 bg-slate-50 shadow">
      <Link to="/" className="text-2xl md:text-4xl font-bold">
        Ecommerce
      </Link>
      <ul className="hidden md:flex items-center md:space-x-2 lg:space-x-5 h-16">
        <li>
          <Link
            to="/"
            className="text-slate-400 font-semibold hover:text-black transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="text-slate-400 font-semibold hover:text-black transition-all"
          >
            Products
          </Link>
        </li>
      </ul>
      <ul className="hidden md:flex items-center md:-space-x-1 lg:space-x-10 h-16">
        <li>
          <Link
            to="/cart"
            className="border  border-black px-5 md:border-none md:p-0 py-1 hover:border-none hover:bg-slate-400 transition-all"
          >
            <FontAwesomeIcon icon={faCartShopping} /> Cart-{cart.length}
          </Link>
        </li>
      </ul>
      <div className="md:hidden" onClick={handleNav}>
        {!nav ? (
          <FontAwesomeIcon
            size="2x"
            className="cursor-pointer"
            icon={faBarsStaggered}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            className="cursor-pointer"
          />
        )}
      </div>

      {nav ? (
        <ul className="container w-full bg-slate-100 fixed top-16 flex flex-col space-y-5 px-1 rounded">
          <li>
            <Link
              to="/"
              className="text-slate-400 font-semibold hover:text-black transition-all"
            >
              Home
            </Link>
          </li>

          <li>
            <Link className="text-slate-400 font-semibold hover:text-black transition-all">
              Products
            </Link>
          </li>
       
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} /> Cart-{cart.length}
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
export default Header;
