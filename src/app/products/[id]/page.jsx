import { getSingleProduct } from "@/actions/server/product";
import CartBtn from "@/components/Button/CartBtn";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Hero Kids",
      description: "Sorry, product not found",
    };
  }

  return {
    title: `${product.title} | Hero Kids`,
    description: product.description.slice(0, 150),
    openGraph: {
      title: `${product.title} | Hero Kids`,
      description: product.description.slice(0, 150),
      images: [
        {
          url: product.image, // product image link
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Hero Kids`,
      description: product.description.slice(0, 150),
      images: [product.image],
    },
  };
}

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  console.log(product);

  const {
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountPrice = price - (price * discount) / 100;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          width={600}
          height={420}
          src={image}
          alt={title}
          className="w-full h-[420px] object-cover"
        />
      </div>

      {/* Details */}
      <div className="space-y-6 flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-3xl font-bold">{title}</h1>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-green-600">
            ৳{discountPrice.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="text-md text-gray-500 line-through">৳{price}</span>
          )}
        </div>

        {/* Ratings & Stats */}
        <div className="text-sm text-gray-700 flex gap-4">
          <span>⭐ {ratings}</span>
          <span>Reviews: {reviews}</span>
          <span>Sold: {sold}</span>
        </div>
        {/* Add to Cart */}
        <CartBtn product={product}></CartBtn>
      </div>
      <div className="col-span-full mt-10 spacey-2">
        {/* Description */}
        <p className="text-gray-700">{description}</p>

        {/* Info List */}
        {info && info.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {info.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/* Q&A Section */}
        {qna && qna.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-semibold">Q & A</h2>
            {qna.map((qa, idx) => (
              <div key={idx} className="border p-4 rounded-lg bg-gray-50">
                <p className="font-medium">Q: {qa.question}</p>
                <p className="text-gray-600">A: {qa.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
