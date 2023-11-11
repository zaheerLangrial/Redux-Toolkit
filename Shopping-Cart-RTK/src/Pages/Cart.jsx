import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {BiSolidDownArrow} from 'react-icons/bi'
import {BiSolidUpArrow} from 'react-icons/bi'
import { decrementQ, incrementQ } from "../store/slices/CartSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  return (
    <div className="w-full">
      <div className=" max-w-7xl mx-auto flex justify-center">
        <table className="table mt-5">
          <thead className="">
            <tr className="text-center">
              <th >#</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => {
              return (
                <tr className=" border">
                  <td className="w-48 text-center">{product.id}</td>
                  <td className=" py-5 px-10">
                    <img src={product.image} alt="" width={75}/>
                    
                  </td>
                  <td className="w-48 text-center">{product.price}</td>
                  <td className="w-48 text-center">
                    <BiSolidUpArrow className=" cursor-pointer" onClick={() => dispatch(incrementQ(product.id))}/>
                    {product.quantity} 
                    <BiSolidDownArrow className=" cursor-pointer" onClick={() => dispatch(decrementQ(product.id))}/>
                    </td>
                  <td className="w-48 text-center">{product.quantity * product.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
