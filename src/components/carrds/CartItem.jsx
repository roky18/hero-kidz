/* eslint-disable @next/next/no-img-element */
"use client";

import { deleteItemFromCart } from "@/actions/server/cart";
import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";

const CartItem = ({ item, onIncrement, onDecrement }) => {
  const handleDeleteCart = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemFromCart(item._id);
        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps!",
            text: "Something Went Wrong.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="flex items-center gap-4 border-b py-4">
      {/* Image */}
      <div className="w-24 h-24">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Title & Price */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-primary font-bold">৳ {item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onDecrement(item.productId)}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <FiMinus />
        </button>
        <span className="px-2 font-semibold">{item.quantity}</span>
        <button
          onClick={() => onIncrement(item.productId)}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <FiPlus />
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleDeleteCart}
        className="text-red-500 p-2 hover:text-red-700"
      >
        <FiTrash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;
