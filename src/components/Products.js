import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getProducts() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  async function getCategories() {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }
  // Get products in a specific category
  async function getSpecificCat(name) {
    await fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  //
  const showProducts = products.map((pro) => (
    <div className="rounded shadow-lg w-1/2 md:w-1/4 lg:w-1/6 p-1" key={pro.id}>
      <img className="h-60" width='100%' src={pro.image} alt={pro.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pro.title.substring(0,10)}...</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
          ${pro.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          rating {pro.rating.rate}
        </span>
      </div>
      <Link to={`/products/details/${pro.id}`}>
        <button className="capitalize py-2 px-4 bg-blue-600 rounded hover:bg-blue-300 text-white">
          Buy now
        </button>
      </Link>
    </div>
  ));
  const showCat = categories.map((cat, index) => (
    <button
      key={index}
      className="border border-black rounded capitalize py-2 px-5 mt-5 mx-2 hover:bg-slate-500 hover:text-white"
      onClick={() => getSpecificCat(cat)}
    >
      {cat}
    </button>
  ));

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <div className="px-5 md:px-20 w-full">
      <div className="text-center py-20">
        <h3 className="text-4xl font-semibold capitalize">latest Products</h3>
        <span className="w-full bg-slate-300 h-1 block mt-10"></span>
        <div>
          <button
            className="border border-black rounded capitalize py-2 px-5 mt-5 mx-2 hover:bg-slate-500 hover:text-white"
            onClick={() => getProducts()}
          >
            all
          </button>
          {showCat}
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between space-y-7 md:space-x-4">
          {products.length===0?<Loading/>:showProducts}
        </div>
      </div>
    </div>
  );
};

export default Products;
