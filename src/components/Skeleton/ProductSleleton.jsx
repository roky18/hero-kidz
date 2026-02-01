import React from "react";

const ProductSleleton = () => {
  return (
    <div className="card bg-base-100 shadow-lg animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg"></div>
      <div className="card-body space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-5 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="flex justify-between">
          <div className="h-5 bg-gray-200 rounded w-20"></div>
          <div className="h-9 bg-gray-200 rounded w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSleleton;
