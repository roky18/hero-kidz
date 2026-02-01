import ProductSleleton from "@/components/Skeleton/ProductSleleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid md:grid-cols-4 gap-5">
      {[...Array(9)].map((_, index) => (
        <ProductSleleton key={index}></ProductSleleton>
      ))}
    </div>
  );
};

export default loading;
