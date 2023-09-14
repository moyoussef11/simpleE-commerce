import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";

const Details = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();



  async function getProduct() {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="px-5 md:px-20 mt-20">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left space-x-10">
        <div className="w-full md:w-1/2">
          <img  src={product.image} className="w-96 h-96" />
        </div>
        <div className="w-full md:w-1/2">
          <h5 className="uppercase text-gray-400 font-bold">
            {product.category}
          </h5>
          <h2 className="font-semibold text-6xl">{product.title}</h2>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-4xl font-semibold text-red-700 mr-2 mb-2">
            ${product.price}
          </span>
          <p className="text-gray-400">{product.description}</p>
          <button
            onClick={()=>dispatch(addToCart(product))}
            className="py-2 px-5 rounded capitalize border border-black mx-2 mt-3 hover:bg-black hover:text-white"
          >
            add to cart
          </button>
          <Link to="/cart">
            <button className="py-2 px-5 rounded capitalize border border-black mx-2 mt-3 bg-black text-white hover:text-black hover:bg-white">
              go to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
