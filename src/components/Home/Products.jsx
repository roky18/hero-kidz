import React from "react";
// import products from "@/data/toys.json";
import ProductCard from "../carrds/ProductCard";
import { getProducts } from "@/actions/server/product";
import Link from "next/link";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Link href="/" className="btn btn-primary btn-dash">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Products;
