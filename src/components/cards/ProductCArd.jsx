"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
      <figure className="px-4 pt-4">
        <Image
          width={200}
          height={180}
          src={product.image}
          alt={product.title}
          className="rounded-lg max-h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{product.title}</h2>

        {/* Price + Discount */}
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold text-green-600">
            ৳{product.price - (product.price * product.discount) / 100}
          </p>
          {product.discount > 0 && (
            <p className="text-sm text-gray-500 line-through">
              ৳{product.price}
            </p>
          )}
        </div>

        {/* Description Short */}
        <p className="text-sm text-gray-700 line-clamp-2">
          {product.description}
        </p>

        {/* Ratings & Sold */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>⭐ {product.ratings}</span>
          <span>Sold: {product.sold}</span>
        </div>

        {/* view button */}
        <div className="card-actions justify-end  ">
          <Link
            href={`/products/${product._id}`}
            className="btn btn-primary btn-dash w-full gap-2"
          >
            View details
          </Link>
        </div> 
        {/* Add to Cart button */}
        <div className="card-actions justify-end  ">
          <button
            onClick={() => onAddToCart(product)}
            className="btn btn-primary w-full gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
