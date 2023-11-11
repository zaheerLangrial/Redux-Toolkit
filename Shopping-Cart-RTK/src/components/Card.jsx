import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { additem } from "../store/slices/CartSlice";


function Card({product}) {
    const dispatch = useDispatch()
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={product.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          onClick={() => dispatch(additem({...product , quantity : 1}))}
          className="flex justify-center space-x-2 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
           <AiOutlineShoppingCart size={22}/>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
